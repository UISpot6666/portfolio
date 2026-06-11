export function DarkWebCard() {
  return (
    <div className="mock-dark flex h-full w-full flex-col overflow-hidden rounded-[14px] p-2.5">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="mock-dark__pill h-1.5 w-3.5 rounded-sm" />
        <span className="h-1 flex-1 rounded-sm bg-white/10" />
        <span className="h-1 w-4 rounded-sm bg-white/10" />
      </div>
      <div className="mb-2 flex flex-1 flex-col justify-center gap-1 px-0.5">
        <p className="m-0 text-[7px] font-semibold leading-tight text-white/95">
          Hire the best
        </p>
        <p className="m-0 text-[6px] font-medium leading-tight text-white/70">
          developers, faster
        </p>
        <span className="mt-1 h-2 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        <span className="min-h-[18px] rounded bg-white/[0.06]" />
        <span className="min-h-[18px] rounded bg-white/[0.06]" />
        <span className="min-h-[18px] rounded bg-white/[0.06]" />
      </div>
    </div>
  )
}
