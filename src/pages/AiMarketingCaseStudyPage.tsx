import { Link } from 'react-router-dom'

import { HeroPortfolioNavbar } from '../hero/HeroPortfolioNavbar'
import './hrCaseStudy.css'

const ASSETS = {
  hero: '/figma-assets/case-ai-marketing/hero-main.png',
  competitorResearch: '/figma-assets/case-ai-marketing/competitor-research.png',
  designSystem: '/figma-assets/case-ai-marketing/design-system.png',
  deliverables: '/figma-assets/case-ai-marketing/deliverables-gallery.png',
  arrowBack: '/figma-assets/case-hr/arrow-back.svg',
  warningShield: '/figma-assets/case-hr/icon-warning-shield.png',
  warningShield2x: '/figma-assets/case-hr/icon-warning-shield@2x.png',
  businessIdea: '/figma-assets/case-hr/icon-business-idea.png',
  businessIdea2x: '/figma-assets/case-hr/icon-business-idea@2x.png',
} as const

const HERO_TAGS = [
  {
    id: 'web',
    label: 'Web app',
    icon: '/figma-assets/case-hr/tag-web.svg',
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
    value: '4.9/5 review',
    title: 'Client satisfaction',
    description: 'High-quality execution and collaboration',
  },
  {
    value: '50+ screens',
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
    value: 'Developers, marketing, C-level',
  },
  { label: 'Industry', value: 'AI, MarTech (Marketing Technology), SaaS' },
  { label: 'Services', value: 'Branding, Product Design, Design System' },
  { label: 'Client', value: 'NDA' },
] as const

const GOAL_BULLETS = [
  'Build a strong, resonant brand that connects with the Saudi market',
  'Design a simple, intuitive, and professional product interface',
  'Develop a scalable design system for future growth',
] as const

const CHALLENGES = [
  'Find the right balance between AI sophistication and user-friendly simplicity',
  'Create branding that would stand out but still remain within the boundaries of what is understandable to Saudi Arabia.',
  'Build a flexible system capable of evolving with future product updates.',
] as const

const KEY_INSIGHTS = [
  'Users prefer speed and simplicity over complex customization',
  'Users are open to using AI to simplify time-consuming tasks (such as ad design)',
  'Users need bulk actions to efficiently manage work at scale',
] as const

const PROJECT_OUTCOMES = [
  'Strong positioning as a modern, AI-driven marketing platform',
  'Positive feedback from internal teams',
  'Solid UX and visual foundation for launch and future expansion',
] as const

const DELIVERABLES = [
  'Complete brand identity (logo, color palette, typography, and visual style)',
  'Full UI/UX design for the web application',
  'Scalable design system to support future growth',
  'Visual direction aligned with both local and global market expectations',
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

/**
 * AI Marketing Tool case study — Figma 1395:3748
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1395-3748
 */
export function AiMarketingCaseStudyPage() {
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
              <h1 className="hrCase1389__title hrCase1389__title--ai">
                AI marketing tool, fast product launch
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
                alt="AI marketing tool interface overview"
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
                  Saudi-based AI platform designed to help marketers and businesses create
                  advertising content texts, images, and videos quickly.
                </p>
              </div>

              <div className="hrCase1389__block">
                <CaseSectionHead label="Goal" />
                <ul className="hrCase1389__bullets">
                  {GOAL_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
              <p className="hrCase1389__body">
                I analyzed key competitors in the market to identify their strengths and
                compare their core features. Due to limited time, we focused on enabling a
                fast and efficient product launch.
              </p>
            </div>
            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.competitorResearch}
                alt="Competitor analysis and market research overview"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>

          <section className="hrCase1389__section hrCase1389__section--center">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Key insights:" />
              <ul className="hrCase1389__insight-list">
                {KEY_INSIGHTS.map((item) => (
                  <li key={item} className="hrCase1389__insight-item">
                    <InsightIcon />
                    <p className="hrCase1389__insight-text">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="hrCase1389__section">
            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Easy-to-use interface" />
              <div className="hrCase1389__body-stack">
                <p className="hrCase1389__body">
                  From a product standpoint, our focus was to design an intuitive and
                  easy-to-use interface tailored for marketing professionals one that
                  simplifies complex creative workflows without compromising quality.
                </p>
                <p className="hrCase1389__body">
                  I focused on simplicity, with dashboards that highlight only essential
                  actions.
                </p>
              </div>
            </div>

            <div className="hrCase1389__section-inner">
              <CaseSectionHead label="Design system" />
              <div className="hrCase1389__body-stack">
                <p className="hrCase1389__body">
                  A unified design system was developed to ensure seamless scaling.
                </p>
                <p className="hrCase1389__body">
                  It included reusable components, interaction guidelines, and accessibility
                  standards, laying a strong foundation for future updates.
                </p>
              </div>
            </div>

            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.designSystem}
                alt="Design system components and dashboard UI"
                className="hrCase1389__figure-image"
                loading="lazy"
                decoding="async"
              />
            </figure>
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

            <div className="hrCase1389__section-inner hrCase1389__section-inner--full">
              <CaseSectionHead label="What was delivered" />
              <ul className="hrCase1389__checklist">
                {DELIVERABLES.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="hrCase1389__figure">
              <img
                src={ASSETS.deliverables}
                alt="Final UI screens and deliverables gallery"
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
