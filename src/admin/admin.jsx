import React, { useEffect } from 'react'
import { useNavigate, Outlet, useParams } from 'react-router-dom'
// Admin Page
const AdminPage = () => {
  const navigate = useNavigate()
  const { user } = useParams()
  
  useEffect(() => {
    if(!user) navigate('/404/notfound')
  }, [user, navigate])
  
  return (
    <div className='w-full'>
      <div className='w-full p-3.5 text-3xl font-extrabold bg-gray-700 text-white flex justify-between items-center'>
        <div
          className='text-3xl font-semibold'
          onClick={() => navigate('/')}
        >
          Admin
        </div>
        <div className='flex gap-3.5'>
          <div onClick={() => navigate(`/admin/${user}`)}>tamu undangan</div>
          <div onClick={() => navigate(`/admin/${user}/content`)}>content</div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminPage
