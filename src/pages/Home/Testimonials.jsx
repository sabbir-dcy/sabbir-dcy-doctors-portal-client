import React from 'react'
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review'

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: 'winson herry',
      img: people1,
    },
    {
      _id: 2,
      name: 'winson herry',
      img: people2,
    },
    {
      _id: 3,
      name: 'winson herry',
      img: people3,
    },
  ]
  return (
    <section className='my-28 container mx-auto px-4'>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-xl text-secondary font-bold'>Testimonials</h2>
          <h2 className='text-3xl'>What out patients say</h2>
        </div>
        <div>
          <img className='w-24 md:w-48' src={quote} alt='' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-16'>
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
