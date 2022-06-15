import { AiFillStar, AiFillTag, AiFillBell } from 'react-icons/ai'
const Icons = () => {
  return (
    <div>
      <div className='bg-purple-900 px-8 pt-8 pb-10'>
        <div className='flex flex-row justify-between lg:justify-center lg:space-x-20'>
          <div className='flex flex-col'>
            <AiFillStar className='text-white text-xl m-4 lg:m-8 lg:text-4xl' />
            <span className='text-white text-xs flex justify-center lg:text-xl'>
              Crear logro
            </span>
          </div>

          <div className='flex flex-col'>
            <AiFillTag className='text-white text-xl m-4 lg:m-8 lg:text-4xl' />
            <span className='text-white text-xs flex justify-center lg:text-xl'>
              Pagar Servcio
            </span>
          </div>
          <div className='flex flex-col'>
            <AiFillBell className='text-white text-xl m-4 lg:m-8 lg:text-4xl' />
            <span className='text-white text-xs flex justify-center lg:text-xl'>
              Suscripción
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Icons
