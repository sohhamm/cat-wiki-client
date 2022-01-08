import * as React from 'react'
import {useParams} from 'react-router-dom'
import ImageProp from '../../components/image-prop/ImageProp'
import StatsMarker from '../../components/stats-marker/StatsMarker'
import {getBreedByID} from '../../data/data'
import {useWindowSize} from '../../hooks/use-window-size'

export default function BreedDetails() {
  const [details, setDetails] = React.useState<any | null>(null)
  let {id = ''} = useParams()
  const {width} = useWindowSize()
  const sm = width < 640

  React.useEffect(() => {
    getBreedByID(id).then(res => setDetails(res))
  }, [])

  if (!details) return <p>loading...</p>

  let breed = details.data
  let images = details.images

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row justify-center gap-[30px] md:gap-[100px] md:pl-14 md:pr-24">
        <div className="relative">
          {!sm && <ImageProp isBreedDetails={true} />}
          <img
            src={breed.url}
            alt="Cat Image"
            className="w-[100%] object-cover rounded-[24px] z-30 relative"
          />
        </div>

        <div className="flex flex-col gap-y-[25px] text-[16px]">
          <div className="font-semi-bold text-[24px] md:text-[32px] color-[#291507]">
            {breed.name}
          </div>
          <div className="text-[14px] md:text-[18px]">{breed.description}</div>
          <div className="text-[14px] md:text-[18px]">
            <span className="font-bold"> Temperament:</span>
            {breed.temperament}
          </div>
          <div className="text-[14px] md:text-[18px]">
            <span className="font-bold"> Origin:</span>
            {' ' + breed.origin}
          </div>
          <div className="text-[14px] md:text-[18px]">
            <span className="font-bold"> Lifespan:</span>
            {breed.life_span}
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Adaptability:
            </p>
            <StatsMarker stats={breed.adaptability} isSm={sm} />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Affection Level:
            </p>
            <StatsMarker stats={breed.affection_level} isSm={sm} />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Child Friendly:
            </p>
            <StatsMarker stats={breed.child_friendly} isSm={sm} />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Grooming:
            </p>
            <StatsMarker stats={breed.grooming} isSm={sm} />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Intelligence:
            </p>
            <StatsMarker stats={breed.intelligence} isSm={sm} />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Health Issues:
            </p>
            <StatsMarker stats={breed.health_issues} isSm={sm} />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Social Needs:
            </p>
            <StatsMarker stats={breed.social_needs} isSm={sm} />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <p className="font-bold text-[14px] md:text-[18px] min-w-[170px]">
              {' '}
              Stranger Friendly:
            </p>
            <StatsMarker stats={breed.stranger_friendly} isSm={sm} />
          </div>
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
