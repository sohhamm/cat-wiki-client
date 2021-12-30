import * as React from 'react'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
import {MdSearch} from 'react-icons/md'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-router-dom'

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
  // {
  //   name: 'Macarena',
  //   url: 'https://picsum.photos/220',
  // },
]

export default function Hero() {
  const [searchText, setSearchText] = React.useState('')

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
            // className="mb-[-1em]"
            // viewBox={'0 0 128 43'}
          />
          <h2 className="text-white">Get to know more about your cat breed</h2>
          <div className="absolute mt-12">
            <input
              type="text"
              className="relative rounded-[59px] h-16 placeholder:font-brand  placeholder:text-[18px] placeholder:text-[#291507] placeholder:pl-9 min-w-[400px]"
              placeholder="Enter your breed"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <i className="relative bottom-11 left-[11.5em]">
              <MdSearch style={{color: '#291507'}} />
            </i>
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
            <p className="flex items-center color-[rgba(41, 21, 7, 0.6)] text-[18px] align-bottom">
              SEE MORE <HiOutlineArrowNarrowRight className="ml-2" />
            </p>
          </Link>
        </div>

        <div className="flex flex-nowrap items-center justify-between mt-[46px] gap-14 ">
          {images.map(image => (
            <div key={image.name} className="">
              <img
                src={image.url}
                className="rounded-[24px] min-w-[135px] min-h-[135px]"
              />
              <figcaption className="text-[#291507 font-semibold text-xl mt-4 z-">
                {image.name}
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
