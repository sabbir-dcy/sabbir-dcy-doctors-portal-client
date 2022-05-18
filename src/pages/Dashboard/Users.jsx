import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    axios('https://cryptic-tor-07008.herokuapp.com/users', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => res.data)
  )
  if (isLoading) return <p>loading</p>
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const UserRow = ({ user, refetch }) => {
  const { email, role } = user
  const makeAdmin = () => {
    fetch(`https://cryptic-tor-07008.herokuapp.com/user/admin/${email}`, {
      method: 'put',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('failed to make admin')
        }
        return res.json()
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch()
          toast.success(data)
        }
      })
  }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' ? (
          <button className='btn btn-accent' onClick={makeAdmin}>
            make admin
          </button>
        ) : (
          <button className='text-primary font-bold'>admin</button>
        )}
      </td>
      <td>
        <button className='btn btn-accent'>remove user</button>
      </td>
    </tr>
  )
}

export default Users
