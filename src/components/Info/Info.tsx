import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Img1 from '../../assets/png/img-1.png'
import Img2 from '../../assets/png/img-2.png'
import Img3 from '../../assets/png/img-3.png'

export default function Info() {
  return (
    <div className="flex items-center mt-28">
      <div className="max-w-[50%] mr-10 px-24">
        <div className="h-1 w-[68px] mb-4 bg-[#4D270C]" />
        <h1 className="text-brand text-[48px] font-bold leading-[60px] mb-12">
          Why should you have a cat?
        </h1>
        <h3 className="text-[18px] text-brand mb-14 tracking-normal">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </h3>
        <a
          href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner"
          target="_blank"
          className="cursor-pointer"
        >
          <p className="flex items-center text-[#29150799] text-[0.7em] font-bold">
            READ MORE <HiOutlineArrowNarrowRight className="ml-2" />
          </p>
        </a>
      </div>

      <div className="flex gap-12">
        <div className="flex-col items-end gap-12">
          <img src={Img2} alt="cat-image-2" className="mb-12" />
          <img src={Img1} alt="cat-image-1" className="ml-[auto]" />
        </div>
        <div className="">
          <img src={Img3} alt="cat-image-3" />
        </div>
      </div>
    </div>
  )
}
