import React, { useState, useEffect } from 'react'
import ContentCard from './contentCard.jsx'
import { ContentContext } from '../../context/contentProvider.js'
import Cookies from 'js-cookie'

const ContentList = ({ targetId }) => {
  const [playId, setPlayId] = useState('')
  const [guestCookie, setGuestCookie] = useState({})
  const { state } = ContentContext()

  useEffect(() => {
    const guestCookies = JSON.parse(Cookies.get('guest'))
    if (guestCookies) setGuestCookie(guestCookies)
  }, [])

  return (
    <div className='pb-20'>
      {state.feedContent.length > 0 &&
        state.feedContent.map(content => (
          <ContentCard
            key={content.id}
            content={content}
            playId={playId}
            setPlayId={setPlayId}
            targetId={targetId}
            guestCookie={guestCookie}
          />
        ))}
    </div>
  )
}

export default ContentList
