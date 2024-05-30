import React, { useState } from 'react'
import { ArrowUp } from 'iconsax-react'
import { ProfilePictureFragment } from '../../fragments/fragmentComponent.jsx'
import Cookies from 'js-cookie'
import { sendComment } from '../../libs/fetcher.js'

const InputComment = ({ contentId, className }) => {
  const [ value, setValue ] = useState('')
  const [ isFocus, setIsFocus ] = useState(false)

  // Get guest id in local storage
  const guestCookie = JSON.parse(Cookies.get('guest'))
  // post comment
  const postComment = async (e) => {
    e.preventDefault()
    
    const formData = {
      guestId: guestCookie.id,
      guestname:  guestCookie.guestname,
      text: value,
      time: Date.now()
    }
    if(guestCookie.guestname !== 'publik') {
      try {
        sendComment(contentId, formData)
        .then((data) => {
          setValue('')
        })
      } catch(err) {
        console.error(err)
      }
    }
  }
  // send button display handler
  const focusHandler = () => {
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
        placeholder={guestCookie.guestname === 'publik' ? 'Publik tidak di ijinkan' : 'Tambahkan komentar ...'}
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
