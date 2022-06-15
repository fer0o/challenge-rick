interface Props {
  balance: string
  money: string
}
const Balance = ({ balance, money }: Props) => {
  return (
    <div className='border rounded drop-shadow-md ring-0 ring-gray-50 lg:w-full lg:h-24 w-[300px] h-[86px] lg:block  lg:items-center p-3 lg:mx-96 mx-11  bg-white '>
      <span className='font-sans text-base font-semibold uppercase'>
        {balance}
      </span>
      <h2 className='text-3xl font-sans font-extrabold text-magenta-900'>
        {money}
      </h2>
    </div>
  )
}

export default Balance
