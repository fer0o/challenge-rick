import Balance from '../components/firstView/Balance'
import BorderRectangle from '../components/secondView/BorderRectangle'
import PieChart from '../components/secondView/PieChart'
import SecondHeader from '../components/secondView/SecondHeader'

const disposicion = () => {
  return (
    <div>
      <div>
        <SecondHeader />
      </div>
      <div className='lg:w-[40rem] lg:mx-auto'>
        <Balance balance='Tienes Disponible' money={'$1,499,970.00'} />
      </div>
      <div>
        <BorderRectangle text='Auto' />
        <BorderRectangle text='$350,000.00' />
      </div>
      <div>
        <PieChart />
      </div>
    </div>
  )
}

export default disposicion
