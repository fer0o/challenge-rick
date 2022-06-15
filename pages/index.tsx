import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Balance from '../components/firstView/Balance'
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
        <Balance />
      </div>
      <div className='relative'>
        <Icons />
      </div>
      <div className='absolute top-[17rem] z-50  lg:top-96'>
        <NewPayment />
      </div>

      {/* part of the fetch data */}
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
