import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useLocation } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <div className='container bg-base-100 mx-auto'>
      <div className='navbar p-0 flex justify-between'>
        <div className=''>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <MenuItems></MenuItems>
            </ul>
          </div>
          <NavLink to='/' className='btn btn-ghost normal-case text-xl'>
            Doctors Portal
          </NavLink>
        </div>
        <div className=''>
          <div className=' hidden lg:flex'>
            <ul className='menu menu-horizontal p-0 items-center gap-x-2'>
              <MenuItems></MenuItems>
            </ul>
          </div>
          {pathname === '/dashboard' && (
            <div>
              <label
                tabIndex='1'
                htmlFor='dashboard-sidebar'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const MenuItems = () => {
  const [user, loading, error] = useAuthState(auth)
  return (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/appointment'>Appointment</NavLink>
      </li>
      <li>
        <NavLink to='/'>Reviews</NavLink>
      </li>
      <li>
        <NavLink to='/'>Contact Us</NavLink>
      </li>
      <li>
        {user ? (
          <NavLink to='/dashboard'>Dashboard</NavLink>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </li>
      <li>
        {user && (
          <button
            className='btn'
            onClick={() => {
              signOut(auth)
              localStorage.clear()
            }}
          >
            logout
          </button>
        )}
      </li>
    </>
  )
}

export default Navbar
