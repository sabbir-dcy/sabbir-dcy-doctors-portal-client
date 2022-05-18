import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../firebase/firebase.init'

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) return
    fetch(
      `https://cryptic-tor-07008.herokuapp.com/booking?patient=${user?.email}`,
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => {
        console.log('response=>>', res)
        if (res.status === 401 || res.status === 403) {
          localStorage.clear()
          signOut(auth)
          navigate('/')
          toast.error('token invalidated')
        }
        return res.json()
      })
      .then((data) => {
        setAppointments(data)
      })
  }, [user, navigate])
  return (
    <div>
      <h2>MyAppointments {appointments?.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAppointments
