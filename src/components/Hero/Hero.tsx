import * as React from 'react'
import Logo from '../../assets/svg/logo.svg'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'
import SearchCombobox from '../search-combobox/SearchCombobox'
import {useSearchCats} from '../../hooks/use-search-cats'
import {getMostPopularBreeds} from '../../data/data'
import ImageProp from '../image-prop/ImageProp'

const images = [
  {
    name: 'Name 1',
    url: 'https://picsum.photos/220',
  },
  {
    name: 'Name 2',
    url: 'https://picsum.photos/220',
  },
  {
    name: 'Street',
    url: 'https://picsum.photos/220',
  },
  {
    name: 'Bengal',
    url: 'https://picsum.photos/220',
  },
]

export default function Hero() {
  const [searchText, setSearchText] = React.useState('')
  const [mostPopularBreeds, setMostPopularBreeds] = React.useState<any>(null)
  const {searchResults, isLoading} = useSearchCats(searchText)
  const navigate = useNavigate()

  React.useEffect(() => {
    let limit = 4
    getMostPopularBreeds(limit).then(res => setMostPopularBreeds(res))
  }, [])

  return (
    <main className="font-brand">
      <div className="rounded-t-[42px] w-100%  bg-hero-sm md:bg-hero-md lg:bg-hero-lg  h-[180px] lg:h-[40vw] bg-[length:100%_100%] border-current mt-[45px] md:mt-10 pb-32 pt-4">
        <div className="flex-col ml-[47px] md:ml-24 items-center md:py-24 my-auto max-w-[400px] justify-center">
          <img
            src={Logo}
            className="fill-white md:w-[340px] md:h-[200px] md:-mb-8"
            style={{
              filter:
                'invert(100%) sepia(0%) saturate(1%) hue-rotate(211deg) brightness(106%) contrast(101%)',
            }}
          />
          <h2 className="text-white">Get to know more about your cat breed</h2>
          <div className="relative mt-12">
            <SearchCombobox
              searchText={searchText}
              setSearchText={setSearchText}
              searchResults={searchResults}
            />
          </div>
        </div>
      </div>

      <div className="rounded-b-[42px] bg-[#E3E1DC] px-[100px] pb-[98px]">
        <div className="text-md py-[47px] text-[18px] font-medium">
          Most Searched Breed <div className="h-1 w-[60px] bg-[#4D270C]" />
        </div>

        <div className="flex justify-between items-end">
          <h1 className="text-5xl leading-[60px] font-bold text-[#291507]">
            66+ Breeds For you <br /> to discover
          </h1>
          <Link to="/breeds">
            <p className="flex items-center text-[#29150799] text-[0.7em] font-bold cursor-pointer">
              SEE MORE <HiOutlineArrowNarrowRight className="ml-2" />
            </p>
          </Link>
        </div>

        <div className="flex flex-nowrap items-center justify-between mt-[46px] gap-14 relative">
          <ImageProp />
          {mostPopularBreeds?.map((cat: any) => (
            <div
              key={cat.id}
              className="cursor-pointer z-20"
              onClick={() => navigate(`breeds/${cat.id}`)}
            >
              <img
                src={cat.url}
                className="rounded-[24px] lg:w-[220px] lg:h-[220px] sm:w-[135px] sm:h-[135px] md:w-[170px] md:h-[170px] object-cover"
              />
              <figcaption className="text-[#291507 font-semibold text-xl mt-4 z-">
                {cat.name}
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
