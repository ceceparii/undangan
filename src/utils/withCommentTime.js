import React from 'react'

export const withCommentTime = (OriginalComponent) => {
  const WithTimeComment = (props) => {
      let times = new Date().getTime() - props.time
      
      let seconds = Math.floor(times / 1000)
      let minutes = Math.floor(times / (1000 * 60))
      let hours = Math.floor(times /  (1000 * 60 * 60))
      let days = Math.floor(times / (1000 * 60 * 60 * 24))
      let week = Math.floor(times / (1000 * 60 * 60 * 24 * 7))
      
      let elapsedTimes
      if(seconds < 60) elapsedTimes = seconds + ' detik'
      else {
        if(minutes < 60) elapsedTimes = minutes + ' menit'
        else {
          if(hours < 24) elapsedTimes = hours + ' jam'
          else {
            if(days < 7) elapsedTimes = days + ' hari'
            else {
              elapsedTimes = week + 'minggu'
            }
          }
        }
      }
      
    return <OriginalComponent {...props} elapsedTimes={elapsedTimes}/>
  }
  
  return WithTimeComment
}