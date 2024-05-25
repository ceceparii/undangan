import { useEffect } from 'react'

export const scrollToElement = (targetId) => {

  if (targetId) {
    const element = document.getElementById(targetId);
    console.log(targetId)
    console.log(element)
    console.log('--------')
    if (element) {
      element.scrollIntoView({ block: 'start', inline: 'start'});
    }
  }

};

//export default ScrollToElement