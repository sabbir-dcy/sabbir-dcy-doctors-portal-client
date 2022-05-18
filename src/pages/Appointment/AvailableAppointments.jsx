import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import BookingModal from './BookingModal'
import Service from './Service'

const AvailableAppointments = ({ appointmentDate }) => {
  // const [services, setServices] = useState([])
  const [treatement, setTreatment] = useState(null)
  const formattedDate = format(appointmentDate, 'PP')

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(['available', formattedDate], () =>
    fetch(
      `https://cryptic-tor-07008.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  )
  if (isLoading) {
    return <p>loading...</p>
  }

  // useEffect(() => {
  //   fetch(`https://cryptic-tor-07008.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data)
  //     })
  // }, [formattedDate])

  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-secondary text-xl'>
        Available appointments on{' '}
        {appointmentDate && format(appointmentDate, 'PP')}
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatement && (
        <BookingModal
          treatement={treatement}
          appointmentDate={appointmentDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  )
}

export default AvailableAppointments
