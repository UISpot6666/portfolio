import heroBackground from '../assets/Frame 2147226408.png'
import heroBackground1920 from '../assets/hero-bg-1920.png'
import heroBackground640 from '../assets/hero-bg-640.png'
import './heroPortfolio.css'

export function HeroPortfolioBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <picture className="hero561-bg-picture absolute inset-0 block h-full w-full">
        <source media="(min-width: 1920px)" srcSet={heroBackground1920} />
        <source media="(max-width: 640px)" srcSet={heroBackground640} />
        <img
          src={heroBackground}
          alt=""
          className="hero561-bg-image absolute inset-0 h-full w-full"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  )
}
