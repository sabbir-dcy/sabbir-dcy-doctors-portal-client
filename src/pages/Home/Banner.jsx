import React from 'react'
import chair from '../../assets/images/chair.png'
import CTA from '../../components/CTA'

const Banner = () => {
  const handleAction = () => {
    console.log('hello world')
  }
  return (
    <div className='hero md:min-h-screen bg-hero bg-fixed'>
      <div className='bg-base-100 w-full h-full grid justify-items-center'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={chair}
            className='w-full sm:max-w-xl rounded-lg'
            alt='banner'
          />
          <div>
            <h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <CTA handleAction={handleAction}>Get Started</CTA>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
