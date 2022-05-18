import React from 'react'

const InfoCard = ({ img, accent, title }) => {
  return (
    <div
      className={`${
        accent ? 'bg-accent' : 'bg-gradient-to-r from-secondary to-primary'
      } card card-side text-white p-8 flex-col sm:flex-row`}
    >
      <figure>
        <img className='w-20' src={img} alt='Movie' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  )
}

export default InfoCard
