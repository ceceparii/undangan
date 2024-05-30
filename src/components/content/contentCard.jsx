import React, { useState, useEffect, useRef } from 'react'
import { Heart, Send2, Message2, Archive } from 'iconsax-react'
import { ContentHeader } from '../../components/header.jsx'
import { likeContent } from '../../libs/fetcher.js'
import ContentImage from './contentImage.jsx'
import Comment from '../comments/comment.jsx'

// feed content card
const ContentCard = (props) => {
  const [openComment, setOpenComment] = useState(false);
  const targetRef = useRef(null)
  const body = document.querySelector('body')

  // likes validity content exist
  const likesInitial = props.content.likes.some(content => content === props.guestCookie.id)
  const [ likes, setLikes ] = useState(likesInitial)
  
  // Like content handler
  const heartHandler = async () => {
    setLikes(likes ? false : true)
    if(props.guestCookie){
      likeContent(props.content.id, props.guestCookie.id)
    }
  }
  
  // View to clicked content
  useEffect(() => {
    if(props.guestCookie.id === props.targetId){
      targetRef.current.scrollIntoView()
    }
  }, [props.guestCookie.id, props.targetId])
  
  const commentHandler = () => {
    if(!openComment) {
      setOpenComment(true)
      body.style.overflow = 'hidden'
    } else {
      setOpenComment(false)
      body.style.overflow= 'auto'
    }
  }

  return (
    <div ref={targetRef} className='my-3'>
      <ContentHeader musictitle={props.content.musicTitle}/>
      <ContentImage {...props} />
      <div className='p-3.5 flex justify-between'>
        <div className='flex gap-5 items-center'>
          <Heart 
            size='26'
            onClick={heartHandler}
            className={likes ? 'text-red-500' : ''}
            variant={likes ? 'Bold' : 'Linear'}
          />
          <Message2 
            size='26' 
            className='flip-horizontal' 
            onClick={commentHandler}
          />
          <Send2 size='26' />
        </div>
        <Archive size='26' />
      </div>
      <div className='px-3.5'>
        <p className='my-2.5'>Disukai oleh nagitaslavina1717 dan lainnya</p>
        <p>{props.guestCookie.username}  {props.content.description}</p>
        <div className='py-2 opacity-50' onClick={commentHandler}>
          Lihat komentar
        </div>
      </div>
      { openComment &&
        <Comment
          commentHandler={commentHandler}
          contentId={props.content.id}
        />
      }
    </div>
  )
}

export default ContentCard