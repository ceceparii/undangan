import React from 'react'
import { Happyemoji } from 'iconsax-react'

export const ProfilePictureFragment = ({ hideUsername }) => {
  return (
    <div className='flex gap-5 items-center'>
      <img
        className='w-10 rounded-50'
        src="/assets/icons/blank.png"
        alt=""
      />
      { !hideUsername &&
        <div>ceceparii_</div>
      }
    </div>
  )
}

export const Loading = () => {
  
  return (
    <div
      style={{}}
      className='w-full h-full flex items-center justify-center flex flex-col gap-3.5 opacity-50 text-sm'
    >
      <Happyemoji
        size='32'
        className='rotate-animation'
      />
      Memuat
    </div>  
  )
}