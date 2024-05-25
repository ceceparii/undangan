import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/router.js'
import { Outlet } from 'react-router-dom'
import Comment from './components/comments/comment.jsx'
import ContentProvider, { ContentContext } from './context/contentProvider.js'
import axios from 'axios'

const { REACT_APP_HOST } = process.env

export default function MainApp(){
  const { state, dispatch } = ContentContext()
  
  useEffect(() => {
    // Get feed content
    const getFeedContent = async () => {
      const { data } = await axios.get(`${REACT_APP_HOST}/content/feed_content`, {}, {
        withCredentials: true
      })
      if(data.success) {
        dispatch({
          type: 'FEED_CONTENT',
          payload: data.result 
        })
      }
    }
    
    // Get story content
    const getStoryContent = async () => {
      const { data } = await axios.get(`${REACT_APP_HOST}/content/story_content`, {}, {
        withCredentials: true
      })
      if(data.success) {
        dispatch({
          type: 'STORY_CONTENT',
          payload: data.result 
        })
      }
    }
    getFeedContent()
    getStoryContent()
  }, []) // eslint-disable-line
  
  return (
    <div >
      <Outlet />
      { state.openComment &&
        <Comment />
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ContentProvider>
    <AppRouter />
  </ContentProvider>
)