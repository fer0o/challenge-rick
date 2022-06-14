import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='  bg-black  m-auto p-4'>
        <div className='container'>
          <a
            className='text-white text-2xl uppercase block text-center'
            href='/'
          >
            Rick and Morty App
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
