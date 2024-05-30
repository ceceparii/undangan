import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentContext } from '../../context/contentProvider.js'
import { AddCircle } from 'iconsax-react'
import Cookies from 'js-cookie'

// Sorotan Component
export const StoryComponent = (props) => {
  const navigate = useNavigate()
  const { state } = ContentContext()
  const [onLoad, setOnload] = useState(true);
  
  const cookies = Cookies.get('story')
  const storyCookies = cookies ? JSON.parse(cookies) : []
  
  const clickHandler = (category) => {
    storyCookies.push(category)
    
    Cookies.set('story', JSON.stringify(storyCookies))
    navigate(`/story/${category}`)
  }

  return (
    <>
      { props.addStory &&
        <div 
          className='text-center relative'
          style={props.style}
        > 
          <img 
            src='/assets/icons/blank.png'
            alt=''
            className='rounded-50 aspect-square p-1 object-cover border-1-black'
          />
          <span className='text-sm opacity-70'>Cerita anda</span>
          <AddCircle 
            className='text-blue-600 absolute right-0 bottom-6 bg-white rounded-50'
            size='24'
            variant='Bold'
          />
        </div>
      }
      { state.storyRemovedDuplicat.map((content, index) => 
          <div 
            className='text-sm text-center w-max flex flex-col items-center'
            style={props.style}
            onClick={() => clickHandler(content.category)}
            key={index}
          >
            <div className={!storyCookies.includes(content.category) && props.gradient ? 'border-gradient' : 'border-1-black rounded-50'}>
              { onLoad && 
                <div 
                  className='rounded-50 aspect-square bg-gray-100 p-1 m-1'
                  style={{ width: '74px'}}
                  />
              }
              <img 
                onLoad={() => setOnload(false)}
                src={content.image_url}
                alt=''
                style={{ display: onLoad ? 'none' : 'block' }}
                className='rounded-50 aspect-square  object-cover border-gradient'
              />
            </div>
            { content.name || content.category }
          </div>
        )
      }
    </>
  )
}