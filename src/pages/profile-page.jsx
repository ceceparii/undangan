import React from 'react'
import { ArrowDown2, Heart } from 'iconsax-react'
import { HeaderProfile } from '../components/header.jsx'
import { TombolMengikuti } from '../fragments/buttonFragment.jsx'
import { StoryComponent } from '../components/storyContent/storyComponent.jsx'
import ProfileContent from '../components/profileContent.jsx'
import { ContentContext } from '../context/contentProvider.js'
import Navigation from '../components/navigation.jsx'

const ProfilePage = () => {
  const { state } = ContentContext()
  
  return (
    <div className='pb-28 w-full'>
      <HeaderProfile />
      <div className='flex gap-3.5 px-3.5 mt-3.5'>
        <img
          src='/assets/icons/blank.png'
          alt=''
          className='w-20 aspect-square rounded-50 object-cover'
        />
        <div className='flex justify-around w-full text-center text-sm items-center'>
          <div>
            <div className='font-semibold line-95'>10</div>
            Postingan
          </div>
          <div>
            <div className='font-semibold line-95'>23K</div>
            Pengikut
          </div>
          <div>
            <div className='font-semibold line-95'>1</div>
            Mengikuti
          </div>
        </div>
      </div>
      <div className='pl-3.5'>Cecep Ari .N & Rosmayanti</div>
      <div className='text-blue-800 pl-3.5 line-95'>Kedua mempelai</div>
      <p className='m-3.5'>Assalamualaikum wr.wb</p>
      <p></p>
      <table className='mx-3.5'>
        <tbody>
          <tr className='line-95'>
            <td className='pr-2.5'>Resepsi</td>
            <td>: 11-12, Januari 2024</td>
          </tr>
          <tr className='line-95'>
            <td>Akad</td>
            <td>: 13, Januari 2024</td>
          </tr>
          <tr className=''>
            <td>Lokasi</td>
            <td>
              : Jagasari kaler, Ds.Jagasari, Kec.Cikijing
            </td>
          </tr>
        </tbody>
      </table>
      <div className='mx-3.5 my-5'>
        Diikuti oleh
        <span className='font-semibold px-2 text-sm'>
          nagitaslavina1717
        </span>
      </div>
      <div className='flex overflow-scroll gap-7 p-3.5 hide-scrollbar'>
        <StoryComponent
          name={<Heart size='16' className='text-red-600 m-auto my-2' variant='Bold'/>}
          style={{ flex: '0 0 70px', width: '70px'}}
        />
      </div>
      <ButtonProfilePage />
      <ProfileContent />
      <Navigation />
    </div>
  )
}

// Button profile page
const ButtonProfilePage = () => {
  
  return (
    <div className='m-3.5 flex justify-between gap-1.5'>
      <TombolMengikuti>
        Mengikuti <ArrowDown2 size='18'/>
      </TombolMengikuti>  
      <TombolMengikuti>
        Kirim Pesan
      </TombolMengikuti>  
      <TombolMengikuti>
        Kontak
      </TombolMengikuti>
      <TombolMengikuti style={{width: 'max-content'}}>
        <ArrowDown2 size='18' />
      </TombolMengikuti>
    </div>
  )
}

export default ProfilePage
