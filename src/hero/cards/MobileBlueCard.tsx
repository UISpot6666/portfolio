export function MobileBlueCard() {
  return (
    <div className="mock-mobile flex h-full w-full flex-col overflow-hidden rounded-[16px] px-2.5 pb-3 pt-2">
      <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-white/35" />
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="m-0 text-[8px] font-medium leading-none text-white/85">Empower</p>
        <p className="m-0 text-[10px] font-bold leading-none text-white">Founders</p>
        <div className="mt-2 h-7 rounded-md border border-white/15 bg-white/15 backdrop-blur-sm" />
        <div className="h-4 w-[72%] rounded-md border border-white/10 bg-white/10" />
        <div className="mt-auto flex gap-1">
          <span className="h-1.5 flex-1 rounded-sm bg-white/25" />
          <span className="h-1.5 flex-1 rounded-sm bg-white/20" />
        </div>
      </div>
    </div>
  )
}
