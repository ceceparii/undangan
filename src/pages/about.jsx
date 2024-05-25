import React from 'react'
import { HeaderComponent } from '../components/header.jsx'
import { Instagram, HierarchySquare3, Facebook } from 'iconsax-react'

const AboutPage = () => {
  return (
    <>
      <HeaderComponent name='Tentang' />
      <img 
        src="/assets/images/2149160037.jpg" 
        alt=""
        className='shadow aspect-square rounded-3xl w-40 my-7 mx-auto object-cover object-left'
      />
      <div className='p-3.5'>
        <div className="font-semibold text-2xl">Deskripsi</div>
        <p>
          Website ini terinspirasi dari Instagram. dibuat ulang oleh
          <span className="font-semibold"> Cecep ari</span>
        </p>
        <div className="font-semibold text-2xl mt-7 mb-3">Detail</div>
        <div> 
          <a href="https://www.instagram.com/cecepari_">
          <div className='flex gap-3.5 items-center'>
            <Instagram size='20'/>
            Instagram
          </div>
            https://www.instagram.com/cecepari_
          </a>
        </div>
        <div className='my-3.5'> 
          <a href="https://www.facebook.com/cecepari_">
          <div className='flex gap-3.5 items-center'>
            <Facebook size='20'/>
            Facebook
          </div>
            https://www.facebook.com/cecepari_
          </a>
        </div>
        <div className='my-3.5'> 
          <a href="https://www.github.com/cecepari_">
          <div className='flex gap-3.5 items-center'>
            <HierarchySquare3 size='20'/>
            Github
          </div>
            https://www.github.com/cecepari_
          </a>
        </div>
        
      </div>
    </>
  )
}

export default AboutPage