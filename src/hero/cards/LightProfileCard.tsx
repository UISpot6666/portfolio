export function LightProfileCard() {
  return (
    <div className="mock-light flex h-full w-full gap-1.5 overflow-hidden rounded-[14px] p-2">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mb-1.5 flex items-center gap-1">
          <span className="h-1 w-3 rounded-sm bg-indigo-500" />
          <span className="h-1 flex-1 rounded-sm bg-slate-200" />
        </div>
        <div className="mb-1.5 flex gap-1.5">
          <div className="mock-light__avatar h-6 w-6 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-0.5 pt-0.5">
            <span className="h-1 w-[85%] rounded-sm bg-slate-300" />
            <span className="h-0.5 w-full rounded-sm bg-slate-200" />
          </div>
        </div>
        <div className="mock-light__photo min-h-[22px] flex-1 rounded-md" />
      </div>
      <div className="flex w-[38%] flex-col gap-1 pt-1">
        <div className="mock-light__stack h-[42%] rounded-md" />
        <div className="mock-light__stack h-[42%] rounded-md opacity-90" />
      </div>
    </div>
  )
}
