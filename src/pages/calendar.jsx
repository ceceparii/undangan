import React from 'react'
import { HeaderComponent } from '../components/header.jsx'
import { GoogleMap } from '../components/embedComponent.jsx'
import { Location } from 'iconsax-react'
import Navigation from '../components/navigation.jsx'

const Calendar = () => {
  const targetTime = new Date('Juny 10, 2024 00:00:00').getTime()
  const currentTime = new Date().getTime()
  
  const countdown = targetTime - currentTime
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
  const month = Math.floor(days / 30)
  const hours = Math.floor(countdown % (1000 * 60 * 60 *24) / (1000 * 60 * 60))
  
  return (
    <div>
      <HeaderComponent name='Kalender' />
      <div className='font-semibold text-2xl text-center'>AKAD NIKAH</div>
      <div className="text-center shadow m-3.5 p-3.5 rounded-2xl">
        <div className='flex gap-1.5 justify-center'>
          <div className='text-7xl font-semibold'>
            {month} <span className='-ml-5 opacity-60'> bulan</span>
          </div>
          <div className='text-7xl font-semibold'>
            {days} <span className='-ml-5 opacity-60'> hari</span>
          </div>
          <div className='text-7xl font-semibold'>
            {hours} <span className='-ml-5 opacity-60'> jam</span>
          </div>
        </div>
        <div>Desember 10, 2024</div>
      </div>
      <div className='m-3.5'>
        <GoogleMap 
          latitude={-7.001091144096097} 
          longitude={108.36652859774404}
          style={{ width: '100%', height: '320px', borderRadius: '16px'}}
        />
      </div>
      <div className='m-3.5 p-2.5 shadow rounded-2xl'>
        <div className='flex gap-3.5 items-center mb-1.5'>
          <Location size='24' />
          <div className='font-semibold'>Detail lokasi</div>
        </div>
        <p className='my-1.5'>Desa Jagasari, Kecamatan Cikijing, Kabupaten Majalengka</p>
        <p>RT 001/RW 004, Blok kaler (Dekat Masjid Jagasari kaler)</p>
      </div>
      <Navigation />
    </div>
  )
}

export default Calendar