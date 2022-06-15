import { FiUser } from 'react-icons/fi'
const Navbar = () => {
  return (
    <div>
      <div className='flex lg:justify-center justify-end space-x-20 lg:space-x-96  border-b-2 border-black bg-gray-200 px-8 pt-16 pb-24  relative'>
        <span className='text-base text-black font-sans font-semibold lg:text-2xl'>
          Hola José
        </span>
        <FiUser className='text-xl lg:text-2xl rounded-full bg-white w-6 h-6 lg:w-12 lg:h-12' />
      </div>
    </div>
  )
}

export default Navbar
