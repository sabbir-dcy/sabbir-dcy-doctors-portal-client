import React from 'react'

const Review = ({ review }) => {
  return (
    <div className='card text-primary-content shadow-md'>
      <div className='card-body space-y-8'>
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div className='flex items-center'>
          <div className='rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2'>
            <img src={review.img} alt='avatar' className='w-20' />
          </div>
          <div className='ml-4'>
            <h2>Winson Herry</h2>
            <p>California</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
