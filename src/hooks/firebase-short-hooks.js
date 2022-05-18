import { sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react'

export const usePassResetEmail = (auth) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [sent, setSent] = useState(false)

  function sendPassResetEmail(email) {
    setLoading(true)
    setSent(false)
    setError(false)

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false)
        setSent(true)
      })
      .catch((err) => {
        const message = err.message.split(' ')
        err.toast = message.at(-1).replace(/auth|[)-/(]/g, ' ')
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return [sendPassResetEmail, loading, error, sent]
}
