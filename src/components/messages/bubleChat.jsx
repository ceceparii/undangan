import React, { useState, useEffect } from 'react'
import BubleFragment from './bubleFragment.jsx'

// Chat Buble
const BubleChat = (props) => {
  const [ topMessage, setTopMessage ] = useState(false)
  const [ botMessage, setBotMesaage ] = useState(false)
  const [ underMinutes, setUnderMinutes ] = useState(false)
  const { messages, index } = props

  useEffect(() => {
    // chat before validation
    if(messages[index - 1]) {
      const underMinutesTime = props.time - messages[index - 1].time
      const underMinutes = Math.floor(underMinutesTime / 1000)
      if(messages[index - 1].guestId === props.guestId) {
        if(underMinutes < 60) {
          setUnderMinutes(true)
          setTopMessage(true)
        }
      }
    }
    
    // chat after validator
    if(messages[index + 1]) {
      const underMinutesTime = messages[index + 1].time - props.time
      const underMinutes = Math.floor(underMinutesTime / 1000)
      if(messages[index + 1].guestId === props.guestId) {
        if(underMinutes < 60) {
          setBotMesaage(true)
        }
      }
    }
    
  }, [index, messages, props.time, props.guestId])
  
  // If chat before or after have same user and times under 60s will merged and rounded
  if(props.rtl) {
    return (
      <BubleFragment
        {...props}
        underMinutes={underMinutes}
        top={topMessage}
        bottom={botMessage}
      />
    )
  } else {
    return (
      <BubleFragment
        {...props}
        underMinutes={underMinutes}
        top={topMessage}
        bottom={botMessage}
      />
    )
  }
}

export default BubleChat