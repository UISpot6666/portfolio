export function PurpleChartCard() {
  return (
    <div className="mock-purple flex h-full w-full flex-col overflow-hidden rounded-[14px] p-3">
      <p className="m-0 mb-2 text-[6px] font-medium leading-tight text-violet-400/90">
        UX experience lifetime
      </p>
      <div className="flex min-h-[52px] flex-1 items-end gap-1 pb-1">
        <div className="mock-purple__bar w-full" style={{ height: '32%' }} />
        <div className="mock-purple__bar w-full" style={{ height: '48%' }} />
        <div className="mock-purple__bar mock-purple__bar--hi w-full" style={{ height: '82%' }} />
        <div className="mock-purple__bar w-full" style={{ height: '55%' }} />
        <div className="mock-purple__bar w-full" style={{ height: '38%' }} />
      </div>
      <div className="mt-1 flex gap-1">
        <span className="h-1 w-[28%] rounded-sm bg-violet-200" />
        <span className="h-1 flex-1 rounded-sm bg-violet-100" />
      </div>
    </div>
  )
}
