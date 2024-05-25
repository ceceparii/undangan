import React from 'react'
import { Heart, Messenger, ArrowLeft, Copy } from 'iconsax-react'
import { Navigate } from '../utils/navigate.js'
import Navigation from '../components/navigation.jsx'

const PaymentCard = ({logo, rekening, name}) => {
  const [ isCopy, setIsCopy ] = React.useState(false)
  
  const copyHandler = () => {
    if(navigator.clipboard) {
      navigator.clipboard.writeText(rekening)
        .then(() => {
          setIsCopy(true)
        })
        .catch((err) => console.error(err))
    }
  }
  
  return (
    <div className='m-3.5 mb-7 shadow rounded-2xl p-3.5 flex justify-between'>
      <div>
      <img src={logo} alt="" className='w-24 pb-3.5'/>
        <div className='font-semibold'>{rekening}</div>
        <div className='text-sm'>{name}</div>
      </div>
      <button 
        className='flex items-center gap-2.5 shadow p-3.5 rounded-lg h-max'
        onClick={copyHandler}
        disabled={isCopy}
      >
        <Copy size='18'/>
        Copy
      </button>
    </div>
  )
}

const TransferPage = () => {
  return (
    <div>
      <header className='p-3.5 flex justify-between'>
        <div className='flex gap-3.5 items-center text-xl'>
          <Navigate path={-1}>
            <ArrowLeft size='26' />
          </Navigate>
          <div className='text-xl'>Kirim Hadiah</div>
        </div>
        <div className='flex gap-5'>
          <Heart size='26' />
          <Messenger size='26' className=''/>
        </div>
      </header>
      <div className='m-3.5 mb-10 text-center'>
        <header className='font-extrabold text-2xl my-3.5'>Dompet Digital</header>
        <p className='opacity-70'>
          Cara teman - teman untuk mengirimkan hadiah menggunakan dompet digital.
        </p>
      </div>
      <PaymentCard
        logo='/assets/icons/1280px-BNI_logo.svg.png'
        name='Cecep Ari Nuraeni'
        rekening='08626272818'
      />
      <PaymentCard
        logo='/assets/icons/Logo_dana_blue.svg.png'
        name='Cecep Ari Nuraeni'
        rekening='08626272818'
      />
      <Navigation />
    </div>
  )
}

export default TransferPage