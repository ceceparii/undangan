import React, { useState, useEffect, useRef } from 'react'
import { Microphone2, AddCircle, Camera } from 'iconsax-react'
import { HeaderConversation } from '../components/header.jsx'
import { Loading } from '../fragments/fragmentComponent.jsx'
import BubleChat from '../components/messages/bubleChat.jsx'
import Cookies from 'js-cookie'
import { getData, sendMessages } from '../libs/fetcher.js'

const cookies = Cookies.get('guest')
const guestCookie = cookies ? JSON.parse(cookies) : ''

// Conversation Page
const ConversationPage = () => {
  const [ textValue, setTextValue ] = useState('')
  const [ isFocus, setIsFocus ] = useState(false)
  const [ messages, setMessages ] = useState([])
  const endMessageRef = useRef(null)
  
  // Focus handler
  const focusHandler = () => setIsFocus(isFocus ? false : true)
  // Change handler
  const changeHandler = (e) => setTextValue(e.target.value)
  // Submit message
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = {
      guestId: guestCookie.id,
      guestname: guestCookie.guestname,
      message: textValue,
      time: Date.now()
    }
    
    if(guestCookie.guestname !== 'publik') {
      sendMessages(formData)
      .then((data) => {
        setTextValue('')
      })
    }
  }
  
  //get chat message
  useEffect(() => {
    const interval = setInterval(() => {
      getData('messages')
      .then((data) => setMessages(data))
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  //scroll handler
  useEffect(() => {
    if(endMessageRef.current) {
      endMessageRef.current.scrollTop = endMessageRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className=''>
      <HeaderConversation />
      <div 
        className='absolute z-10 w-max bg-gray-100 p-2.5 rounded-xl text-xs text-gray-500 shadow'
        style={{ transform: 'translateX(-50%)', left: '50%', marginTop: '8px'}}
      >
        Pesan ini bersifat publik, dan dapat dilihat siapapun.
      </div>
      <div className='messages-container fixed bottom-0 left-0 -z-10'>
        <div
          className='overflow-y-scroll flex flex-col hide-scrollbar'
          ref={endMessageRef}
        >
          {messages.length > 0 ?
            messages.map((message, index) => (
              <BubleChat key={index}
                rtl={message.guestname === guestCookie.guestname}
                messages={messages}
                index={index}
                {...message}
              />
            )) :
            <div className='h-full mb-7'>
              <Loading />
            </div>
          }
        </div>
      </div>
      <div className='fixed bottom-0 left-0 w-full pt-0 p-3.5 bg-white'>
        <form 
          className='bg-gray-200 rounded-3xl flex items-center  py-1 gap-3.5 pr-3.5 pl-1.5'
          onSubmit={submitHandler}
        >
          <div className="bg-blue-500 rounded-50 p-1">
            <Camera size='28' className='text-white' variant='Bold'/>
          </div>
          <input 
            onFocus={focusHandler}
            onBlur={focusHandler}
            type="text"
            value={textValue}
            className='w-full bg-transparent outline-0'
            placeholder={guestCookie.guestname === 'publik' ? 'Publik tidak di ijinkan' : 'Tulis pesan ...'}
            onChange={changeHandler}
          />
          { !isFocus &&
            <>
              <Microphone2 size='32'/>
              <AddCircle size='32' />
            </>
          }
        </form>
      </div>
    </div>
  )
}

export default ConversationPage