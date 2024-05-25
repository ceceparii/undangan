import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentContext } from '../../context/contentProvider.js'
import { AddCircle } from 'iconsax-react'

const { REACT_APP_HOST } = process.env
// Sorotan Component
export const StoryComponent = (props) => {
  const navigate = useNavigate()
  const [ isOpen, setIsOpen ] = useState(props.gradient)
  const { state } = ContentContext()

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
            onClick={() => navigate(`/story/${content.category}`)}
            key={index}
          >
            <div className={isOpen ? 'border-gradient' : 'border-1-black rounded-50'}>
              <img 
                src={`${REACT_APP_HOST}/assets/${content.path}`}
                alt=''
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