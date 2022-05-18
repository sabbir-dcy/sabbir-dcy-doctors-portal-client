import React, { useEffect } from 'react'
import { useSendEmailVerification } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import CTA from '../../components/CTA'
import { auth } from '../../firebase/firebase.init'
const VerifyUser = () => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
  error && console.log(error.message)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  useEffect(() => {
    const timer = setInterval(() => {
      auth.currentUser.reload().then(() => {
        if (auth.currentUser.emailVerified) {
          clearInterval(timer)
          navigate(from, { replace: true })
        }
      })
    }, 1000)
  }, [navigate, from])

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' })
  const onSubmit = async (data) => {
    await sendEmailVerification(data.email)
    reset()
  }
  return (
    <div className='w-96 mx-auto bg-base-100 shadow-lg p-5 rounded-xl absolute inset-0 m-auto h-fit'>
      <div>
        <p className='text-center font-medium text-xl'>Verify Email</p>
        <p className='italic'>
          check inbox. Incase you havent got email you can send verification
          email again.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mt-4 mb-4'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='p-3 mt-2 bg-base-200 outline-none focus:outline-primary rounded-md outline-offset-0'
            type='email'
            placeholder='re enter email address'
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
        <CTA type='submit' className='w-full'>
          send again
        </CTA>
      </form>
    </div>
  )
}

export default VerifyUser
