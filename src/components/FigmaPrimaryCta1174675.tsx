/**
 * Primary CTA — Figma node 1174:675
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1174-675&m=dev
 */
import type { ReactNode } from 'react'
import './FigmaPrimaryCta1174675.css'

export type FigmaPrimaryCta1174675Props = {
  href?: string
  /** Optional subtitle (same frame group in hero: “Multiply your efforts x3”) */
  subtitle?: ReactNode
  className?: string
}

/** SVG mirrors Figma: 26×26 frame, 18×18 content inset at x=4, y=4, stroke Black #070E41 */
function CtaIconSvg() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="figma-primary-cta-675__svg"
      aria-hidden
    >
      <title>Navigate</title>
      <g transform="translate(4 4)">
        <path
          d="M5 13L13 5M13 5H7M13 5V11"
          stroke="#070E41"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export function FigmaPrimaryCta1174675({
  href = '#works',
  subtitle,
  className = '',
}: FigmaPrimaryCta1174675Props) {
  return (
    <div className={`figma-primary-cta-675-wrap ${className}`.trim()}>
      <a href={href} className="figma-primary-cta-675 font-['Archivo',sans-serif]">
        <span className="figma-primary-cta-675__row">
          <span className="figma-primary-cta-675__label">View projects</span>
          <span className="figma-primary-cta-675__icon">
            <CtaIconSvg />
          </span>
        </span>
      </a>
      {subtitle}
    </div>
  )
}
