import React, { useState, useEffect } from 'react'
import { withCommentTime } from '../../utils/withCommentTime.js'
import { getComments } from '../../libs/fetcher.js'

const GuestComment = (props) => {

  return (
    <div className='flex gap-3.5 items-start m-3.5 my-7'>
      <img src="/assets/icons/blank.png" alt="" className='w-10 rounded-50 aspect-square'/>
      <div>
        <div>
          {props.guestname}
          <span className='text-sm opacity-50 ml-3.5'>
            {props.elapsedTimes}
          </span>
        </div>
        <div>{props.text}</div>
      </div>
    </div>
  )
}

const WithTimeCommentGuest = withCommentTime(GuestComment)

const ComentData = ({ contentId }) => {
  const [ comments, setComments ] = useState([])

  // get comment data
  useEffect(() => {
    const interval = setInterval(() => {
      getComments(contentId)
      .then((data) => setComments(data))
    }, 2000)
    
    return () => clearInterval(interval)
  },[contentId])
  
  return (
    <div className='overflow-scroll h-full pb-32'>
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <WithTimeCommentGuest key={index} {...comment} />
        ))}
    </div>
  )
}

export default ComentData