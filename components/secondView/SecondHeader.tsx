import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
const SecondHeader = () => {
  return (
    <div>
      <div className='flex justify-between mx-8 my-16'>
        <Link href='/'>
          <AiOutlineArrowLeft className='text-2xl' />
        </Link>

        <span className='text-blue-200 text-lg'> Cancelar </span>
      </div>
    </div>
  )
}

export default SecondHeader
