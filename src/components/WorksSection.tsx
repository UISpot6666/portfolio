import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import './worksSection11902407.css'
import hrMobileBg from '../assets/HR Solution, B2B SaaS_mobile.png'
import aiMarketingMobileBg from '../assets/AI Marketing Tool, B2C-B2B_mobile.png'
import onboardingMobileBg from '../assets/Onboarding improvement, B2C_mobile.png'

type WorksSectionProps = {
  id?: string
}

type WorksMobileBgStyle = CSSProperties & {
  '--works1190-mobile-bg'?: string
}

const FEATURE_IMAGE = '/figma-assets/works/work-feature.png'
const CARD2_IMAGE = '/figma-assets/works/work-card-2.png'
const CARD3_IMAGE = '/figma-assets/works/work-card-3.png'

const FEATURE_TABLET_IMAGE = '/figma-assets/works/works-hr-tablet.jpg'
const AI_MARKETING_TABLET_BG = '/figma-assets/works/ai-marketing-tablet-bg.png'
const ONBOARDING_TABLET_BG = '/figma-assets/works/onboarding-tablet-bg.png'
const CARD2_TABLET_IMAGE = '/figma-assets/works/works-ai-tablet.png'
const CARD3_TABLET_IMAGE = '/figma-assets/works/works-onboarding-tablet.png'

/** Arrow icon frame 26×26, drawable 18×18 at offset (4,4) — matches hero primary CTA */
function WorksCtaArrow() {
  return (
    <span className="works1190__cta-icon" aria-hidden>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
    </span>
  )
}

/**
 * Third section Works — Figma 1190:2407
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1190-2407&m=dev
 */
export function WorksSection({ id }: WorksSectionProps) {
  return (
    <section id={id} className="works1190" aria-labelledby="works-heading" data-header-theme="dark">
      <div className="works1190__inner">
        <header className="works1190__header">
          <h2 id="works-heading" className="works1190__title">
            Works
          </h2>
          <p className="works1190__subtitle">
            Selected work across product, web, and digital design.
          </p>
        </header>

        <div className="works1190__grid">
          <Link
            to="/works/hr-solution"
            className="works1190-card works1190-card--featured"
          >
            <img
              className="works1190-card__mobile-bg"
              src={hrMobileBg}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-card__tablet-visual"
              src={FEATURE_TABLET_IMAGE}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-card__media"
              src={FEATURE_IMAGE}
              alt=""
              decoding="async"
              loading="lazy"
            />
            <ul className="works1190-card__tags" aria-label="Project types">
              {['Web-application', 'Mobile app', 'Website', 'Branding'].map(
                (label) => (
                  <li key={label}>
                    <span className="works1190-card__tag">{label}</span>
                  </li>
                ),
              )}
            </ul>
            <h3 className="works1190-card__title">
              HR Solution, B2B SaaS
            </h3>
          </Link>

          <Link
            to="/works/ai-marketing"
            className="works1190-card works1190-card--half works1190-card--mint"
            style={
              {
                '--works1190-mobile-bg': `url(${aiMarketingMobileBg})`,
              } as WorksMobileBgStyle
            }
          >
            <img
              className="works1190-card__mobile-bg"
              src={aiMarketingMobileBg}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-ai-tablet-bg"
              src={AI_MARKETING_TABLET_BG}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-card__tablet-visual"
              src={CARD2_TABLET_IMAGE}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-card__media"
              src={CARD2_IMAGE}
              alt=""
              decoding="async"
              loading="lazy"
            />
            <ul className="works1190-card__tags" aria-label="Project types">
              {['Web-application', 'Website', 'Branding'].map((label) => (
                <li
                  key={label}
                  className={
                    label === 'Website'
                      ? 'works1190-card__tag-item--hide-mobile'
                      : undefined
                  }
                >
                  <span className="works1190-card__tag">{label}</span>
                </li>
              ))}
            </ul>
            <h3 className="works1190-card__title">
              AI Marketing Tool, B2C/B2B
            </h3>
          </Link>

          <Link
            to="/works/onboarding"
            className="works1190-card works1190-card--half works1190-card--pink"
            style={
              {
                '--works1190-mobile-bg': `url(${onboardingMobileBg})`,
              } as WorksMobileBgStyle
            }
          >
            <img
              className="works1190-card__mobile-bg"
              src={onboardingMobileBg}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-onboarding-tablet-bg"
              src={ONBOARDING_TABLET_BG}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-card__tablet-visual"
              src={CARD3_TABLET_IMAGE}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
            <img
              className="works1190-card__media"
              src={CARD3_IMAGE}
              alt=""
              decoding="async"
              loading="lazy"
            />
            <ul className="works1190-card__tags" aria-label="Project types">
              {['Onboarding', 'Appstore Screens'].map((label) => (
                <li key={label}>
                  <span className="works1190-card__tag">{label}</span>
                </li>
              ))}
            </ul>
            <h3 className="works1190-card__title">
              Onboarding improvement, B2C
            </h3>
          </Link>

          <div className="works1190__cta-shell">
            <a className="works1190__cta" href="#works">
              <span className="works1190__cta-row">
                <span>View more projects</span>
                <WorksCtaArrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
