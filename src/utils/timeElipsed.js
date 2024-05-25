const daysName = [
    '', 'Sen', 'Sel', 'Rab', 'Kam', `Jum`, 'Sab', 'Ming'
  ]

const monthName = [
    ' ', 'Jan', 'Feb', 'Mar', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ]

export const timeElipsed = (time) => {
  let currentTimes = new Date()
  let times = currentTimes.getTime() - time
  let fulltime = new Date(time)

  let minute = fulltime.getMinutes()
  let hour = fulltime.getHours()
  let day = fulltime.getDay()
  let date = fulltime.getDate()
  let month = fulltime.getMonth()
  let year = fulltime.getFullYear()
  
  let seconds = Math.floor(times / 1000)
  let minutes = Math.floor(times / (1000 * 60))
  let hours = Math.floor(times /  (1000 * 60 * 60))
  let days = Math.floor(times / (1000 * 60 * 60 * 24))

  let elapsedTimes
  if(seconds < 60) elapsedTimes = `${seconds} Detik`
  else {
    if(minutes < 60) elapsedTimes = `${minutes} Menit`
    else {
      if(hours < 12 && date === currentTimes.getDate()) elapsedTimes = `${hours} Jam`
      else {
        if(date === currentTimes.getDate()) elapsedTimes = `${hour}:${minute}`
        else {
          if(days < 7) elapsedTimes = `${daysName[day]} ${hour}:${minute}`
          else {
            if(days < 28) elapsedTimes = `${date} ${hour}:${minute}`
            else {
              elapsedTimes = `${date} ${monthName[month]} ${year}`
            }
          }
        }
      }
    }
  }

  return elapsedTimes
}