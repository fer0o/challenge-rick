import { AiOutlineStar, AiOutlineBell, AiOutlineHome } from 'react-icons/ai'
import { BsCashCoin } from 'react-icons/bs'
import { FaRegCreditCard } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='bg-white px-8 lg:p-8 pb-10 border-t-2 rounded-lg'>
        <div className='flex flex-row justify-between lg:justify-center lg:space-x-20'>
          <div className='flex flex-col'>
            <AiOutlineHome className='text-black text-3xl m-4 lg:m-8 lg:text-4xl hover:text-blue-500' />
          </div>

          <div className='flex flex-col'>
            <BsCashCoin className='text-black text-3xl m-4 lg:m-8 lg:text-4xl hover:text-blue-500' />
          </div>
          <div className='flex flex-col'>
            <FaRegCreditCard className='text-black text-3xl m-4 lg:m-8 lg:text-4xl hover:text-blue-500' />
          </div>
          <div className='flex flex-col'>
            <AiOutlineStar className='text-black text-3xl m-4 lg:m-8 lg:text-4xl hover:text-blue-500' />
          </div>
          <div className='flex flex-col'>
            <AiOutlineBell className='text-black text-3xl m-4 lg:m-8 lg:text-4xl hover:text-blue-500' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
