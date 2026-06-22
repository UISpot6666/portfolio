/**
 * Floating mockup cluster — Figma 1174:561 hero cards (image assets).
 */
import type { CSSProperties } from 'react'
import card1 from '../assets/1.png'
import card2 from '../assets/2.png'
import card3 from '../assets/3.png'
import card4 from '../assets/4.png'
import './heroPortfolio.css'

const STACK_MIN_HEIGHT = 100

type CardDef = {
  id: string
  src: string
  alt: string
  zIndex: number
  rotate: number
  x: number
  y: number
  scale: number
  width: number
  height: number
  blur?: number
}

const CARDS: CardDef[] = [
  {
    id: 'hire',
    src: card1,
    alt: 'Hire the best developers, faster',
    zIndex: 1,
    rotate: -14,
    x: -158,
    y: 2,
    scale: 1,
    width: 165,
    height: 152,
  },
  {
    id: 'hr',
    src: card2,
    alt: 'HR department efficiency dashboard',
    zIndex: 3,
    rotate: -9,
    x: -48,
    y: -4,
    scale: 1.04,
    width: 166,
    height: 152,
  },
  {
    id: 'founders',
    src: card3,
    alt: 'Empower Founders mobile app',
    zIndex: 4,
    rotate: 7,
    x: 62,
    y: -6,
    scale: 1.06,
    width: 164,
    height: 151,
  },
  {
    id: 'dashboard',
    src: card4,
    alt: 'Product dashboard and profile UI',
    zIndex: 2,
    rotate: 13,
    x: 172,
    y: 0,
    scale: 1,
    width: 165,
    height: 152,
    blur: 0.4,
  },
]

export function FloatingCards561() {
  return (
    <div
      className="hero561-float-wrap relative mx-auto mb-10 w-full md:mb-[40px]"
      style={{ height: STACK_MIN_HEIGHT }}
      aria-hidden
    >
      <div
        className="absolute left-1/2 top-1/2 w-full max-w-[560px]"
        style={{
          perspective: 1600,
          perspectiveOrigin: '50% 20%',
          height: STACK_MIN_HEIGHT,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {CARDS.map((card) => (
          <article
            key={card.id}
            className="absolute left-1/2 top-1/2 overflow-visible bg-transparent"
            style={
              {
                zIndex: card.zIndex,
                width: card.width,
                height: card.height,
                filter: card.blur ? `blur(${card.blur}px)` : undefined,
                transform: `translate(calc(-50% + ${card.x}px), calc(-50% + ${card.y}px)) rotate(${card.rotate}deg) scale(${card.scale})`,
                transformStyle: 'preserve-3d',
              } as CSSProperties
            }
          >
            <img
              src={card.src}
              alt={card.alt}
              width={card.width}
              height={card.height}
              className="hero561-float-card h-full w-full object-contain"
              decoding="async"
              draggable={false}
            />
          </article>
        ))}
      </div>
    </div>
  )
}
