import {ReactElement} from 'react'

interface ImagePropType {
  isBreedDetails?: boolean
  sm?: boolean
  width?: number
}
export default function ImageProp({
  isBreedDetails,
  sm,
  width,
}: ImagePropType): ReactElement {
  const styles = sm
    ? `rounded-[14px] z-10 bg-[#DEC68B] ${
        width && width < 384 ? 'h-[70px]' : 'h-[90px]'
      } w-[47px] absolute -left-1 ${width && width < 384 ? 'top-5' : 'top-6'}`
    : `rounded-[14px] z-10 bg-[#DEC68B] ${
        isBreedDetails ? 'h-96' : 'h-[177px]'
      } w-[47px] absolute -left-4 top-6`
  return <span className={styles}></span>
}
