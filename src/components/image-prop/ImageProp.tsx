interface ImagePropType {
  isBreedDetails?: boolean
}
export default function ImageProp({isBreedDetails}: ImagePropType) {
  return (
    <span
      className={`rounded-[14px] z-10 bg-[#DEC68B] ${
        isBreedDetails ? 'h-96' : 'h-[177px]'
      } w-[47px] absolute -left-4 top-6`}
    ></span>
  )
}
