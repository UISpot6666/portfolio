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
      className="relative flex min-h-[940px] w-full flex-col overflow-hidden bg-[#0e143f] font-['Archivo',sans-serif] text-white"
      aria-labelledby="hero-portfolio-heading"
      data-header-theme="light"
    >
      <HeroPortfolioBackground />
      <HeroPortfolioNavbar />
      <div className="h-[72px] shrink-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[812px] flex-1 flex-col items-center px-6 pb-16 pt-[7.75rem] text-center md:px-0 md:pb-[4.5rem] md:pt-[138px]">
        <FloatingCards561 />

        <div className="flex w-full max-w-[812px] flex-col items-center gap-4">
          <h1
            id="hero-portfolio-heading"
            className="hero561-h1-gradient m-0 max-w-[920px] text-[clamp(2.125rem,5vw,4.5rem)] font-semibold leading-[104%] tracking-[-0.02em] md:text-[72px]"
          >
            I design products that drive revenue and ROI
          </h1>

          <p className="m-0 max-w-[576px] font-normal leading-[140%] text-white opacity-80 md:text-[18px] md:leading-[140%]">
            Grow in the eyes of your users with modern web design and simplify
            their decision. You have already found a reliable partner, the rest is
            easy.
          </p>
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-4 md:mt-12">
          <HeroPortfolioCta />
        </div>
      </div>
    </section>
  )
}
