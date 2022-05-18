import { Service } from './Service'
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

export const Services = () => {
  const services = [
    {
      _id: 1,
      title: 'Fluoride Treatment',
      detail:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: fluoride,
    },
    {
      _id: 2,
      title: 'Cavity Filling',
      detail:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: cavity,
    },
    {
      _id: 3,
      title: 'Teeth Whitening',
      detail:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: whitening,
    },
  ]

  return (
    <div className='mt-20'>
      <p className='text-center uppercase font-bold text-lg text-secondary'>
        our services
      </p>
      <h2 className='text-center text-4xl mb-16'>Service We Provide</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-4/5 mx-auto'>
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  )
}
