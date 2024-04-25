import React from 'react'
import Button from '../ui/Button'

function Pricing() {
  return (
    <section className='w-full h-screen bg-dark--0 flex items-center justify-center'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex gap-28'>
          <div className='flex-1 flex flex-col justify-center gap-8 text-white'>
            <h2 className='text-5xl font-bold leading-[4rem]'>
              Simple pricing. <br />
              Just $9/month.
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.</p>
          </div>
          <div className='flex-1'>
            <img src="img-2.jpg" alt="" className='w-full'  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing