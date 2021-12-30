import * as React from 'react'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
import {MdSearch} from 'react-icons/md'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

export default function Hero() {
  const [searchText, setSearchText] = React.useState('')

  console.log(searchText)
  return (
    <main className="font-brand">
      <div className="rounded-t-[42px] w-100% lg:bg-hero-lg md:bg-hero-md sm:bg-hero-sm h-auto object-contain border-current mt-10 pb-32 pt-4">
        <div className="flex-col ml-16 items-center py-24 mt-10 max-w-[400px]">
          <Logo
            width={'300px'}
            height={'100px'}
            style={{
              color: 'white',
            }}
            stroke="currentColor"
            fill="currentColor"
            className="mb-2"
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

      <div className="rounded-b-[42px] bg-[#E3E1DC] px-[100px]">
        <p className="text-md py-[47px]">Most Searched Breed</p>

        <div className="flex justify-between items-center">
          <h1 className="text-[48px]">
            66+ Breeds For you <br /> to discover
          </h1>

          <p className="flex items-center color-[rgba(41, 21, 7, 0.6)] text-[18px]">
            SEE MORE <HiOutlineArrowNarrowRight className="ml-2" />
          </p>
        </div>
      </div>
    </main>
  )
}
