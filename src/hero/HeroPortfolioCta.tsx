/**
 * Hero helper: CTA zone from Figma 1174:675 + subtitle from parent frame group.
 */
import { FigmaPrimaryCta1174675 } from '../components/FigmaPrimaryCta1174675'

export function HeroPortfolioCta() {
  return (
    <FigmaPrimaryCta1174675
      href="#works"
      subtitle={
        <p className="figma-primary-cta-675__caption">
          Multiply your efforts x3
        </p>
      }
    />
  )
}
