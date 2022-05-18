import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const { data: services, isLoading } = useQuery('services', () =>
    fetch('https://cryptic-tor-07008.herokuapp.com/services').then((res) =>
      res.json()
    )
  )

  const imgAPI = '76fdd252164aaaf00ca83bace0d21aeb'
  const onSubmit = async (data) => {
    console.log(data)
    console.log('data.image :>> ', data.image)
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgAPI}`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
      })
  }

  if (isLoading) {
    return
  }

  return (
    <div>
      <h2 className='text-2xl'>Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Your Name'
            className='input input-bordered w-full max-w-xs'
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='Your Email'
            className='input input-bordered w-full max-w-xs'
            {...register('email', {
              required: {
                value: true,
                message: 'Email is Required',
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email',
              },
            })}
          />
          <label className='label'>
            {errors.email?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className='label-text-alt text-red-500'>
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Specialty</span>
          </label>
          <select
            {...register('specialty')}
            className='select input-bordered w-full max-w-xs'
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Photo</span>
          </label>
          <input
            name='image'
            type='file'
            className='input input-bordered w-full max-w-xs'
            {...register('image', {
              required: {
                value: true,
                message: 'Image is Required',
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className='btn btn-accent w-full max-w-xs '
          type='submit'
          value='Add'
        />
      </form>
    </div>
  )
}

export default AddDoctor
