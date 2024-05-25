import React from 'react'
import { timeElipsed } from '../../utils/timeElipsed.js'

const BubleFragment = (props) => {
  const topLeft = props.top && 'rounded-tl-md'
  const bottomLeft = props.bottom && `rounded-bl-md`
  
  const topRight = props.top && 'rounded-tr-md'
  const bottomRight = props.bottom && `rounded-br-md`
  
  return (
    <>
      {!props.top &&
        <div className='text-center py-1 mt-7 opacity-50 text-sm'>
          {timeElipsed(props.time)}
        </div>
      }
      <div className={props.rtl && 'direction-rtl'}>
        <div className='flex gap-3.5 items-end w-3/4'>
          <img
            src="/assets/icons/blank.png"
            alt=""
            className={`${props.bottom && 'opacity-0'} w-10 rounded-50`}
          />
          <div className='w-5/6'>
            { !props.top &&
              <div className='text-sm font-semibold'>
                {props.guestname}
              </div>
            }
            <div className={`
              ${ props.rtl ? topRight : topLeft }
              ${ props.rtl ? bottomRight : bottomLeft }
              rounded-3xl bg-gray-200 py-2 px-3.5 w-max max-w-full text-wrap text-sm text-gray-700 mb-1
            `}>
              {props.text}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BubleFragment