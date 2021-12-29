import React from 'react'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
import {MdSearch} from 'react-icons/md'

export default function Hero() {
  return (
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
        />
        <h2 className="text-white">Get to know more about your cat breed</h2>
        <div className="absolute mt-12">
          <input
            type="text"
            className="relative rounded-[59px] h-16 placeholder:font-brand  placeholder:text-[18px] placeholder:text-[#291507] placeholder:pl-9 min-w-[400px]"
            placeholder="Enter your breed"
          />
          <i className="relative bottom-11 left-[11.5em]">
            <MdSearch style={{color: '#291507'}} />
          </i>
        </div>
      </div>
    </div>
  )
}
