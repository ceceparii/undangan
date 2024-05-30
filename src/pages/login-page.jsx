import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DirectboxNotif } from 'iconsax-react'
import Cookies from 'js-cookie'
import { findGuest } from '../libs/fetcher.js'

const LoginPage = () => {
  const { tamu } = useParams()
  const [isClick, setIsClick] = useState(false);
  const namaLengkapTamu = decodeURIComponent(tamu)
  const navigate = useNavigate()
  
  // Click login handler
  const clickHandler = async () => {
    setIsClick(true)
    // find guest
    await findGuest(tamu)
    .then((data) => {
      if(data) {
        Cookies.set('guest', JSON.stringify(data))
        const guestCookie = JSON.parse(Cookies.get('guest'))
        if(guestCookie) {
          navigate('/')
        }
      }
    })
    setIsClick(false)
  }
  
  return (
    <>
      <div
        className='absolute top-1/2 left-1/2 text-center'
        style={{ transform: 'translate(-50%, -60%)', minHeight: '320px', width: '90%' }}
      > 
        <div 
          className='w-40 gradient-color p-1 mx-auto mb-3.5'
          style={{ borderRadius: '50%' }}
        >
          <img 
            style={{ borderRadius: '50%', border: '4px solid #fff' }}
            className='aspect-square object-cover object-center w-full'
            src="/assets/images/1712972018509.jpg"
            alt=""
          />
        </div>
        <div className='rounded-2xl p-3.5 shadow'>
          <div className='font-semibold my-3.5 text-center' style={{ letterSpacing: '2px'}}>
            THE WEDDING OF
          </div>
          <div className='text-center my-3.5'>
            <div className='font-monsieur text-5xl'>Cecep Ari N</div>
            <div className='font-monsieur text-5xl'>&</div>
            <div className='font-monsieur text-5xl'>Rosmayanti</div>
          </div>
          <div className='my-3.5'>Assalamualaikum wr.wb</div>
          <div className='mb-3.5'>
            Hai <span className='font-semibold'>{namaLengkapTamu}</span>.
          </div>
          <div>Kami mengundang anda untuk menghadiri acara pernikahan kami.</div>
          <button 
            className='flex gap-3.5 bg-blue-400 text-white px-3.5 py-2.5 rounded-xl m-auto my-7 items-center'
            style={{ opacity: isClick ? '40%' : '100%'}}
            onClick={clickHandler}
            disabled={isClick}
          >
            <DirectboxNotif size='18'/>
            Buka undangan
          </button>
        </div>
      </div>
      <div 
        className="fixed bottom-2.5 left-1/2 w-max text-xs"
        style={{ transform: 'translateX(-50%'}}
      >
        Inspired by 
        <span className='text-xs font-semibold'> Instagram </span>
        build by
        <span className='text-xs font-semibold'> Cecep Ari </span>
      </div>
    </>
  )
}

export default LoginPage