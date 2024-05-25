import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid1, Map, VideoPlay } from 'iconsax-react'
import { GoogleMap2 } from './embedComponent.jsx'
import { ContentContext } from '../context/contentProvider.js'

const { REACT_APP_HOST } = process.env

const ProfileContent = () => {
  const [ isActive, setIsActive ] = useState(1)
  const navigate = useNavigate()
  const contentContext = ContentContext()
  
  return (
    <>
      <div className='flex justify-between'>
        <button 
          className={`border-b-2 border-black w-full flex justify-center py-3 transition-05`}
          style={{ opacity: isActive === 1 ? '100%' : '30%'}}
          onClick={() => setIsActive(1)}
        >
          <Grid1 size='28'/>
        </button>
        <button 
          className={`border-b-2 border-black w-full flex justify-center py-3 transition-05`}
          style={{ opacity: isActive === 2 ? '100%' : '30%'}}
          onClick={() => setIsActive(2)}
        >
          <VideoPlay size='28'/>
        </button>
        <button 
          className={`border-b-2 border-black w-full flex justify-center py-3 transition-05`}
          style={{ opacity: isActive === 3 ? '100%' : '30%'}}
          onClick={() => setIsActive(3)}
        >
          <Map size='28'/>
        </button>
      </div>
      <div className='grid grid-cols-3 gap-1'>
        {
          isActive === 1 && contentContext.state.feedContent.map((content, index) => 
            <img
              key={index}
              onClick={() => navigate(`/content`, { state: content})}
              src={`${REACT_APP_HOST}/assets${content.path}`}
              alt=""
              className='aspect-square object-cover'
            />
          )
        }
        {
          isActive === 3 &&
            <GoogleMap2 
              latitude={-7.001091144096097} 
              longitude={108.36652859774404}
            />
        }
      </div>
    </>
  )
}

export default ProfileContent