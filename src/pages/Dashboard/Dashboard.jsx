import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, Outlet } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { useAdmin } from '../../hooks/useAdmin'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  console.log('is admin? : ', admin)
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <h2 className='text-2xl font-bold text-primary'>Dashboard</h2>
        <div className=''>
          <Outlet></Outlet>
        </div>
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/review'>Review</NavLink>
          </li>
          {admin && (
            <>
              <li>
                <NavLink to='/dashboard/users'>All Users</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/addDoctor'>Add doctor</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
