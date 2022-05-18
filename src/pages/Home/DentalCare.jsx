import React from 'react'
import treatment from '../../assets/images/treatment.png'
import CTA from '../../components/CTA'

const DentalCare = () => {
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col lg:flex-row gap-20'>
        <img src={treatment} className='sm:max-w-lg rounded-lg' alt='banner' />
        <div>
          <h1 className='text-5xl font-bold'>
            Exceptional Dental Care, on Your Term
          </h1>
          <p className='py-6'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <CTA>Get Started</CTA>
        </div>
      </div>
    </div>
  )
}

export default DentalCare
