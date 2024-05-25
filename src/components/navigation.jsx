import React from 'react'
import { ProfileCircle, Home, Card, Messenger, Calendar } from 'iconsax-react'
import { useLocation } from 'react-router-dom'
import { Navigate } from '../utils/navigate.js'

const Navigation = () => {
  const { pathname } = useLocation()
  
  return (
    <div className='flex fixed bottom-0 left-0 p-3.5 justify-around w-full bg-white py-3.5 pb-7'>
      <Navigate path={'/'}>
        <Home
          size='28'
          variant={pathname === '/' ? 'Bold' : 'Linear'}
        />
      </Navigate>
      <Navigate path='/messages'>
        <Messenger
          size='28'
          variant={pathname === '/messages' ? 'Bold' : 'Linear'}
        />
      </Navigate>
      <Navigate path='/calendar'>
        <Calendar
          size='28'
          variant={pathname === '/calendar' ? 'Bold' : 'Linear'}
        />
      </Navigate>
      <Navigate path='/kirim-hadiah'>
        <Card
          size='28'
          variant={pathname === '/kirim-hadiah' ? 'Bold' : 'Linear'}
        />
      </Navigate>
      <Navigate path='/profile-page'>
        <ProfileCircle
          size='28'
          variant={pathname === '/profile-page' ? 'Bold' : 'Linear'}
        />
      </Navigate>
    </div>
  )
}

export default Navigation
