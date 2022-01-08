export default function StatsMarker({
  stats,
  isSm,
}: {
  stats: number
  isSm: boolean
}) {
  return (
    <div className="flex w-[100%]">
      {[0, 1, 2, 3, 4].map((stat, idx) => (
        <div
          key={stat}
          className={`${isSm ? 'w-[20%] h-[8px]' : 'w-[60px] h-[12px]'} ${
            idx <= stats ? 'bg-[#544439]' : 'bg-[#e0e0e0]'
          } rounded-[8px] mr-[9px] mt-4 md:mt-0`}
        />
      ))}
    </div>
  )
}
