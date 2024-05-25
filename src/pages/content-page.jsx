import React from 'react'
import { useLocation } from 'react-router-dom'
import { HeaderComponent } from '../components/header.jsx'
import ContentCard from '../components/contentCard.jsx'
import { ContentContext } from '../context/contentProvider.js'
import Navigation from '../components/navigation.jsx'
import ContentList from '../components/contentList.jsx'

const ContentPage = () => {
  const { state } = useLocation()
  const contentContext = ContentContext()
  
  return (
    <>
      <HeaderComponent name='Postingan' />
      <ContentList targetId={state._id} />
      <Navigation />
    </>
  )
}

export default ContentPage