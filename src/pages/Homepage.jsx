import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <section className='w-full h-screen bg-hero bg-cover flex items-center justify-center'>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col items-center gap-8'>
        <h1 className='text-5xl font-bold text-white'>You travel the world. <br /> Worldwise keeps track of your adventures.</h1>
        <h2 className='max-w-lg mx-auto text-xl text-light--1'>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="login">
          <button type="button" className=' bg-brand--2 py-3 px-6 uppercase rounded-md font-semibold text-[15px]'>start tracking now</button>
        </Link>
      </div>
    </section>
  )
}

export default Homepage;