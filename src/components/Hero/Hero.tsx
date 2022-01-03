import * as React from 'react'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'
import SearchCombobox from '../search-combobox/SearchCombobox'
import {useSearchCats} from '../../hooks/use-search-cats'
import {getMostPopularBreeds} from '../../data/data'

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
      <div className="rounded-t-[42px] w-100% lg:bg-hero-lg md:bg-hero-md sm:bg-hero-sm h-auto object-contain border-current mt-10 pb-32 pt-4">
        <div className="flex-col ml-24 items-center py-24 mt-8 max-w-[400px]">
          <Logo
            width={'340'}
            height={'200'}
            style={{
              color: 'white',
            }}
            stroke="currentColor"
            fill="#fffff"
          />
          <h2 className="text-white">Get to know more about your cat breed</h2>
          <div className="absolute mt-12">
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

        <div className="flex justify-between items-center">
          <h1 className="text-[48px] leading-[60px] font-bold text-[#291507]">
            66+ Breeds For you <br /> to discover
          </h1>
          <Link to="/breeds">
            <p className="flex items-center color-[rgba(41, 21, 7, 0.6)] text-[18px] align-bottom cursor-pointer">
              SEE MORE <HiOutlineArrowNarrowRight className="ml-2" />
            </p>
          </Link>
        </div>

        <div className="flex flex-nowrap items-center justify-between mt-[46px] gap-14 ">
          {mostPopularBreeds?.map((cat: any) => (
            <div
              key={cat.id}
              className="cursor-pointer"
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
