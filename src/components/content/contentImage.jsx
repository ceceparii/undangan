import React, { useRef, useEffect, useState } from 'react'
import{  VolumeHigh, VolumeSlash } from 'iconsax-react'

const ContentImage = (props) => {
  const audioRef = useRef(null)
  const contentRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true);

  // audio handler
  const audioHandler = () => {
    if (props.content.musicUrl) {
      if (props.playId === props.content.id) {
        audioRef.current.pause()
        props.setPlayId(null)
      } else {
        props.setPlayId(props.content.id)
      }
    }
  }
  
  useEffect(() => {
    if (props.content.musicUrl) {
      if (props.playId === props.content.id) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [props.playId, props.content.musicUrl, props.content.id])
  
  const loadingHandler = (e) => {
    setIsLoading(false)
  }
  
  return (
    <div className='w-full h-fit relative' ref={contentRef}>
      {
        isLoading &&
        <div 
          className='w-full bg-gray-100 opacity-40'
          style={{ height: '720px' }}
        />
      }
      <img 
        src={props.content.image_url} 
        alt=""
        loading='lazy'
        className='w-full'
        onLoad={loadingHandler}
      />
      {props.content.musicUrl && (
        <>
          <audio
            ref={audioRef}
            src={props.content.musicUrl}
          />
          <div
            className='absolute z-10 right-5 bottom-5 text-white rounded-50 bg-black-50 p-1.5'
            onClick={audioHandler}
          >
            {props.playId === props.content.id ? (
              <VolumeHigh size='14' variant='Bold' />
            ) : (
              <VolumeSlash size='14' variant='Bold' />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default ContentImage