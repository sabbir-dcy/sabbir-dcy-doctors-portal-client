import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import CTA from '../../components/CTA'

const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appointment})`,
      }}
      className='bg-fixed'
    >
      <div className='flex items-center container mx-auto'>
        <div className='flex-1 hidden md:block'>
          <img className='-mt-36 h-[600px] object-cover' src={doctor} alt='' />
        </div>
        <div className='flex-1 text-white space-y-5 p-4'>
          <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
          <h2 className='text-4xl'>Make an Appointment Today</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            doloremque? Culpa saepe, eos enim, ipsam maiores earum commodi
            eligendi ipsum mollitia distinctio delectus quasi, accusantium rem
            sed necessitatibus error reiciendis. Laudantium autem at nemo cum.
            Hic eos ullam adipisci tenetur.
          </p>
          <CTA>Get started</CTA>
        </div>
      </div>
    </section>
  )
}

export default MakeAppointment
