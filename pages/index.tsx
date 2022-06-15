import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Balance from '../components/firstView/Balance'
import Footer from '../components/firstView/Footer'
import Icons from '../components/firstView/Icons'
import Navbar from '../components/firstView/Navbar'
import NewPayment from '../components/firstView/NewPayment'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from '../types'

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div>
      <div className='relative'>
        <Navbar />
      </div>
      <div className='absolute top-28 lg:top-32 z-50'>
        <Balance balance={'Saldo Disponible'} money={'$1,499,970.00'} />
      </div>
      <div className='relative'>
        <Icons />
      </div>
      <div className='absolute top-[17rem] z-50  lg:top-96'>
        <NewPayment />
      </div>
      <div className='relative top-56 lg:top-72 '>
        <div className=' mx-4 space-x-16 mb-4'>
          <span className='text-2xl font-bold'>Tus Movimientos</span>
          <span className='text-lg text-blue-300'>Ver Todos</span>
        </div>
        {/* fetch data part */}
        <div className='divide-y  mx-8 '>
          {characters.map(character => {
            return (
              <div key={character.id} className='grid grid-cols-3 '>
                <div className='m-2'>
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={80}
                    height={80}
                  />
                </div>
                <div className='flex flex-col justify-center space-y-2'>
                  <span className='text-xs font-semibold lg:text-2xl'>
                    Name: {character.name}
                  </span>
                  <span className='text-xs lg:text-2xl'>
                    Specie: {character.species}
                  </span>
                </div>
                <div className='flex flex-col justify-center ml-8 space-y-2'>
                  <span className='text-xs lg:text-2xl'>
                    Id: {character.id}
                  </span>
                  <span className='text-xs font-semibold lg:text-2xl'>
                    status: {character.status}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className=' '>
          <Footer />
        </div>
      </div>
      {/* end fetch data part */}
    </div>
  )
}
export const getStaticProps: GetStaticProps = async context => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const { results }: GetCharacterResults = await res.json()

  return {
    props: {
      characters: results
    }
  }
}
export default Home
