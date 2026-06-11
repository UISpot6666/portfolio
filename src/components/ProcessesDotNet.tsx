import { useEffect, useRef, type RefObject } from 'react'

/** Fixed spacing keeps the matrix aligned across resizes. */
const SPACING = 120
const DOT_RADIUS = 1
const DOT_COLOR = '#070e41'
const INFLUENCE_RADIUS = 140
const MAX_DISPLACE = 5
const DOT_BASE_ALPHA = 1
const DOT_HOVER_ALPHA = 1
const SPRING = 0.14
const REST_SPRING = 0.1

type GridPoint = {
  bx: number
  by: number
  x: number
  y: number
  col: number
  row: number
}

type GridState = {
  points: GridPoint[]
  cols: number
  rows: number
}

function buildGrid(width: number, height: number): GridState {
  const cols = Math.floor(width / SPACING) + 2
  const rows = Math.floor(height / SPACING) + 2
  const points: GridPoint[] = []

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const bx = col * SPACING
      const by = row * SPACING
      points.push({ bx, by, x: bx, y: by, col, row })
    }
  }

  return { points, cols, rows }
}

function influence(mouseX: number, mouseY: number, x: number, y: number) {
  const dx = x - mouseX
  const dy = y - mouseY
  const dist = Math.hypot(dx, dy)
  if (dist >= INFLUENCE_RADIUS) return 0
  const t = 1 - dist / INFLUENCE_RADIUS
  return t * t * (3 - 2 * t)
}

function getNearbyIndices(
  grid: GridState,
  mouseX: number,
  mouseY: number,
): number[] {
  const colCenter = Math.floor(mouseX / SPACING)
  const rowCenter = Math.floor(mouseY / SPACING)
  const reach = Math.ceil(INFLUENCE_RADIUS / SPACING) + 1
  const indices: number[] = []

  for (let row = rowCenter - reach; row <= rowCenter + reach; row += 1) {
    if (row < 0 || row >= grid.rows) continue
    for (let col = colCenter - reach; col <= colCenter + reach; col += 1) {
      if (col < 0 || col >= grid.cols) continue
      indices.push(row * grid.cols + col)
    }
  }

  return indices
}

type ProcessesDotNetProps = {
  containerRef: RefObject<HTMLElement | null>
}

export function ProcessesDotNet({ containerRef }: ProcessesDotNetProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })
  const frameRef = useRef<number | null>(null)
  const gridRef = useRef<GridState>({ points: [], cols: 0, rows: 0 })
  const canInteractRef = useRef(false)
  const lowPowerRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    lowPowerRef.current =
      (navigator.hardwareConcurrency ?? 8) <= 4 ||
      window.matchMedia('(max-width: 768px)').matches

    const updateInteraction = () => {
      canInteractRef.current =
        finePointer.matches && !reducedMotion.matches && !lowPowerRef.current
    }
    updateInteraction()
    reducedMotion.addEventListener('change', updateInteraction)
    finePointer.addEventListener('change', updateInteraction)

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      const dpr = lowPowerRef.current
        ? 1
        : Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      gridRef.current = buildGrid(width, height)
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      const mouse = mouseRef.current
      const grid = gridRef.current
      const { points } = grid
      const interact = canInteractRef.current && mouse.active
      let needsFrame = interact

      if (interact) {
        const nearby = getNearbyIndices(grid, mouse.x, mouse.y)
        for (const index of nearby) {
          const point = points[index]
          if (!point) continue
          const strength = influence(mouse.x, mouse.y, point.bx, point.by)
          if (strength <= 0) continue

          const dx = point.bx - mouse.x
          const dy = point.by - mouse.y
          const dist = Math.hypot(dx, dy) || 1
          const push = strength * MAX_DISPLACE
          const targetX = point.bx + (dx / dist) * push
          const targetY = point.by + (dy / dist) * push
          point.x += (targetX - point.x) * SPRING
          point.y += (targetY - point.y) * SPRING
        }
      }

      for (const point of points) {
        const dx = point.bx - point.x
        const dy = point.by - point.y
        if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02) {
          point.x += dx * REST_SPRING
          point.y += dy * REST_SPRING
          needsFrame = true
        } else {
          point.x = point.bx
          point.y = point.by
        }
      }

      for (const point of points) {
        const hover =
          interact && canInteractRef.current
            ? influence(mouse.x, mouse.y, point.x, point.y)
            : 0
        const alpha = DOT_BASE_ALPHA + hover * (DOT_HOVER_ALPHA - DOT_BASE_ALPHA)
        const radius = DOT_RADIUS + hover * 0.75
        ctx.globalAlpha = alpha
        ctx.fillStyle = DOT_COLOR
        ctx.beginPath()
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      if (needsFrame && canInteractRef.current) {
        frameRef.current = window.requestAnimationFrame(draw)
      } else {
        frameRef.current = null
      }
    }

    const scheduleDraw = () => {
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(draw)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!canInteractRef.current) return
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      }
      scheduleDraw()
    }

    const handlePointerLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false }
      if (canInteractRef.current) scheduleDraw()
    }

    const handleResize = () => {
      resize()
      draw()
    }

    resize()
    draw()

    container.addEventListener('pointermove', handlePointerMove, { passive: true })
    container.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('resize', handleResize)
      reducedMotion.removeEventListener('change', updateInteraction)
      finePointer.removeEventListener('change', updateInteraction)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [containerRef])

  return (
    <div className="proc3081__dot-field" aria-hidden>
      <canvas ref={canvasRef} className="proc3081__dot-field-canvas" />
    </div>
  )
}
