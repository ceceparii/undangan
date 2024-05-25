export const scrollNext = (ref) => {
  const container = ref.current;
  if (!container) return;
  
  const childWidth = container.firstChild.offsetWidth + 10; // width + margin-right
  container.scrollBy({ left: childWidth });
};

export const scrollPreveous = (ref) => {
  const container = ref.current;
  if (!container) return;
  
  const childWidth = container.firstChild.offsetWidth + 10; // width + margin-right
  container.scrollBy({ left: -childWidth });
};

export const touchStart = (event, ref) => {
  const touchStart = Math.floor(event.touches[0].clientX)
  if(touchStart > window.innerWidth / 2) {
    scrollNext(ref)
  } else {
    scrollPreveous(ref)
  }
}

export const touchEnd = (event) => {
  const touchEnd = Math.floor(event.changedTouches[0].clientX)
  //const touchStart = Math.floor(event.touches[0].clientX)

  return touchEnd
}