import * as React from 'react'
import {useParams} from 'react-router-dom'
import {getBreedByID} from '../../data/data'

export default function BreedDetails() {
  const [details, setDetails] = React.useState<any | null>(null)
  let {id = ''} = useParams()

  React.useEffect(() => {
    getBreedByID(id).then(res => setDetails(res[0]))
  }, [])

  console.log(details)

  if (!details) return <p>loading...</p>

  let breed = details.breeds[0]

  return (
    <div>
      <div className="flex justify-center gap-[100px]">
        <img
          src={details.url}
          alt="Cat Image"
          className="w-[320px] h-[320px] object-fill"
        />

        <div className="flex-col gap-x-[25px] text-[16px]">
          <h1 className="font-bold text-[32px]">{breed.name}</h1>
          <p className="text-[18px]">{breed.description}</p>
          <p className="text">
            <span className="font-bold"> Temperament:</span>
            {breed.temperament}
          </p>
          <p className="text">
            <span className="font-bold"> Origin:</span>
            {breed.origin}
          </p>
          <p className="text">
            <span className="font-bold"> Lifespan:</span>
            {breed.life_span}
          </p>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Adaptability:</p>
            <StatsMarker stats={breed.adaptability} />
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Affection Level:</p>
            <StatsMarker stats={breed.affection_level} />
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Child Friendly:</p>
            <StatsMarker stats={breed.child_friendly} />
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Grooming:</p>
            <StatsMarker stats={breed.grooming} />
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Intelligence:</p>
            <StatsMarker stats={breed.intelligence} />
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Health Issues:</p>
            <StatsMarker stats={breed.health_issues} />
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Social Needs:</p>
            <StatsMarker stats={breed.social_needs} />
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4"> Stranger Friendly:</p>
            <StatsMarker stats={breed.stranger_friendly} />
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsMarker({stats}: {stats: number}) {
  return (
    <div className="flex">
      {[0, 1, 2, 3, 4].map((_, idx) => {
        const color = idx <= stats ? 'bg-[#544439]' : 'bg-[#e0e0e0]'
        console.log(color, 'test')
        return (
          <div
            className={`w-[60px] h-[12px] ${color} rounded-[8px] mr-[9px]`}
          />
        )
      })}
    </div>
  )
}
