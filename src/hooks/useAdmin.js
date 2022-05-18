import { useEffect, useState } from 'react'

export const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false)
  const [adminLoading, setAdminLoading] = useState(true)
  useEffect(() => {
    const email = user?.email
    if (email) {
      fetch(`https://cryptic-tor-07008.herokuapp.com/admin/${email}`, {
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setAdmin(data) //data == true/false
          setAdminLoading(false)
        })
    }
  }, [user])
  return [admin, adminLoading]
}
