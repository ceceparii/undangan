import axios from 'axios'
import React, { useState } from 'react'
import { ArrowUp } from 'iconsax-react'
import { ProfilePictureFragment } from '../../fragments/fragmentComponent.jsx'
import { ContentContext } from '../../context/contentProvider.js'

const { REACT_APP_HOST } = process.env

const InputComment = ({ content, className }) => {
  const [ value, setValue ] = useState('')
  const [ isFocus, setIsFocus ] = useState(false)
  const contentContext = ContentContext()
  
  // Get guest _id in local storage
  const guest = JSON.parse(localStorage.getItem('guest'))
  
  // post comment
  const postComment = async (e) => {
    e.preventDefault()
    if(guest.guestname !== 'publik') {
      const { data } = await axios.post(REACT_APP_HOST + '/post-comment',
        {
          value,
          guest,
          content: content || contentContext.state.content,
        },
        { withCredentials: true }
      )
      if(data.success) setValue('')
    }
  }
  // navigation display handler
  const focusHandler = () => {
    contentContext.dispatch({ type: 'focus_handler' })
    setIsFocus(isFocus ? false : true)
  }
  
  return (
    <form
      className={`${className} p-3.5 pb-7 flex gap-3.5 items-center w-full bg-white`}
      onSubmit={postComment}
    >
      <ProfilePictureFragment hideUsername={true} />
      <input
        type='text'
        value={value}
        className='w-full outline-0 p-2'
        placeholder={guest.guestname === 'publik' ? 'Publik tidak di ijinkan' : 'Tambahkan komentar ...'}
        onChange={e => setValue(e.target.value)}
        onFocus={focusHandler}
        onBlur={focusHandler}
      />
      <div
        style={{ opacity: isFocus || value ? '100%' : '0' }}
        className='bg-blue-500 text-white rounded-2xl p-1 px-2.5 w-max h-max'
        onClick={postComment}
      >
        <ArrowUp size='22' />
      </div>
    </form>
  )
}

export default InputComment
