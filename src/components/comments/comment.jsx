import React, { useState, useEffect, Suspense, lazy } from 'react'
import InputComment from './inputComment.jsx'
import { ContentContext } from '../../context/contentProvider.js'
import { Loading } from '../../fragments/fragmentComponent.jsx'
//import CommentData from './commentData.jsx'

const CommentData = lazy(() => import('./commentData.jsx'))

const Comment = (props) => {
  const [ touches, setTouches ] = useState(null)
  const { dispatch } = ContentContext()

  useEffect(() => {
    setTouches(window.innerHeight / 2)
    dispatch({ type: 'navigation_handler', payload: false})
  }, [dispatch])
  
  
  // Touch listener, if height < 100 comment will close.
  const touchListener = (event) => {
    const touchValue = event.touches[0]
    const touch = Math.floor(window.innerHeight - touchValue.clientY)
    if(touch < 100) {
      dispatch({ type: 'comment_handler' })
      dispatch({ type: 'navigation_handler', payload: true})
    }
    setTouches(touch)
  }
  
  // close comment
  const closeComment = () => {
    dispatch({ type: 'navigation_handler', payload: true})
    dispatch({ type: 'comment_handler'})
  }
  
  return (
    <div
      className='fixed top-0 left-0 w-full h-full z-50'
      style={{ background: '#20202090' }}
    >
      <div 
        style={{ width: '100%', height: window.innerHeight - touches }}
        onClick={closeComment}
      />
      <div
        className='w-full bg-white z-20 fixed left-0 rounded-t-3xl'
        style={{
          height: `${touches}px`,
          bottom: touches < 100 ? '-100%' : '0',
        }}
      >
        <div 
          onTouchMove={touchListener}
          className='text-center p-3.5'
          style={{ borderBottom: '1px solid #20202020'}}
        >
          <div className='w-14 h-1 bg-gray-400 rounded-s mb-3.5 mx-auto'></div>
          <div className='mt-3.5'>Komentar</div>
        </div>
        <Suspense fallback={<Loading />}>
          <CommentData />
        </Suspense>
        <InputComment className='fixed bottom-0 left-0'/>
      </div>
    </div>
  )
}

export default Comment