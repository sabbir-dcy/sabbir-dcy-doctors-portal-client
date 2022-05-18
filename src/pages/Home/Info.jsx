import React from 'react'
import { InfoCard } from '../../export'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-4/5 mx-auto '>
      <InfoCard img={clock} title='Opening Hours'></InfoCard>
      <InfoCard img={marker} accent title='Visit our location'></InfoCard>
      <InfoCard img={phone} title='Contact us now'></InfoCard>
    </div>
  )
}

export default Info
