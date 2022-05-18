import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import CTA from '../../components/CTA'
import { toast } from 'react-toastify'

import { auth } from '../../firebase/firebase.init'
import { usePassResetEmail } from 'react-short-hook'

const ResetPassword = () => {
  const [sendPassResetEmail, loading, error, sent] = usePassResetEmail(auth)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' })

  useEffect(() => {
    error && toast.error(error.toast)
    error && console.log(error)
    sent && toast.success('sent')
  }, [error, sent])

  const onSubmit = (data) => {
    sendPassResetEmail(data.email)
    reset()
  }

  if (loading) return <p>sending in progress</p>

  return (
    <div className='w-96 mx-auto bg-base-100 shadow-lg p-5 rounded-xl absolute inset-0 m-auto h-fit'>
      <p className='text-center font-medium text-xl'>Reset Password</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mt-8 mb-4'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='p-3 mt-2 bg-base-200 outline-none focus:outline-primary rounded-md outline-offset-0'
            type='email'
            {...register('email', {
              required: 'enter email address',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email',
              },
            })}
          />
          {errors.email && (
            <p className='w-full mt-4 text-red-900 font-medium bg-red-200 border border-red-300 p-2 rounded-md'>
              {errors.email.message}
            </p>
          )}
        </div>
        <CTA type='submit' className={`${loading && 'loading'} w-full`}>
          submit
        </CTA>
      </form>
    </div>
  )
}

export default ResetPassword
