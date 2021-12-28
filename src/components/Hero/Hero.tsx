import React from 'react'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'

export default function Hero() {
  return (
    <div className="rounded-t-[42px] w-100% bg-hero-lg h-auto object-fill border-current mt-10">
      <div className="flex-col ml-16 items-center py-16 ">
        <Logo
          width={'200px'}
          height={'100px'}
          fill="currentColor"
          stroke="currentColor"
          style={{
            color: 'white',
          }}
        />
        <h2 className="text-white">Get to know more about your cat breed</h2>
        <input
          type="text"
          className="rounded-[59px] h-16 placeholder:font-brand  placeholder:text-[18px] placeholder:text-[#291507] placeholder:pl-9"
          placeholder="Enter your breed"
        />
      </div>
    </div>
  )
}
