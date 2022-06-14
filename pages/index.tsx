import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/firstView/Navbar'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from '../types'

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div>
      <Navbar />
      {/* part of the fetch data */}
      <div>
        {/* map the json */}
        {characters.map(character => {
          return (
            <div key={character.id}>
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
              />
              <span>{character.name}</span>
            </div>
          )
        })}
      </div>
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
