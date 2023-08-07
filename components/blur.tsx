export function Blur() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div className="h-56 bg-gradient-to-br from-purple-500 to-purple-400 blur-[106px] dark:from-purple-700" />
      <div className="h-32 bg-gradient-to-r from-purple-400 to-purple-300 blur-[106px] dark:to-purple-600" />
    </div>
  )
}

export function Blur2() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div className="h-32 bg-gradient-to-l from-fuchsia-400 to-fuchsia-300 blur-[106px] dark:to-fuchsia-600" />
      <div className="h-56 bg-gradient-to-tl from-fuchsia-500 to-fuchsia-400 blur-[106px] dark:from-fuchsia-700" />
    </div>
  )
}
