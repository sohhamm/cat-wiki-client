import * as React from 'react'
import {useParams} from 'react-router-dom'
import StatsMarker from '../../components/stats-marker/StatsMarker'
import {getBreedByID} from '../../data/data'

export default function BreedDetails() {
  const [details, setDetails] = React.useState<any | null>(null)
  let {id = ''} = useParams()

  React.useEffect(() => {
    getBreedByID(id).then(res => setDetails(res))
  }, [])

  if (!details) return <p>loading...</p>

  let breed = details.data
  let images = details.images

  return (
    <div className="mt-10 ">
      <div className="flex justify-center gap-[100px] pl-14 pr-24">
        <img
          src={breed.url}
          alt="Cat Image"
          className="w-[320px] h-[320px] object-cover rounded-[24px]"
        />

        <div className="flex flex-col gap-y-[25px] text-[16px]">
          <div className="font-semi-bold text-[32px] color-[#291507]">
            {breed.name}
          </div>
          <div className="text-[18px]">{breed.description}</div>
          <div className="text">
            <span className="font-bold"> Temperament:</span>
            {breed.temperament}
          </div>
          <div className="text">
            <span className="font-bold"> Origin:</span>
            {breed.origin}
          </div>
          <div className="text">
            <span className="font-bold"> Lifespan:</span>
            {breed.life_span}
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Adaptability:</p>
            <StatsMarker stats={breed.adaptability} />
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Affection Level:</p>
            <StatsMarker stats={breed.affection_level} />
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Child Friendly:</p>
            <StatsMarker stats={breed.child_friendly} />
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Grooming:</p>
            <StatsMarker stats={breed.grooming} />
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Intelligence:</p>
            <StatsMarker stats={breed.intelligence} />
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Health Issues:</p>
            <StatsMarker stats={breed.health_issues} />
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Social Needs:</p>
            <StatsMarker stats={breed.social_needs} />
          </div>
          <div className="flex items-center">
            <p className="font-bold min-w-[170px]"> Stranger Friendly:</p>
            <StatsMarker stats={breed.stranger_friendly} />
          </div>
        </div>
      </div>

      <div className="px-[80px] w-[100vw] mt-[90px]">
        <h1 className="text-[36px] font-semi-bold mb-[40px] color-[#291507]">
          Other Photos
        </h1>
        <div className="flex flex-wrap gap-[24px]">
          {images.map((image: any) => (
            <div>
              <img
                src={image}
                alt="cat-image"
                className="w-[280px] h-[280px] rounded-[24px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
