import * as React from 'react'
import StatsMarker from '../../components/stats-marker/StatsMarker'
import {useParams} from 'react-router-dom'
import {getBreedByID} from '../../data/data'
import {useWindowSize} from '../../hooks/use-window-size'
import {allStats, descStats} from '../../utils'

export default function BreedDetails() {
  const [details, setDetails] = React.useState<any | null>(null)
  let {id = ''} = useParams()
  const {width} = useWindowSize()
  const sm = width < 640

  React.useEffect(() => {
    getBreedByID(id).then(res => setDetails(res))
  }, [])

  if (!details)
    return <p className="text-center w-[100%] my-[30vh]">getting cat info...</p>

  let breed = details.data
  let images = details.images

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row justify-center gap-[30px] md:gap-[100px] md:pl-14 md:pr-24">
        <div className="relative w-100% md:w-[50%]">
          {breed.url ? (
            <img
              src={breed.url}
              alt="Cat Image"
              className="w-[100%] object-cover rounded-[24px] z-30 relative h-auto md:h-[450px]"
            />
          ) : (
            <div className="w-[100%] animate-pulse bg-gray-500 rounded-[24px] z-30 relative h-auto md:h-[450px]" />
          )}
        </div>

        <div className="flex flex-col gap-y-[25px] text-[16px] w-[100%] md:w-[60%]">
          <div className="font-semi-bold text-[24px] md:text-[32px] color-[#291507]">
            {breed.name}
          </div>
          <div className="text-[14px] md:text-[18px]">{breed.description}</div>
          {descStats.map(stat => (
            <div key={stat.label} className="text-[14px] md:text-[18px]">
              <span className="font-bold"> {stat.label}:</span>
              {' ' + breed[stat.key]}
            </div>
          ))}
          {allStats.map(stat => (
            <div
              key={stat.key}
              className="flex flex-col md:flex-row items-start md:items-center"
            >
              <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
                {stat.label}:
              </p>
              <StatsMarker stats={breed[stat.key]} isSm={sm} />
            </div>
          ))}
        </div>
      </div>

      <div className="md:px-[80px] w-[100%] md:w-[100vw] mt-[90px]">
        <h1 className="text-[36px] font-semi-bold mb-[40px] color-[#291507]">
          Other Photos
        </h1>
        <div className="flex flex-wrap gap-[24px]">
          {images.map((image: any) => (
            <img
              src={image}
              key={image}
              alt="cat-image"
              className="w-[100%] md:w-[280px] h-[280px] rounded-[24px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
