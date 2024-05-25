import React, { useRef } from 'react'
import { touchStart } from '../../utils/scrollSmooth.js'
import { useParams } from 'react-router-dom'
import { ContentContext } from '../../context/contentProvider.js'
import { Heart, Send2 } from 'iconsax-react'
import { HeaderSorotan } from '../../components/header.jsx'

const { REACT_APP_HOST } = process.env

const OpenStory = () => {
  const containerRef = useRef(null)
  const { category } = useParams()
  const { state } = ContentContext()
  
  const filteredByCategory = state.storyContent.filter(content => content.category === category)
  
  return (
    <div className="bg-black" style={{ height: window.innerHeight}}>
      <div className='relative pt-10'>
        <HeaderSorotan name={category}/>
        <div
          style={{ 
            justifyContent: 'flex-start',
            scrollSnapType: 'x mandatory',
            height: window.innerHeight - 160
          }}
          ref={containerRef}
          onTouchStart={(e) => touchStart(e, containerRef)}
          className='flex overflow-hidden  hide-scrollbar rounded-2xl'
        >
          { 
            filteredByCategory.map((content, index) =>
              <div
                key={index}
                style={{
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start'
                }}
                className='w-full h-full'
              >
                <img
                  src={`${REACT_APP_HOST}/assets/${content.path}`}
                  alt=''
                  className='object-cover h-full w-full object-center'
                />
              </div>
            )
          }
        </div>
      </div>
      <div className='p-3.5 text-white flex gap-3.5 items-center'>
        <input 
          type="text"
          placeholder='Tulis pesan ...'
          className='w-full bg-transparent p-3 px-4 border-1 rounded-3xl'
        />
        <Heart size='38' />
        <Send2 size='38' />
      </div>
    </div>
  )
}


export default OpenStory