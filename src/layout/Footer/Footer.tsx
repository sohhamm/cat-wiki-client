import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-[2em] bg-black rounded-t-[42px] mt-24 py-[38px]">
      <Logo
        width={'200px'}
        height={'50px'}
        style={{
          color: 'white',
        }}
        stroke="currentColor"
        fill="currentColor"
        className="mb-2"
      />

      <div className="flex items-center">
        <AiOutlineCopyrightCircle className="text-white mr-4" />

        <p className="text-white text-[18px]">
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
