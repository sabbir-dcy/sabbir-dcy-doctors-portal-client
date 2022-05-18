import React from 'react'
import { useForm } from 'react-hook-form'
import appointment from '../../assets/images/appointment.png'
import CTA from '../../components/CTA'

const Contact = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  const handleTest = (n) => {
    console.log('testing purpose', n)
  }
  return (
    <div
      style={{ backgroundImage: `url(${appointment})` }}
      className='min-h-[600px] grid items-center bg-fixed'
    >
      <div className='w-4/5 sm:w-3/5 md:w-2/4 xl:w-1/4 mx-auto'>
        <h3 className='text-secondary font-bold text-center'>contact us</h3>
        <h2 className='text-white text-3xl text-center'>
          stay connected with us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='w-full mt-4 p-3 rounded-md outline-none focus:outline-primary focus:outline-offset-1 transition-all'
            type='email'
            {...register('email', { required: true })}
            placeholder='enter email address'
          />
          <br />
          <input
            className='w-full mt-4 p-3 rounded-md outline-none focus:outline-primary focus:outline-offset-1 transition-all'
            type='text'
            {...register('subject', { required: true })}
            placeholder='subject'
          />
          <br />
          <textarea
            className='w-full mt-4 p-3 rounded-md outline-none focus:outline-primary focus:outline-offset-1 transition-all'
            rows='4'
            type='text'
            {...register('message', { required: true })}
            placeholder='your message'
          />

          <CTA type='submit' className='block mx-auto mt-4'>
            submit
          </CTA>
        </form>
        <CTA action={() => handleTest(5)} className='block mx-auto mt-2'>test button</CTA>
      </div>
    </div>
  )
}

export default Contact
