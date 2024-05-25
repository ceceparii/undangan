import React, { useState, useEffect } from 'react'
import { ContentContext } from '../../context/contentProvider.js'
import axios from 'axios'
import { withCommentTime } from '../../utils/withCommentTime.js'

const { REACT_APP_HOST } = process.env

const ComentData = () => {
  const { state } = ContentContext()
  const [ comments, setComments ] = useState([])

  // get comment data
  useEffect(() => {
    const fetchComment = async () => {
      const { data } = await axios.get(REACT_APP_HOST + '/get-comment/' + state.contentId,
      { },
      {
        withCredentials: true
      })
      if(data.success) {
        setComments(data.result.comments)
      }
    }
    
    fetchComment()
  },[state.contentId])
  
  return (
    <div className='overflow-scroll h-full pb-32'>
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <WithTimeCommentGuest key={index} {...comment} />
        ))}
    </div>
  )
}

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


export default ComentData
