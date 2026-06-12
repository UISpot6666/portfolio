import { useId, useRef, useState } from 'react'

import { ProcessesDotNet } from './ProcessesDotNet'
import './processesSection11913081.css'

const PROC_ASSETS = {
  wave: '/figma-assets/processes/wave-ezgif-crop.png',
  research: '/figma-assets/processes/research-image.png',
  ux: '/figma-assets/processes/ux-image.png',
  /** Figma 1294:881 — animated website preview inside visual frame */
  visualPreview: '/figma-assets/processes/visual-preview.gif',
  visualGuideH: '/figma-assets/processes/visual-guide-h.svg',
  visualGuideV: '/figma-assets/processes/visual-guide-v.svg',
  /** Figma 1299:624 — launch button preview inside final-phase frame */
  launch: '/figma-assets/processes/launch-image.png',
  mic: '/figma-assets/processes/mic-icon.svg',
  avatarInner: '/figma-assets/processes/avatar-ring-inner.svg',
  avatarOuter: '/figma-assets/processes/avatar-ring-outer.svg',
} as const

const STEP_PREVIEW_IMAGES: Partial<Record<string, string>> = {
  '02': PROC_ASSETS.research,
  '03': PROC_ASSETS.ux,
}

type ProcessPhase = {
  id: string
  tabLabel: string
  stepMark: string
  headline: string
  body: [string, string]
}

/** Step 01 matches Figma; other phases support the tab UX. */
const PROCESS_PHASES = [
  {
    id: '01',
    tabLabel: 'Consultation',
    stepMark: '[01]',
    headline: 'Free Consultation',
    body: [
      'I will delve into your industry, analyze your competitors and your target audience.',
      'I will create a professionally designed sitemap that visually represents the site structure, optimizing navigation and user interaction.',
    ],
  },
  {
    id: '02',
    tabLabel: 'Research',
    stepMark: '[02]',
    headline: 'Research & discovery',
    body: [
      'I frame the problem space with stakeholders, map constraints, and pull signal from analytics, support, and market context.',
      'You receive a structured brief: goals, audience insights, and a prioritized set of opportunities to guide UX decisions.',
    ],
  },
  {
    id: '03',
    tabLabel: 'UX phase',
    stepMark: '[03]',
    headline: 'UX architecture',
    body: [
      'I translate strategy into flows, wireframes, and interaction patterns that reduce friction and clarify next steps.',
      'We iterate quickly with feedback loops so navigation, states, and edge cases feel inevitable before visual polish.',
    ],
  },
  {
    id: '04',
    tabLabel: 'Visual',
    stepMark: '[04]',
    headline: 'Visual design',
    body: [
      'I build a cohesive UI system—type, color, components, and motion—that matches your brand and scales with the product.',
      'Deliverables align engineering with inspectable specs so implementation stays faithful to the intended experience.',
    ],
  },
  {
    id: '05',
    tabLabel: 'Final phase',
    stepMark: '[05]',
    headline: 'Handoff & launch support',
    body: [
      'I tighten QA alongside your team: responsive checks, interaction polish, and content edge cases resolved before release.',
      'Post-launch, we can instrument, learn, and plan the next refinement cycle with clear metrics.',
    ],
  },
] as const satisfies readonly ProcessPhase[]

type MockupVariant = 'step-preview' | 'visual-showcase' | 'launch-showcase' | 'consultation-overlay'

/** Figma 1110:15029 — consultation; 1254:1699 — step preview; 1294:879 — visual; 1297:1255 — launch */
function ProcessesVisualShowcase() {
  return (
    <div className="proc3081__visual-frame">
      <div className="proc3081__visual-screen">
        <img src={PROC_ASSETS.visualPreview} alt="" decoding="async" />
      </div>
      <img
        className="proc3081__visual-guide proc3081__visual-guide--top"
        src={PROC_ASSETS.visualGuideH}
        alt=""
        aria-hidden
      />
      <img
        className="proc3081__visual-guide proc3081__visual-guide--bottom"
        src={PROC_ASSETS.visualGuideH}
        alt=""
        aria-hidden
      />
      <img
        className="proc3081__visual-guide proc3081__visual-guide--left"
        src={PROC_ASSETS.visualGuideV}
        alt=""
        aria-hidden
      />
      <img
        className="proc3081__visual-guide proc3081__visual-guide--right"
        src={PROC_ASSETS.visualGuideV}
        alt=""
        aria-hidden
      />
    </div>
  )
}

function ProcessesLaunchShowcase() {
  return (
    <div className="proc3081__launch-frame">
      <div className="proc3081__launch-tint" aria-hidden />
      <div className="proc3081__launch-media">
        <img src={PROC_ASSETS.launch} alt="" decoding="async" />
      </div>
      <div className="proc3081__launch-glow" aria-hidden />
    </div>
  )
}

function ProcessesHeroMockup({
  previewSrc,
  variant,
}: {
  previewSrc: string
  variant: MockupVariant
}) {
  if (variant === 'step-preview') {
    return (
      <div className="proc3081__mockup proc3081__mockup--step-preview" aria-hidden>
        <img src={previewSrc} alt="" decoding="async" />
      </div>
    )
  }

  if (variant === 'visual-showcase') {
    return (
      <div className="proc3081__mockup proc3081__mockup--consultation" aria-hidden>
        <ProcessesVisualShowcase />
      </div>
    )
  }

  if (variant === 'launch-showcase') {
    return (
      <div className="proc3081__mockup proc3081__mockup--consultation" aria-hidden>
        <ProcessesLaunchShowcase />
      </div>
    )
  }

  return (
    <div className="proc3081__mockup proc3081__mockup--consultation" aria-hidden>
      <div className="proc3081__mockup-you-wrap">
        <div className="proc3081__mockup-you">
          <div className="proc3081__mockup-you-avatar">
            <img
              className="proc3081__mockup-you-ring proc3081__mockup-you-ring--inner"
              src={PROC_ASSETS.avatarInner}
              alt=""
              width={60}
              height={60}
              decoding="async"
            />
            <img
              className="proc3081__mockup-you-ring proc3081__mockup-you-ring--outer"
              src={PROC_ASSETS.avatarOuter}
              alt=""
              width={82}
              height={82}
              decoding="async"
            />
            <span className="proc3081__mockup-you-letter">A</span>
          </div>
          <div className="proc3081__mockup-you-badge">
            <img src={PROC_ASSETS.mic} alt="" width={12} height={12} decoding="async" />
            <span>You</span>
          </div>
        </div>
      </div>

      <div className="proc3081__mockup-video-wrap">
        <div className="proc3081__mockup-video">
          <img src={previewSrc} alt="" decoding="async" />
        </div>
      </div>
    </div>
  )
}

function ProcessesCtaIcon() {
  return (
    <span className="proc3081__cta-icon" aria-hidden>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(4.65 4.62)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5748 0L5.76892 0.724447L6.39881 3.07523L6.59292 3.79968L5.14403 4.18791L4.94992 3.46346L4.32003 1.11267L4.12592 0.388229L5.5748 0ZM0 5.57462L0.724442 5.76874L3.07523 6.39862L3.79967 6.59274L4.1879 5.14385L3.46346 4.94974L1.11267 4.31985L0.388225 4.12573L0 5.57462ZM6.15317 6.21584L8.26286 15.7094L10.6362 13.3361L14.0646 16.7645L16.7018 14.1274L13.2734 10.699L15.6468 8.32553L6.15317 6.21584ZM2.44718 11.2307L1.91685 11.7611L0.856187 10.7004L1.38652 10.1701L3.10742 8.44921L3.63775 7.91888L4.69841 8.97953L4.16807 9.50986L2.44718 11.2307ZM11.2308 2.44718L11.7611 1.91685L10.7004 0.856192L10.1701 1.38652L8.44916 3.10741L7.91883 3.63775L8.97956 4.6984L9.50988 4.16808L11.2308 2.44718Z"
            fill="white"
          />
        </g>
      </svg>
    </span>
  )
}

/**
 * Processes — Figma 1191:3081
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1191-3081&m=dev
 */
export type ProcessesSectionProps = {
  id?: string
}

export function ProcessesSection({ id }: ProcessesSectionProps) {
  const headingId = useId()
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const phase = PROCESS_PHASES[active]

  return (
    <section
      id={id}
      ref={sectionRef}
      className="proc3081"
      aria-labelledby={headingId}
      data-header-theme="dark"
    >
      <ProcessesDotNet containerRef={sectionRef} />
      <div className="proc3081__canvas">
        <p className="proc3081__watermark" aria-hidden>
          Processes
        </p>

        <div className="proc3081__tabs-wrap">
          <div
            className="proc3081-tabs"
            role="tablist"
            aria-label="Design process phases"
          >
            {PROCESS_PHASES.map((p, index) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`proc-tab-${p.id}`}
                aria-selected={active === index}
                aria-controls={`proc-panel-${p.id}`}
                className={
                  active === index
                    ? 'proc3081-tabs__trigger proc3081-tabs__trigger--current'
                    : 'proc3081-tabs__trigger'
                }
                onClick={() => setActive(index)}
              >
                <span className="proc3081-tabs__num">{p.id}</span>
                <span className="proc3081-tabs__label">{p.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="proc3081__main">
          <div
            className="proc3081__left"
            role="tabpanel"
            id={`proc-panel-${phase.id}`}
            aria-labelledby={`proc-tab-${phase.id}`}
          >
            <div className="proc3081__left-stack">
              <span className="proc3081__step-id">{phase.stepMark}</span>
              <h2 id={headingId} className="proc3081__headline">
                {phase.headline}
              </h2>
            </div>
            <a className="proc3081__cta" href="#contact">
              <span className="proc3081__cta-row">
                <span>Book an intro</span>
                <ProcessesCtaIcon />
              </span>
            </a>
          </div>

          <figure className="proc3081__figure">
            <ProcessesHeroMockup
              previewSrc={STEP_PREVIEW_IMAGES[phase.id] ?? PROC_ASSETS.wave}
              variant={
                phase.id === '04'
                  ? 'visual-showcase'
                  : phase.id === '05'
                    ? 'launch-showcase'
                    : phase.id === '02' || phase.id === '03'
                      ? 'step-preview'
                      : 'consultation-overlay'
              }
            />
          </figure>

          <div className="proc3081__copy">
            <p className="proc3081__p">{phase.body[0]}</p>
            <p className="proc3081__p">{phase.body[1]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
