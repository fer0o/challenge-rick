interface Props {
  text: string
}

const BorderRectangle = ({ text }: Props) => {
  return (
    <div>
      <div className='border-2 rounded-md border-blue-200 w-[300px] h-[40px] mt-4 mx-auto lg:w-[40rem] lg:mx-auto'>
        <span className='flex justify-start ml-4 mt-2 font-semibold'>
          {text}
        </span>
      </div>
    </div>
  )
}

export default BorderRectangle
