import type { ReactNode } from 'react'

export type StatValueAlign = 'left' | 'center'

type StatItemProps = {
  value: ReactNode
  title: string
  description: string
  valueAlign?: StatValueAlign
}

export function StatItem({
  value,
  title,
  description,
  valueAlign,
}: StatItemProps) {
  const valueClass =
    valueAlign !== undefined
      ? `stat-item__value stat-item__value--align-${valueAlign}`
      : 'stat-item__value'

  return (
    <article className="stat-item">
      <p className={valueClass}>{value}</p>
      <div className="stat-item__divider" aria-hidden="true" />
      <div className="stat-item__titles">
        <h3 className="stat-item__title">{title}</h3>
        <p className="stat-item__description">{description}</p>
      </div>
    </article>
  )
}
