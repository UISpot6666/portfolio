import { Link } from 'react-router-dom'

import { HeroPortfolioNavbar } from '../hero/HeroPortfolioNavbar'
import './hrCaseStudy.css'

const ASSETS = {
  hero: '/figma-assets/case-onboarding/hero-main.png',
  researchOnboarding: '/figma-assets/case-onboarding/research-onboarding.png',
  analyticsInsights: '/figma-assets/case-onboarding/analytics-insights.png',
  finalResults: '/figma-assets/case-onboarding/final-results.png',
  arrowBack: '/figma-assets/case-hr/arrow-back.svg',
  warningShield: '/figma-assets/case-hr/icon-warning-shield.png',
  warningShield2x: '/figma-assets/case-hr/icon-warning-shield@2x.png',
} as const

const HERO_TAGS = [
  {
    id: 'mobile',
    label: 'Mobile app',
    icon: '/figma-assets/case-hr/tag-mobile.svg',
  },
  {
    id: 'onboarding',
    label: 'Onboarding improvement',
    icon: '/figma-assets/case-hr/tag-branding.svg',
  },
  {
    id: 'aso',
    label: 'ASO screens',
    icon: '/figma-assets/case-hr/tag-branding.svg',
  },
  {
    id: 'date',
    label: '2025-2026',
    icon: '/figma-assets/case-hr/tag-calendar.svg',
    variant: 'date' as const,
  },
] as const

const STATS = [
  {
    value: '5/5 review',
    title: 'Client satisfaction',
    description: 'High-quality execution and collaboration',
  },
  {
    value: '+45% in trials',
    title: 'Onboarding conversion',
    description: 'Increase in users starting a trial after the onboarding redesign',
  },
  {
    value: 'A/B tests',
    title: 'Conversion experiments',
    description: 'Tested key onboarding changes to improve trial conversion',
  },
] as const

const META_CARDS = [
  { label: 'Industry', value: 'Mental health & wellness' },
  { label: 'Services', value: 'Product design, onboarding optimization, ASO design' },
  { label: 'Client', value: 'NDA' },
] as const

const CHALLENGES = [
  'Improve conversion from onboarding to trial and paid subscription',
  'Reduce drop-offs in a long and complex onboarding flow',
  'Simplify the flow without losing personalization',
  'Optimize the funnel without losing product depth',
] as const

const FIRST_STEPS = [
  'Analyzed competitors in wellness and subscription apps',
  'Reviewed onboarding best practices',
  'Identified patterns that reduce friction and improve conversion',
] as const

const FIRST_ONBOARDING_IMPROVEMENTS = [
  'Guided personalization experience',
  'Reduced cognitive load across screens',
  'More consistent and premium visual design',
  'Clear step-by-step flow',
] as const

const SECOND_ITERATION_CHANGES = [
  'Strengthened value communication before paywall',
  'Simplified login with social sign-in options',
  'Reduced friction in account creation',
  'Refined personalization to feel lighter and less demanding',
] as const

function CaseSectionHead({ label }: { label: string }) {
  return (
    <div className="hrCase1389__section-head">
      <span className="hrCase1389__label">{label}</span>
      <span className="hrCase1389__section-line" aria-hidden="true" />
    </div>
  )
}

function ChallengeWarningIcon() {
  return (
    <span className="hrCase1389__challenge-icon" aria-hidden="true">
      <img
        src={ASSETS.warningShield}
        srcSet={`${ASSETS.warningShield} 1x, ${ASSETS.warningShield2x} 2x`}
        alt=""
        width={28}
        height={28}
        decoding="async"
      />
    </span>
  )
}

function CheckIcon() {
  return (
    <span className="hrCase1389__check" aria-hidden>
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6L5 8.5L9.5 3.5"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

/**
 * Onboarding improvement case study — Figma 1400:2597
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1400-2597
 */
export function OnboardingCaseStudyPage() {
  return (
    <main className="hrCase1389" data-header-theme="dark">
      <HeroPortfolioNavbar anchorPrefix="/" />

      <div className="hrCase1389__shell">
        <Link to="/#works" className="hrCase1389__back">
          <img src={ASSETS.arrowBack} alt="" width={24} height={24} decoding="async" />
          <span>Back</span>
        </Link>

        <div className="hrCase1389__content">
          <header className="hrCase1389__hero">
            <div className="hrCase1389__hero-copy">
              <h1 className="hrCase1389__title hrCase1389__title--onboarding">
                Onboarding improvement by 45% for mental health app
              </h1>
              <ul className="hrCase1389__tags" aria-label="Project details">
                {HERO_TAGS.map((tag) => (
                  <li key={tag.id}>
                    <span
                      className={`hrCase1389__tag${'variant' in tag ? ' hrCase1389__tag--date' : ''}`}
                    >
                      <span className="hrCase1389__tag-bg" aria-hidden="true" />
                      <img
                        className="hrCase1389__tag-icon"
                        src={tag.icon}
                        alt=""
                        width={18}
                        height={18}
                        decoding="async"
                      />
                      <span className="hrCase1389__tag-label">{tag.label}</span>
                      <span className="hrCase1389__tag-shine" aria-hidden="true" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hrCase1389__hero-media">
              <img
                src={ASSETS.hero}
                alt="Mental health app onboarding screens overview"
                className="hrCase1389__hero-image"
                decoding="async"
              />
            </div>
          </header>

          <section className="hrCase1389__stats" aria-label="Project highlights">
            {STATS.map((stat) => (
              <article key={stat.value} className="hrCase1389__stat">
                <p className="hrCase1389__stat-value">{stat.value}</p>
                <div className="hrCase1389__stat-divider" aria-hidden="true" />
                <div className="hrCase1389__stat-copy">
                  <p className="hrCase1389__stat-title">{stat.title}</p>
                  <p className="hrCase1389__stat-desc">{stat.description}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="hrCase1389__overview" aria-label="Project overview">
            <aside className="hrCase1389__meta">
              {META_CARDS.map((card) => (
                <div key={card.label} className="hrCase1389__meta-card">
                  <p className="hrCase1389__meta-label">{card.label}</p>
                  <p className="hrCase1389__meta-value">{card.value}</p>
                </div>
              ))}
            </aside>

            <div className="hrCase1389__story">
              <div className="hrCase1389__block">
                <CaseSectionHead label="About the Project" />
                <p className="hrCase1389__body">
                  Meditation and hypnosis app designed to help users improve mental
                  well-being
                </p>
              </div>

              <div className="hrCase1389__block">
                <CaseSectionHead label="Challange" />
                <ul className="hrCase1389__challenge-list">
                  {CHALLENGES.map((item) => (
                    <li key={item} className="hrCase1389__challenge-item">
                      <ChallengeWarningIcon />
                      <p className="hrCase1389__challenge-text">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="hrCase1389__section hrCase1389__section--center">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Competitor research" />
              <div className="hrCase1389__body-stack">
                <p className="hrCase1389__body">
                  Before redesigning anything, I audited how competitors handled onboarding.
                </p>
                <p className="hrCase1389__body">
                  I looked at how many steps they used, when they introduced the paywall,
                  how they built personalization, and how they communicated value. This gave
                  me a clear picture of what patterns actually work in this space.
                </p>
              </div>
            </div>

            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="First steps" />
              <p className="hrCase1389__body hrCase1389__body--muted">
                I didn&apos;t have product data at the start, so we focused on research to
                define the first version of onboarding. What I did:
              </p>
              <ul className="hrCase1389__checklist">
                {FIRST_STEPS.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.researchOnboarding}
                alt="Competitor research and first onboarding design screens"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>

          <section className="hrCase1389__section hrCase1389__section--center">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="First onboarding (v1)" />
              <p className="hrCase1389__body">
                I designed the first version of onboarding based on research insights. What
                I improved:
              </p>
              <ul className="hrCase1389__checklist">
                {FIRST_ONBOARDING_IMPROVEMENTS.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="First result" />
              <p className="hrCase1389__body">+45% increase in trials and revenue</p>
            </div>
          </section>

          <section className="hrCase1389__section">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Data & insights" />
              <p className="hrCase1389__body">
                After launch, we analyzed user behavior and identified key drop-off points
              </p>
            </div>
            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.analyticsInsights}
                alt="Analytics dashboard showing onboarding drop-off rates"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>

          <section className="hrCase1389__section hrCase1389__section--center">
            <div className="hrCase1389__section-inner hrCase1389__section-inner--full">
              <CaseSectionHead label="Second iteration (v2)" />
              <div className="hrCase1389__body-stack">
                <p className="hrCase1389__body">
                  Based on analytics, I redesigned key parts of the onboarding.
                </p>
                <p className="hrCase1389__body hrCase1389__body--muted">What I changed:</p>
              </div>
              <ul className="hrCase1389__checklist">
                {SECOND_ITERATION_CHANGES.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hrCase1389__section-inner hrCase1389__section-inner--full">
              <CaseSectionHead label="Result" />
              <p className="hrCase1389__body">
                Eliminated major friction points before paywall.
              </p>
            </div>

            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.finalResults}
                alt="Final onboarding screens showing improved conversion flow"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>
        </div>
      </div>
    </main>
  )
}
