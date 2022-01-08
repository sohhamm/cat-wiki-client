import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import Logo from '../../assets/svg/logo.svg'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-start md:items-center justify-between px-[0.8em] md:px-[2em] bg-black rounded-t-[42px] mt-24 py-[1.2em] md:py-[38px]">
      <img
        src={Logo}
        className="fill-white h-[30px] md:w-[340px] md:h-[200px] mb-3 md:-mb-8"
        style={{
          filter:
            'invert(100%) sepia(0%) saturate(1%) hue-rotate(211deg) brightness(106%) contrast(101%)',
        }}
      />
      <div className="flex items-center">
        <AiOutlineCopyrightCircle className="text-white mr-1 md:mr-4" />

        <p className="text-white text-[12px] md:text-[18px]">
          created by{' '}
          <a
            href="https://linkedin.com/in/sohhamm"
            target="_blank"
            className="underline font-bold"
          >
            Soham Sarkar
          </a>{' '}
          - devChallenges.io 2022
        </p>
      </div>
    </footer>
  )
}
