import React from 'react'
import { Navigate } from '../utils/navigate.js'
import { 
  ArrowLeft,
  Send2,
  More,
  Heart,
  Messenger,
  Call,
  Video,
  Tag,
  InfoCircle
} from 'iconsax-react'

const { username } = JSON.parse(localStorage.getItem('guest'))

export const HeaderProfile = () => {
  
  return (
    <header className='p-3.5 flex justify-between'>
      <div className='flex gap-5 items-center text-xl'>
        <Navigate path={-1}>
          <ArrowLeft size='28' />
        </Navigate>
        { username }
      </div>
      <div className='flex gap-5'>
        <Send2 size='26' />
        <Navigate path='/about'>
          <InfoCircle size='26'/>
        </Navigate>
      </div>
    </header>
  )
}

export const HeaderHomePage = () => {
  
  return (
    <header className='p-3.5 flex justify-between top-0 left-0 w-full bg-white z-10'>
      <div className='font-billabong text-4xl'>Undangan</div>
      <div className='flex gap-5 items-center'>
        <Heart size='26' />
        <Navigate path='/messages'>
          <Messenger size='26' className=''/>
        </Navigate>
      </div>
    </header>
  )
}

export const HeaderConversation = () => {
  return (
    <header className='p-3.5 flex items-center justify-between gap-3.5 bg-white'>
        <div className='flex items-center gap-3.5'>
          <Navigate path={-1}>
            <ArrowLeft size='28' />
          </Navigate>
          <div className='flex gap-3.5 items-center'>
            <img src="/assets/icons/blank.png" alt="" className='w-10 rounded-50'/>
            <div>
              <div>{ username === 'cecepari_' ? 'Cecep Ari' : 'Rosmayanti'}</div>
              <div className='text-sm opacity-50'>{ username }</div>
            </div>
          </div>
        </div>
        <div className='flex gap-3.5 items-center'>
          <Call />
          <Video />
          <Tag />
        </div>
      </header>
  )
}

export const HeaderSorotan = ({ name }) => {
  return (
    <header className='text-white flex justify-between items-center p-3.5 absolute top-10 left-0 w-full'>
      <div className='flex gap-5 items-center'>
        <img src='/assets/icons/blank.png' alt='' className='icon-photo'/>
        <span>{ name }</span>
      </div>
      <More size='20' className='rotate-90'/>
    </header>
  )
}

export const HeaderComponent = ({ name }) => {
  return (
    <header className='flex justify-between items-center p-3.5 w-full'>
      <div className='flex gap-5 items-center text-xl'>
        <Navigate path={-1}>
          <ArrowLeft size='28' />
        </Navigate>
        { name }
      </div>
    </header>
  )
}

export const ContentHeader = ({ musictitle }) => {
  const PhotoProfile = ({ path, className }) => {
    return (
      <img
        className={`${className} w-8 rounded-50`}
        src="/assets/icons/blank.png"
        alt=""
      />
    )
  }
  return (
    <div className='flex justify-between items-center p-3.5 mb-2'>
      <div className='flex gap-5 items-center'>
        <div className='relative w-12'>
          <PhotoProfile 
            className='absolute -bottom-2 right-0'
          />
          <PhotoProfile 
            className='absolute -top-2 right-4'
          />
        </div>
        <span className=''>
          cecepari_ dan rose.are.rose01
          <div className='text-xs font-light mt-1.5 text-black'>
            {musictitle && `🎵 ${musictitle}`}
          </div>
        </span>
      </div>
      <More size='20' className='rotate-90'/>
    </div>
  )
}