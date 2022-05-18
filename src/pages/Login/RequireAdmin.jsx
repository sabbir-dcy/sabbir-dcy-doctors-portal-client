import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { useAdmin } from '../../hooks/useAdmin'
import { signOut } from 'firebase/auth'

function RequireAdmin({ children }) {
  const [user, loading] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user)

  const location = useLocation()

  if (loading || adminLoading) return

  if (!admin || !user) {
    signOut(auth)
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  /* if (!user.emailVerified) {
    return <Navigate to='/verifyUser' state={{ from: location }} replace />
  } */

  return children
}

export default RequireAdmin
