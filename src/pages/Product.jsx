import React from 'react'
import Button from '../ui/Button'

function Product() {
  return (
    <section className='w-full h-screen bg-dark--0 flex f items-center justify-center'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex gap-28'>
          <div className='flex-1'>
            <img src="img-1.jpg" alt="" className='w-full' />
          </div>
          <div className='flex-1 flex flex-col justify-center gap-8 text-white'>
            <h2 className='text-5xl font-bold leading-[4rem]'>About WorldWise.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa cum quaerat architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga perspiciatis?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi officiis et.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product;