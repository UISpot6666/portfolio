import { FloatingCards561 } from '../hero/FloatingCards561'
import { HeroPortfolioBackground } from '../hero/HeroPortfolioBackground'
import { HeroPortfolioCta } from '../hero/HeroPortfolioCta'
import { HeroPortfolioNavbar } from '../hero/HeroPortfolioNavbar'

/**
 * Portfolio hero matched to Figma node 1174:561 —
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1174-561
 *
 * Implemented with HTML + Tailwind + hero background image.
 */
export function HeroPortfolio561() {
  return (
    <section
      className="hero561 relative flex min-h-[940px] w-full flex-col overflow-hidden bg-[#0e143f] font-['Archivo',sans-serif] text-white"
      aria-labelledby="hero-portfolio-heading"
      data-header-theme="light"
    >
      <HeroPortfolioBackground />
      <HeroPortfolioNavbar />
      <div className="hero561__nav-spacer h-[72px] shrink-0" aria-hidden="true" />

      <div className="hero561__content relative z-10 mx-auto flex w-full max-w-[812px] flex-1 flex-col items-center gap-0 px-6 pb-16 pt-[7.75rem] text-center md:px-0 md:pb-[4.5rem] md:pt-[138px]">
        <FloatingCards561 />

        <div className="hero561__copy flex w-full max-w-[812px] flex-col items-center gap-4">
          <h1
            id="hero-portfolio-heading"
            className="hero561-h1-gradient m-0 max-w-[920px] text-[clamp(2.125rem,5vw,4.5rem)] font-semibold leading-[104%] tracking-[-0.02em] md:text-[72px]"
          >
            <span className="hero561__title-copy hero561__title-copy--flow">
              I design products that drive revenue and ROI
            </span>
            <span className="hero561__title-copy hero561__title-copy--tablet">
              <span className="hero561__title-line">I design products that</span>
              <span className="hero561__title-line">drive revenue and ROI</span>
            </span>
          </h1>

          <p className="hero561__subcopy m-0 max-w-[576px] font-normal leading-[140%] text-white opacity-80 md:text-[18px] md:leading-[140%]">
            <span className="hero561__subcopy-copy hero561__subcopy-copy--flow">
              Grow in the eyes of your users with modern web design and simplify
              their decision. You have already found a reliable partner, the rest is
              easy.
            </span>
            <span className="hero561__subcopy-copy hero561__subcopy-copy--tablet">
              <span className="hero561__subcopy-line">
                Grow in the eyes of your users with modern web design and simplify
                their decision.
              </span>
              <span className="hero561__subcopy-line">
                You have already found a reliable partner, the rest is easy.
              </span>
            </span>
          </p>
        </div>

        <div className="hero561__cta-zone mt-10 flex w-full flex-col items-center gap-4 md:mt-12">
          <HeroPortfolioCta />
        </div>
      </div>
    </section>
  )
}
