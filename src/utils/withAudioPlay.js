import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import{  VolumeHigh, VolumeSlash } from 'iconsax-react'
const { REACT_APP_HOST } = process.env

const withAudioPlay = (OriginalComponent) => {
  const WithAudioPlay = (props) => {
    const audioRef = useRef(null)
    const contentRef = useRef(null)
    
    const audioHandler = () => {
      if(props.musicpath) {
        if(props.playId === props._id) {
          audioRef.current.pause()
          props.setPlayId(null)
        } else {
          props.setPlayId(props._id)
        }
      }
    }
    
    useEffect(() => {
      if(props.musicpath) {
        if(props.playId === props._id) {
          audioRef.current.play()
        } else {
          audioRef.current.pause()
        }
      }
    }, [props.playId])
    
    return (
      <div className='w-full h-fit relative' ref={contentRef}>
        <OriginalComponent {...props} />
        { props.musicpath &&
          <>
            <audio
              ref={audioRef}
              src={`${REACT_APP_HOST}/assets/music/${props.musicpath}`}
            />
            <div 
              className="absolute right-5 bottom-5 text-white rounded-50 bg-black-50 p-1.5"
              onClick={audioHandler}
            >
              { 
                props.playId === props._id ? 
                <VolumeHigh size='14' variant='Bold'/> 
                : <VolumeSlash size='14' variant='Bold'/>
              }
            </div>
          </>
        }
      </div>
    )
  }
  
  return WithAudioPlay
}

export default withAudioPlay