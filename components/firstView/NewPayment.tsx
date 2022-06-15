import { BsCashCoin } from 'react-icons/bs'
import { FaRegCreditCard } from 'react-icons/fa'
const NewPayment = () => {
  return (
    <div>
      <div className=' border-2 rounded m-9 p-2 bg-white text-black w-80 h-auto lg:w-full lg:h-auto lg:m-1 lg:p-4 lg:mx-96 lg:space-y-4 space-y-1 '>
        <div className='flex flex-col lg:space-y-2 '>
          <h2>Tu próximo pago</h2>
          <h2 className='text-4xl font-bold mb-2'>$28,860.00</h2>
          <h2>Fecha de pago</h2>
        </div>

        <div className='flex flex-row justify-between'>
          <span className='text-xl font-semibold'>16 Enero</span>
          <button className='bg-blue-200 text-white rounded text-sm lg:text-base lg:w-28 lg:h-8  w-[120px] h-32px'>
            Pagar Ahora
          </button>
        </div>
        <div className='flex flex-row justify-between '>
          <div className='flex flex-row '>
            <BsCashCoin className='text-xl text-blue-200 mr-2' />
            <span> Mis Logros </span>
          </div>
          <span className='font-semibold'>$27,260.00</span>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <FaRegCreditCard className='text-xl text-blue-200 mr-2' />
            <span> Compras con TDC </span>
          </div>
          <span className='font-semibold'>$1,600.00</span>
        </div>
      </div>
    </div>
  )
}

export default NewPayment
