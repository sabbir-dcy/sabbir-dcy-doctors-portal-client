import React from 'react'
import { useForm } from 'react-hook-form'

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const imageStorageKey = '76fdd252164aaaf00ca83bace0d21aeb'

  const onSubmit = async (data) => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
      })
  }

  return (
    <div>
      <h2 className='text-2xl'>Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Photo</span>
          </label>
          <input
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
          className='btn w-full max-w-xs text-white'
          type='submit'
          value='Add'
        />
      </form>
    </div>
  )
}

export default AddDoctor
