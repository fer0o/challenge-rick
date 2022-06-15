import { AiFillStar, AiFillTag, AiFillBell } from 'react-icons/ai'
const NewPayment = () => {
  return (
    <div>
      <div className=' border-2 m-8 p-2 bg-white text-black w-80 h-44 lg:w-[32rem] lg:h-auto lg:m-1 lg:p-4 lg:mx-96 lg:space-y-4 space-y-1 '>
        <div className='flex flex-col lg:space-y-2 '>
          <h2>Tu próximo pago</h2>
          <h2>$28,860.00</h2>
          <h2>Fecha de pago</h2>
        </div>

        <div className='flex flex-row justify-between'>
          <span>16 Enero</span>
          <button>Pagar Ahora</button>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row mt-2'>
            <AiFillBell className='text-xl text-blue-200' />
            <span> Mis Logros </span>
          </div>
          <span>$27,260.00</span>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <AiFillBell className='text-xl text-blue-200' />
            <span> Compras con TDC </span>
          </div>
          <span>$1,600.00</span>
        </div>
      </div>
    </div>
  )
}

export default NewPayment
