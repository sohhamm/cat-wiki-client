import * as React from 'react'
import Logo from '../../assets/svg/logo.svg'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'
import SearchCombobox from '../search-combobox/SearchCombobox'
import {useSearchCats} from '../../hooks/use-search-cats'
import {getMostPopularBreeds} from '../../data/data'
import ImageProp from '../image-prop/ImageProp'
import {useWindowSize} from '../../hooks/use-window-size'

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
  const {width} = useWindowSize()
  const sm = width < 640

  React.useEffect(() => {
    let limit = sm ? 3 : 4
    getMostPopularBreeds(limit).then(res => setMostPopularBreeds(res))
  }, [])

  return (
    <main className="font-brand">
      <div className="rounded-t-[42px] w-100%  bg-hero-sm md:bg-hero-md lg:bg-hero-lg  h-[180px] lg:h-[40vw] bg-[length:100%_100%] border-current mt-[20px] md:mt-10 pb-32 pt-4">
        <div className="flex-col mt-0 ml-[20px] md:ml-24 items-center md:py-24 my-auto md:max-w-[400px] justify-center">
          <img
            src={Logo}
            className="fill-white h-[30px] md:w-[340px] md:h-[200px] mb-3 md:-mb-8"
            style={{
              filter:
                'invert(100%) sepia(0%) saturate(1%) hue-rotate(211deg) brightness(106%) contrast(101%)',
            }}
          />
          <h2 className="text-white text-[10px] md:text-[1em] leading-3">
            Get to know more about {width < 470 ? <br /> : ''}your cat breed
          </h2>
          <div className="relative mt-[18px] md:mt-12">
            <SearchCombobox
              searchText={searchText}
              setSearchText={setSearchText}
              searchResults={searchResults}
            />
          </div>
        </div>
      </div>

      <div className="rounded-b-[42px] bg-[#E3E1DC] px-[1em] md:px-[100px] pb-[53px] mb:pb-[98px]">
        {sm ? (
          <div className="flex items-end justify-between text-md pt-[19px] text-[12px] font-medium mb-[18px]">
            <div>
              Most Searched Breed{' '}
              <div className="h-1 w-[30px] bg-[#4D270C] rounded-lg" />
            </div>
          </div>
        ) : (
          <div className="text-md py-[47px] text-[12px] md:text-[18px] font-medium">
            Most Searched Breed <div className="h-1 w-[60px] bg-[#4D270C]" />
          </div>
        )}

        <div className="flex justify-between items-end">
          <h1 className="text-[18px] md:text-5xl  leading-[20px] md:leading-[60px] font-bold text-[#291507]">
            66+ Breeds For you <br /> to discover
          </h1>
          {!sm && (
            <Link to="/breeds">
              <p className="flex items-center text-[#29150799] text-[0.7em] font-bold cursor-pointer">
                SEE MORE <HiOutlineArrowNarrowRight className="ml-2" />
              </p>
            </Link>
          )}
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-[26px] md:mt-[46px] gap-[13px] md:gap-14 relative">
          <ImageProp sm={sm} width={width} />
          {mostPopularBreeds?.map((cat: any) => (
            <div
              key={cat.id}
              className="cursor-pointer z-20"
              onClick={() => navigate(`breeds/${cat.id}`)}
            >
              <img
                src={cat.url}
                className={`rounded-[24px] ${
                  width < 384 ? 'w-[105px] h-[105px]' : 'w-[135px] h-[135px]'
                } md:w-[220px] md:h-[220px]  object-cover`}
              />
              <figcaption className="text-[#291507] font-semibold text-[12px] md:text-xl mt-[2px] md:mt-4">
                {cat.name}
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
