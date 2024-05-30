import React, { useState, useEffect, Suspense, lazy } from 'react'
import InputComment from './inputComment.jsx'
import { Loading } from '../../fragments/fragmentComponent.jsx'

const CommentData = lazy(() => import('./commentData.jsx'))

const Comment = (props) => {
  const [ touches, setTouches ] = useState(null)

  useEffect(() => {
    setTouches(window.innerHeight / 2)
  }, [])

  // Touch listener, if height < 100 comment will close.
  const touchListener = (event) => {
    const touchValue = event.touches[0]
    const touch = Math.floor(window.innerHeight - touchValue.clientY)
    setTouches(touch)
    if(touch < 100) {
      props.commentHandler()
    }
  }
  
  return (
    <div
      className='fixed top-0 left-0 w-full h-full z-50'
      style={{ background: '#20202090' }}
    >
      <div 
        style={{ width: '100%', height: window.innerHeight - touches }}
        onClick={props.commentHandler}
      />
      <div
        className='w-full bg-white z-20 fixed left-0 rounded-t-3xl'
        style={{
          height: `${touches}px`,
          bottom: touches < 150 ? '-100%' : '0',
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
          <CommentData contentId={props.contentId}/>
        </Suspense>
        <InputComment 
          className='fixed bottom-0 left-0'
          contentId={props.contentId}
        />
      </div>
    </div>
  )
}

export default Comment