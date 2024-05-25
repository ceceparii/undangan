import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddContent from './addContent.jsx'
import { useParams, useNavigate } from 'react-router-dom'
const { REACT_APP_HOST } = process.env

// Admin Page
const AdminPage = () => {
  const [ guest, setGuest ] = useState('')
  const [ admin, setAdmin ] = useState({})
  const { username, password } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    const authorization = async () => {
      const { data } = await axios.post(`${REACT_APP_HOST}/auth`, { username, password }, {
        withCredentials: true
      })
      if(!data.success){
        navigate('/page-not-found-404')
      }
      
      if(data.success){
        setAdmin(data.result)
        localStorage.setItem('guest', JSON.stringify(data.result))
      } 
      
    }
    
    authorization()
  }, [navigate, password, username])
  
  const changeHandler = (e) => {
    const { value } = e.target
    setGuest(value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    
    const { data } = await axios.post(REACT_APP_HOST + '/add-guest', { guest, username: admin.username },
      { withCredentials: true }
    )
    console.log(data)
    if(data.success) setGuest('')
  }
  
  if(admin.username) {
    return (
      <div className='w-full'>
        <AddContent 
          path={`${REACT_APP_HOST}/feed/feed_content`}
          content='feed'
          header='ADD FEED CONTENT'
        />
        <AddContent
          path={`${REACT_APP_HOST}/story/story_content`}
          content='story'
          header='ADD STORY CONTENT'
        />
        <div className='m-3.5 p-3.5 rounded-2xl shadow'>
          <div className='text-center font-semibold my-3.5'>TAMBAH TAMU UNDANGAN</div>
          <div className='flex gap-3.5'>
            <input 
              type="text" 
              value={guest}
              className='p-2 border rounded-xl w-full'
              onChange={changeHandler}
            />
            <button onClick={submitHandler} className='p-2.5 px-4 bg-blue-400 rounded-xl text-white'>
              TAMBAH
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminPage