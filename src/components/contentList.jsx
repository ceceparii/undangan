import React, { useState } from 'react'
import ContentCard from './contentCard.jsx'
import { ContentContext } from '../context/contentProvider.js'

const ContentList = ({ targetId }) => {
  const { state } = ContentContext()
  const [ playId, setPlayId ] = useState('')

  return (
    <div className='pb-20'>
      {state.feedContent.map(image => (
        <ContentCard
          key={image._id}
          {...image} 
          playId={playId}
          setPlayId={setPlayId}
          targetId={targetId}
        />
      ))}
    </div>
  )
}

export default ContentList
