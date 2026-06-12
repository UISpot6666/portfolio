import { useEffect, useRef, useState } from 'react'

import { type HeaderTheme, readHeaderThemeFromDom } from './headerTheme'

const SCROLL_THRESHOLD = 10

export function usePortfolioHeaderState() {
  const [isVisible, setIsVisible] = useState(true)
  const [theme, setTheme] = useState<HeaderTheme>('light')
  const lastScrollY = useRef(0)
  const lastTheme = useRef<HeaderTheme>('light')
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const update = () => {
      const currentScrollY = window.scrollY
      const previousScrollY = lastScrollY.current

      if (currentScrollY <= 0) {
        setIsVisible((prev) => (prev ? prev : true))
        lastScrollY.current = currentScrollY
      } else if (currentScrollY > previousScrollY + SCROLL_THRESHOLD) {
        setIsVisible((prev) => (prev ? false : prev))
        lastScrollY.current = currentScrollY
      } else if (currentScrollY < previousScrollY - SCROLL_THRESHOLD) {
        setIsVisible((prev) => (prev ? prev : true))
        lastScrollY.current = currentScrollY
      }

      const nextTheme = readHeaderThemeFromDom(lastTheme.current)
      lastTheme.current = nextTheme
      setTheme((prev) => (prev === nextTheme ? prev : nextTheme))

      ticking.current = false
    }

    const schedule = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return { isVisible, theme }
}
