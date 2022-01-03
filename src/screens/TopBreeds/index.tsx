import * as React from 'react'
import {getMostPopularBreeds} from '../../data/data'

export default function TopBreeds() {
  const [breeds, setBreeds] = React.useState<any | null>(null)

  React.useEffect(() => {
    getMostPopularBreeds(9).then(res => setBreeds(res))
  }, [])
  return (
    <div className="mt-[40px] mb-[106px]">
      <h1 className="font-bold text-[36px] color-[#291507] mb-[52px]">
        Top 10 most searched breeds
      </h1>

      <div className="flex flex-col gap-y-[54px]">
        {breeds?.map((breed: any, idx: number) => (
          <div className="flex items-center  gap-x-[46px]">
            <img
              src={breed.url}
              alt={breed.name}
              className="w-[170px] h-[170px] rounded-[24px] object-cover"
            />
            <div>
              <div className="font-semibold text-[36px] mb-[24px]">
                {idx + 1}. {breed.name}
              </div>
              <div className="text-[18px] font-medium tracking-normal">
                {breed.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
