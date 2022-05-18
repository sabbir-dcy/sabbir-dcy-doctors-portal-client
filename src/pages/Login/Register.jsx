import React, { useEffect, useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import { toast } from 'react-toastify'
import useToken from '../../hooks/useToken'
import { useForm } from 'react-hook-form'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [createUser, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  )
  const [updateProfile, updating, upError] = useUpdateProfile(auth)
  const [token] = useToken(user)
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  useEffect(() => {
    if (error || upError) {
      const message = error?.message.split(' ') || upError?.message.split(' ')
      toast.error(message.at(-1).replace(/auth|[()-/]/g, ' '))
    }
  }, [error, upError])

  token && navigate(localStorage.getItem('location'))

  const onSubmit = async ({ email, password, name }) => {
    await createUser(email, password)
    await updateProfile({ displayName: name })
    reset()
  }

  return (
    <div className='card w-[420px] mx-auto bg-base-100 shadow-xl mt-20'>
      <div className='card-body'>
        <h2 className='text-center text-2xl font-medium'>Register</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {
            //*name
          }
          <div className='flex flex-col gap-y-3 relative'>
            <label htmlFor='name'>Your name</label>
            <input
              className={`${
                errors.name
                  ? 'focus:outline-red-400'
                  : 'focus:outline-secondary'
              } bg-base-200 p-3 focus:outline outline-offset-1 rounded-md`}
              type='name'
              id='name'
              name='name'
              {...register('name')}
            />
            {errors.name(
              <p className='text-red-500 text-sm absolute -bottom-6'>
                {errors.name.message}
              </p>
            )}
          </div>
          {
            //*email address
          }
          <div className='flex flex-col gap-y-3 relative'>
            <label htmlFor='email'>Email Address</label>
            <input
              className={`${
                errors.email
                  ? 'focus:outline-red-400'
                  : 'focus:outline-secondary'
              } bg-base-200 p-3 focus:outline outline-offset-1 rounded-md`}
              type='email'
              id='email'
              name='email'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-red-500 text-sm absolute -bottom-6'>
                {errors.email.message}
              </p>
            )}
          </div>

          {
            //*password
          }
          <div className='flex flex-col gap-y-3 relative'>
            <label htmlFor='password'>Password</label>
            <input
              className={`${
                errors.password
                  ? 'focus:outline-red-400'
                  : 'focus:outline-secondary '
              } bg-base-200 p-3 focus:outline outline-offset-1 rounded-md`}
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-500 text-sm absolute -bottom-6'>
                {errors.password.message}
              </p>
            )}
            <div
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
              className='absolute cursor-pointer right-4 bottom-2'
            >
              <div
                className='tooltip tooltip-accent text-2xl text-gray-500'
                data-tip='press and hold'
              >
                {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>

          {
            //* confirm password
          }
          <div className='flex flex-col gap-y-3 relative'>
            <label htmlFor='password'>Confirm Password</label>
            <input
              className={`${
                errors.confirmPassword
                  ? 'focus:outline-red-400'
                  : 'focus:outline-secondary '
              } bg-base-200 p-3 focus:outline outline-offset-1 rounded-md`}
              type={showPassword ? 'text' : 'password'}
              id='confirmPassword'
              name='confirmPassword'
              {...register('confirmPassword')}
              autoComplete='off'
            />
            {errors.confirmPassword && (
              <p className='text-red-500 text-sm absolute -bottom-6'>
                {errors.confirmPassword.message}
              </p>
            )}
            <div
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
              className='absolute cursor-pointer right-4 bottom-2'
            >
              <div
                className='tooltip tooltip-accent text-2xl text-gray-500'
                data-tip='press and hold'
              >
                {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>

          {
            //*submit
          }
          <div>
            <button
              type='submit'
              className={`${
                loading && 'loading'
              } btn btn-accent text-white mt-5 w-full`}
            >
              register
            </button>
          </div>
        </form>
        <p>
          already joined?{' '}
          <Link to='/login' className='underline text-secondary font-medium'>
            go to login
          </Link>
        </p>

        {/* <button className="btn btn-primary">hello</button> */}
      </div>
    </div>
  )
}

export default Register
