import React from 'react'

const PieChart = () => {
  return (
    <div>
      <div>
        <span className='flex justify-start mx-11 mt-4 text-lg font-semibold'>
          Selecciona tu plazo
        </span>
        <div className='flex flex-col mx-32 my-32 space-y-2 lg:mx-96 relative'>
          <span className='text-xs font-semibold ml-3 '>Tu pago mensual</span>
          <span className='text-2xl font-bold'>$12,000.00</span>
          <span className='text-xs font-semibold ml-6'> a 60 meses </span>
          <span className='text-xs text-blue-200 font-semibold ml-6'>
            Tasa de interés 16.6%
          </span>
        </div>
        <button className='uppercase border-2 rounded-md p-2 block text-center w-[310px] h-[52px] ml-10 bg-blue-200 text-white text-xl'>
          Lo quiero
        </button>
        <div className='border-[24px] border-l-blue-200 border-r-magenta-1000 border-y-magenta-1000 rounded-full h-52 w-52 absolute top-[480px] left-[85px]'></div>
      </div>
    </div>
  )
}

export default PieChart
