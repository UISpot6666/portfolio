import { Link } from 'react-router-dom'

import { HeroPortfolioNavbar } from '../hero/HeroPortfolioNavbar'
import './hrCaseStudy.css'

const ASSETS = {
  hero: '/figma-assets/case-hr/hero-main.png',
  process: '/figma-assets/case-hr/process-flow.png',
  uiGallery: '/figma-assets/case-hr/ui-gallery.png',
  sitemap: '/figma-assets/case-hr/sitemap.png',
  usability: '/figma-assets/case-hr/usability-tests.png',
  outcome: '/figma-assets/case-hr/outcome-testimonials.png',
  arrowBack: '/figma-assets/case-hr/arrow-back.svg',
  warningShield: '/figma-assets/case-hr/icon-warning-shield.png',
  warningShield2x: '/figma-assets/case-hr/icon-warning-shield@2x.png',
  businessIdea: '/figma-assets/case-hr/icon-business-idea.png',
  businessIdea2x: '/figma-assets/case-hr/icon-business-idea@2x.png',
  outcomeUsersGlyph: '/figma-assets/case-hr/icon-outcome-users-glyph.svg',
  outcomeWandGlyph: '/figma-assets/case-hr/icon-outcome-wand-glyph.svg',
  outcomeNewsGlyph: '/figma-assets/case-hr/icon-outcome-news-glyph.svg',
} as const

const OUTCOME_ICON_CONFIG = {
  users: { glyph: ASSETS.outcomeUsersGlyph, modifier: 'users' },
  wand: { glyph: ASSETS.outcomeWandGlyph, modifier: 'wand' },
  news: { glyph: ASSETS.outcomeNewsGlyph, modifier: 'news' },
} as const

const HERO_TAGS = [
  {
    id: 'web',
    label: 'Web app',
    icon: '/figma-assets/case-hr/tag-web.svg',
  },
  {
    id: 'mobile',
    label: 'Mobile app',
    icon: '/figma-assets/case-hr/tag-mobile.svg',
  },
  {
    id: 'branding',
    label: 'Website & branding',
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
    value: '70+ screens',
    title: 'EN version',
    description: 'Complete product coverage in English',
  },
  {
    value: 'RTL ready',
    title: 'Arabic market focus',
    description: 'Optimized for RTL and local usage',
  },
] as const

const META_CARDS = [
  {
    label: 'Team setup',
    value: 'Developers, marketing, C-level, product manager',
  },
  { label: 'Industry', value: 'SaaS, team management' },
  { label: 'Services', value: 'Research, Branding, Product design' },
  { label: 'Client', value: 'NDA' },
] as const

const GOAL_BULLETS = [
  'Refresh brand',
  'Improve UX for mobile & webapplication',
  'Implement new guidelines across all products & assets',
] as const

const CHALLENGES = [
  'Establish priorities across a complex structure',
  'Prioritize features for the mobile app as a supporting product',
  'Redesign complex and confusing user flows for better usability',
  'Leverage existing product logic to reduce development costs',
] as const

const RESEARCH_INSIGHTS = [
  'Key screens and actions that are important for users have been identified.',
  'Issues with languages',
  'Complex & difficult check out process',
  'Mess in request forms (When a user encounters a problem, they prefer to contact the manager directly offline.)',
  'Mess in navigation',
  'XX% users use the Attendance screen daily, XX% several times per day.',
] as const

const PRODUCT_OUTCOMES = [
  {
    title: 'Usability validation',
    description: 'Confirmed positive feedback with stakeholders & users',
    icon: 'users',
  },
  {
    title: 'Comprehensive product design',
    description: '70+ screens designed along with a complete design system',
    icon: 'wand',
  },
  {
    title: 'Market localization',
    description: 'Adapted for the Saudi market with full RTL support for Arabic',
    icon: 'news',
  },
] as const

const PROJECT_OUTCOMES = [
  'The new branding and website were very well received by the CEO and the product team.',
  'The company\u2019s visual identity now aligns with its growth and market positioning, giving it a stronger presence among competitors',
  'The mobile app redesign received positive feedback from existing clients for its simplicity and improved usability.',
  'The number of screens and user flows in the app were reduced, making the experience faster and more intuitive.',
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

function InsightIcon() {
  return (
    <span className="hrCase1389__insight-icon" aria-hidden="true">
      <img
        src={ASSETS.businessIdea}
        srcSet={`${ASSETS.businessIdea} 1x, ${ASSETS.businessIdea2x} 2x`}
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

function OutcomeIcon({ type }: { type: keyof typeof OUTCOME_ICON_CONFIG }) {
  const config = OUTCOME_ICON_CONFIG[type]

  return (
    <span className="hrCase1389__outcome-icon" aria-hidden="true">
      <span
        className={`hrCase1389__outcome-icon-glyph hrCase1389__outcome-icon-glyph--${config.modifier}`}
      >
        <img src={config.glyph} alt="" decoding="async" />
      </span>
    </span>
  )
}

/**
 * HR Solution case study — Figma 1389:735
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1389-735
 */
export function HrCaseStudyPage() {
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
              <h1 className="hrCase1389__title">
                HR platform, from complexity to simplicity
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
                alt="HR platform dashboard and interface overview"
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
                  [NDA] is a human resources and talent management company that helps
                  organizations recruit, develop, and retain top talent. The company
                  approached me to modernize its brand identity, redesign the website,
                  and refresh its mobile application to reflect its growth and innovation.
                </p>
              </div>

              <div className="hrCase1389__block">
                <CaseSectionHead label="Goal" />
                <div className="hrCase1389__body-stack">
                  <p className="hrCase1389__body">
                    The main objective was to refresh and modernize the brand, giving
                    this product a stronger competitive advantage in the HR tech market.
                  </p>
                  <ul className="hrCase1389__bullets">
                    {GOAL_BULLETS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="hrCase1389__body hrCase1389__body--muted">
                    For the mobile application, the goal was to simplify the interface,
                    improve usability, and create a more intuitive user experience for
                    clients and candidates
                  </p>
                </div>
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

          <figure className="hrCase1389__figure hrCase1389__figure--wide">
            <img
              src={ASSETS.process}
              alt="Design process flow from discovery through testing"
              className="hrCase1389__figure-image"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <section className="hrCase1389__section hrCase1389__section--center">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Insights from Research:" />
              <ul className="hrCase1389__insight-list">
                {RESEARCH_INSIGHTS.map((item) => (
                  <li key={item} className="hrCase1389__insight-item">
                    <InsightIcon />
                    <p className="hrCase1389__insight-text">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.uiGallery}
                alt="UI screens showing dashboards, charts, and data tables"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>

          <section className="hrCase1389__section hrCase1389__section--center">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Sitemap" />
              <p className="hrCase1389__body">
                A new information architecture was developed.
              </p>
            </div>
            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.sitemap}
                alt="Information architecture sitemap diagram"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="hrCase1389__body hrCase1389__section-note">
              We intentionally reduced the number of actions on key screens to improve
              task completion and reduce user errors, especially for new employees.
            </p>
          </section>

          <section className="hrCase1389__section">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Usability tests" />
              <p className="hrCase1389__body">
                Since the app contains numerous services, easy navigation is key. We
                developed two options and conducted usability tests, after which we found
                that <strong>option two</strong> was more convenient for both current and
                new users.
              </p>
            </div>
            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.usability}
                alt="Usability test comparison of navigation options"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>

          <section className="hrCase1389__section">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Product outcome" />
              <p className="hrCase1389__body">
                Before launch, usability testing was conducted. We received positive
                feedback from both users and stakeholders. As a result of this part:
              </p>
            </div>
            <div className="hrCase1389__outcomes">
              {PRODUCT_OUTCOMES.map((item) => (
                <article key={item.title} className="hrCase1389__outcome-card">
                  <OutcomeIcon type={item.icon} />
                  <div className="hrCase1389__outcome-copy">
                    <p className="hrCase1389__outcome-title">{item.title}</p>
                    <p className="hrCase1389__outcome-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="hrCase1389__section hrCase1389__section--center">
            <div className="hrCase1389__section-inner hrCase1389__section-inner--full">
              <CaseSectionHead label="Project outcome" />
              <ul className="hrCase1389__checklist">
                {PROJECT_OUTCOMES.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.outcome}
                alt="Client testimonials highlighting project success"
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
