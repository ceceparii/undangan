import React from 'react'

export const GoogleMap2 = ({ latitude, longitude, className }) => {
  const { REACT_APP_GOOGLE_API } = process.env
  
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/view?key=${REACT_APP_GOOGLE_API}&center=${latitude},${longitude}&zoom=15`}
      frameBorder="0"
      className={`${className} w-full h-full aspect-square`}
      loading='lazy'
      title='Map Location'
    />
  )
}

export const GoogleMap = ({ latitude, longitude, style }) => {
  const mapRef = React.useRef(null)
  
  React.useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 15
    })
    
    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: 'Lokasi acara'
    })
    
  }, [latitude, longitude])
  
  return (
    <div
      ref={mapRef}
      style={style}
    >
    </div>
  )
}