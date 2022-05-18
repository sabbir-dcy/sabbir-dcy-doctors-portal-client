import React from 'react'
import CTA from '../../components/CTA'
import format from 'date-fns/format'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import axios from 'axios'
import { toast } from 'react-toastify'

const BookingModal = ({
  treatement,
  appointmentDate,
  setTreatment,
  refetch,
}) => {
  const { _id, name, slots } = treatement
  const [user, loading, error] = useAuthState(auth)
  const formattedDate = format(appointmentDate, 'PP')

  const handleBooking = (event) => {
    event.preventDefault()
    const slot = event.target.slot.value

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: '880' + event.target.number.value,
    }

    axios
      .post('https://cryptic-tor-07008.herokuapp.com/booking', booking)
      .then((res) => {
        if (res.data.success) {
          toast.success(`Appointment is set at, ${formattedDate} ${slot}`)
        } else {
          toast.warning(
            `You already have an appointment at
          ${res.data?.booking?.date} ${res.data?.booking?.slot}`
          )
        }
        refetch()
        setTreatment(null)
      })

    // for now to close the modal
  }
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box w-4/5'>
          <h3 className='text-center font-bold text-lg'>booking for {name}</h3>
          <form onSubmit={handleBooking} className='space-y-3 mt-4'>
            <input
              type='text'
              value={format(appointmentDate, 'PP')}
              readOnly
              className='input input-bordered w-full '
            />
            <select name='slot' className='select select-bordered w-full'>
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              value={user?.displayName}
              readOnly
              className='input input-bordered w-full '
            />
            <input
              type='email'
              name='email'
              value={user?.email}
              readOnly
              className='input input-bordered w-full '
            />
            <div className='form-control'>
              <label className='input-group'>
                <span>+880</span>
                <input
                  name='number'
                  type='text'
                  placeholder='phone number'
                  className='input input-bordered w-full'
                />
              </label>
            </div>
            <CTA type='submit' className='w-full'>
              submit
            </CTA>
          </form>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
