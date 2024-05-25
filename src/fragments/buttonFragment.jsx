import React from 'react'

export const TombolMengikuti = ({children, onClick, style}) => {
  return (
    <button
      onClick={onClick}
      className='text-sm w-full px-3 justify-center flex gap-2 items-center py-2 rounded-lg bg-gray-200'
      style={style}
    >
      {children}
    </button>
  )
}