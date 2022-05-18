import React, { useEffect, useState } from 'react'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useToken from '../../hooks/useToken'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth)

  const [token] = useToken(gUser || eUser)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'
  useEffect(() => {
    localStorage.setItem('location', from)
  }, [from])

  useEffect(() => {
    token && navigate(from, { replace: true })
  }, [from, navigate, token])

  useEffect(() => {
    if (eError) {
      const message = eError.message.split(' ')
      toast.error(message.at(-1).replace(/auth|[()-/]/g, ' '))
    }
  }, [eError])

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
    reset()
  }

  return (
    <div className='card w-[420px] mx-auto bg-base-100 shadow-xl mt-20'>
      <div className='card-body'>
        <h2 className='text-center text-2xl font-medium'>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div className='flex flex-col gap-y-3 relative'>
            <label htmlFor='email'>Email Address</label>
            <input
              className={`${
                errors.email
                  ? 'focus:outline-red-300'
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
          <div className='flex flex-col gap-y-3 relative'>
            <label htmlFor='password'>Password</label>
            <input
              className={`${
                errors.password
                  ? 'focus:outline-red-300'
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
              className='absolute cursor-pointer right-4 bottom-3'
            >
              <div className='tooltip tooltip-accent' data-tip='press and hold'>
                {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>
          <p>
            <Link
              to='/resetPassword'
              className='underline text-accent font-medium'
            >
              forgot password
            </Link>
          </p>
          <div>
            <button type='submit' className='btn btn-accent text-white w-full'>
              submit
            </button>
          </div>
        </form>
        <p>
          new to doctors portal?{' '}
          <Link to='/register' className='underline text-secondary font-medium'>
            create new account
          </Link>
        </p>

        <div className='divider'>OR</div>
        <button
          className={`${gLoading && 'loading'} btn btn-outline`}
          onClick={() => signInWithGoogle()}
        >
          continue with google
        </button>
        {/* <button className="btn btn-primary">hello</button> */}
      </div>
    </div>
  )
}

export default Login
