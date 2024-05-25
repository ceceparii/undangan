import React, { useState, useEffect, useRef } from 'react'
import { More, Heart, Send2, Message2, Archive } from 'iconsax-react'
import axios from 'axios'
import InputComment from './comments/inputComment.jsx'
import { ContentContext } from '../context/contentProvider.js'
import { ContentHeader} from '../components/header.jsx'
import withAudioPlay from '../utils/withAudioPlay.js'

const { REACT_APP_HOST } = process.env

const WithAudioPlayImage = withAudioPlay(({ path }) => {
  return <img src={`${REACT_APP_HOST}/assets${path}`} alt="" className='w-full'/>
})
const guest = JSON.parse(localStorage.getItem('guest'))

// feed content card
const ContentCard = (props) => {
  const { dispatch } = ContentContext()
  
  // Open comment component
  const clickHandler = (value) => {
    dispatch({ type: 'comment_handler', payload: props._id })
  }
  
  // likes validity content exist
  const likesInitial = props.likes.some(content => content === guest._id)
  const [ likes, setLikes ] = useState(likesInitial)
  
  // Like content handler
  const heartHandler = async () => {
    setLikes(likes ? false : true)
    if(guest.guestname !== 'publik') {
      await axios.post(REACT_APP_HOST + '/favorites',
        { guest: guest._id, content: props._id },
        { withCredentials: true }
      )
    }
  }
  
  const targetRef = useRef(null)
  
  // View to clicked content
  useEffect(() => {
    if(props._id === props.targetId){
      targetRef.current.scrollIntoView()
    }
  }, [props._id, props.targetId])
  
  return (
    <div ref={targetRef}>
      <ContentHeader musictitle={props.musictitle}/>
      <WithAudioPlayImage {...props} />
      <div className='p-3.5 flex justify-between'>
        <div className='flex gap-5 items-center'>
          <Heart 
            size='26'
            onClick={heartHandler}
            className={likes ? 'text-red-500' : ''}
            variant={likes ? 'Bold' : 'Linear'}
          />
          <Message2 size='26' className='flip-horizontal' onClick={() => clickHandler(props.id)}/>
          <Send2 size='26' />
        </div>
        <Archive size='26' />
      </div>
      <div className='px-3.5'>
        <p className='my-2.5'>Disukai oleh nagitaslavina1717 dan lainnya</p>
        <p>{guest.username}  {props.description}</p>
        <div className='py-2 opacity-50' onClick={() => clickHandler(props.id)}>
          Lihat komentar
        </div>
        <InputComment content={props._id} />
      </div>
    </div>
  )
}

export default ContentCard