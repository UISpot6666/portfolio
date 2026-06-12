import type { ReactNode } from 'react'
import { useCallback, useId, useState } from 'react'

import './faq11913360.css'

export type FaqEntry = {
  question: string
  answer: string
}

export type FaqGroup = {
  label: string
  items: FaqEntry[]
}

const DEFAULT_TITLE: ReactNode = (
  <>
    <span className="faq1191__title-muted">Everything or </span>
    almost everything you wanted to ask
    <span className="faq1191__title-muted"> before contact me</span>
  </>
)

const FAQ_GROUPS_DEFAULT: FaqGroup[] = [
  {
    label: 'Budget & pricing',
    items: [
      {
        question: 'How much does your work cost?',
        answer:
          'Every project starts with scope: goals, timelines, deliverables, and fidelity. Once that’s aligned, you get a transparent proposal, usually milestone based, so pricing matches the work ahead, not a generic package.',
      },
      {
        question: 'Can I pay in installments?',
        answer:
          'Yes, for scoped engagements payment is commonly split across milestones so cash flow stays predictable on both sides. We’ll align the schedule before any work begins.',
      },
      {
        question: "Why don't you list fixed prices on your site?",
        answer:
          'Because “a website”, “an app redesign”, or “a prototype” aren’t interchangeable units, context changes effort a lot. I’d rather anchor on outcomes and timelines than publish numbers that rarely fit real projects.',
      },
    ],
  },
  {
    label: 'Process & timeline',
    items: [
      {
        question: 'What does working together actually look like?',
        answer:
          'You’ll usually see intake → framing/discovery → design iterations with async reviews → handoff/support. Collaboration lives in concise updates, clickable prototypes, and a shared backlog of decisions so nothing slips through cracks.',
      },
      {
        question: 'How long will my project take?',
        answer:
          'Depends on fidelity, stakeholder speed, number of scenarios, and how much product already exists. But I can give you an average estimates: Branding: 2 to 3 weeks. Website (up to 5 pages): 4 to 6 weeks. Web app: from 4 weeks depending on complexity.',
      },
    ],
  },
  {
    label: 'Trust & guarantees',
    items: [
      {
        question: "What if I don't like what you deliver?",
        answer:
          'Design is iterative: we converge through structured feedback loops and rationales tied to UX goals. Major disconnects typically mean unclear constraints, early alignment and phased reviews minimize that.',
      },
      {
        question: 'Will you personally work on my project?',
        answer:
          "Yes. From brief to final file, it's me. No juniors doing the work while you think you're talking to a senior. You hire me & I do the work.",
      },
      {
        question:
          'How do I know my project won’t get lost between other clients?',
        answer:
          'Capacity gets managed consciously: I batch deep work blocks and keep roadmap visibility upfront. Expect clear ownership, weekly visible progress, and agreed response windows.',
      },
    ],
  },
]

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="m4 7 5 5 5-5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * FAQ accordion — Figma 1191:3360 (“8 section”)
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1191-3360&m=dev
 */
export type FaqSection11913360Props = {
  id?: string
  /** When omitted, the portfolio FAQ content is shown. */
  groups?: FaqGroup[]
  eyebrow?: string
  /** Centered headline under eyebrow — matches FAQ section typography tokens. */
  title?: ReactNode
  /** Optional intro line beneath the headline. */
  headerIntro?: ReactNode
}

export function FaqSection11913360({
  id,
  groups: groupsProp,
  eyebrow,
  title,
  headerIntro,
}: FaqSection11913360Props) {
  const resolvedGroups = groupsProp ?? FAQ_GROUPS_DEFAULT
  const resolvedEyebrow = eyebrow ?? 'FAQs'
  const resolvedTitle = title ?? DEFAULT_TITLE
  const titleId = 'faq1191-heading'
  const baseId = useId()

  /** flat keys "g-i" for independently toggled panels */
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({})

  const toggleKey = useCallback((key: string) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  return (
    <section id={id} className="faq1191" aria-labelledby={titleId} data-header-theme="dark">
      <div className="faq1191__inner">
        <header className="faq1191__header">
          <p className="faq1191__eyebrow">{resolvedEyebrow}</p>
          <h2 id={titleId} className="faq1191__title">
            {resolvedTitle}
          </h2>
          {headerIntro != null ? (
            <div className="faq1191__header-intro">{headerIntro}</div>
          ) : null}
        </header>

        <div className="faq1191__groups">
          {resolvedGroups.map((group, gi) => (
            <div key={group.label} className="faq1191-category">
              <div className="faq1191-category__rail">
                <span className="faq1191-category__rule" />
                <span className="faq1191-pill">
                  <span className="faq1191-pill__txt">{group.label}</span>
                </span>
                <span className="faq1191-category__rule" />
              </div>

              <div className="faq1191-category__items">
                {group.items.map((item, qi) => {
                  const flatKey = `${gi}-${qi}`
                  const uid = `${baseId}-${flatKey}`
                  const buttonId = `faq-${uid}-btn`
                  const panelId = `faq-${uid}-panel`
                  const isOpen = Boolean(openKeys[flatKey])

                  return (
                    <FaqRow
                      key={item.question}
                      item={item}
                      isOpen={isOpen}
                      onToggle={() => toggleKey(flatKey)}
                      buttonId={buttonId}
                      panelId={panelId}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type FaqRowProps = {
  item: FaqEntry
  isOpen: boolean
  onToggle: () => void
  buttonId: string
  panelId: string
}

function FaqRow({ item, isOpen, onToggle, buttonId, panelId }: FaqRowProps) {
  return (
    <div className={`faq1191-item${isOpen ? ' is-open' : ''}`}>
      <button
        id={buttonId}
        type="button"
        className="faq1191-item__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="faq1191-item__question">{item.question}</span>
        <span className="faq1191-item__icon-wrap">
          <ChevronDown />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq1191-item__panel"
      >
        <div
          className="faq1191-item__panel-inner"
          aria-hidden={!isOpen ? true : undefined}
        >
          <p className="faq1191-item__answer">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}
