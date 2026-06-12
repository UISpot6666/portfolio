/**
 * Navbar CTA — Figma node 1174:602 (“Link - buy now first fold”)
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1174-602&m=dev
 */
import './FigmaNavbarLetsTalk1174602.css'

export type FigmaNavbarLetsTalk1174602Props = {
  href?: string
  className?: string
  /** Matches portfolio header palette — `light` on dark sections, `dark` on light sections. */
  theme?: 'light' | 'dark'
}

/** 26×26 frame, 18×18 graphic at (4,4) — same geometry as hero primary CTA icon, stroke white */
function LetsTalkIcon602() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="figma-nav-lets-talk-602__svg"
      aria-hidden
    >
      <g transform="translate(4 4)">
        <path
          d="M5 13L13 5M13 5H7M13 5V11"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export function FigmaNavbarLetsTalk1174602({
  href = '#contact',
  className = '',
  theme = 'light',
}: FigmaNavbarLetsTalk1174602Props) {
  return (
    <a
      href={href}
      className={`figma-nav-lets-talk-602 figma-nav-lets-talk-602--${theme} font-['Archivo',sans-serif] ${className}`.trim()}
    >
      <span className="figma-nav-lets-talk-602__label">Let&apos;s Talk</span>
      <span className="figma-nav-lets-talk-602__icon" aria-hidden>
        <LetsTalkIcon602 />
      </span>
    </a>
  )
}
