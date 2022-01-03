export default function StatsMarker({stats}: {stats: number}) {
  return (
    <div className="flex">
      {[0, 1, 2, 3, 4].map((stat, idx) => (
        <div
          key={stat}
          className={`w-[60px] h-[12px] ${
            idx <= stats ? 'bg-[#544439]' : 'bg-[#e0e0e0]'
          } rounded-[8px] mr-[9px]`}
        />
      ))}
    </div>
  )
}
