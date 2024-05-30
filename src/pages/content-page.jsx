import React from 'react'
import { useLocation } from 'react-router-dom'
import { HeaderComponent } from '../components/header.jsx'
import Navigation from '../components/navigation.jsx'
import ContentList from '../components/content/contentList.jsx'

const ContentPage = () => {
  const { state } = useLocation()

  return (
    <>
      <HeaderComponent name='Postingan' />
      <ContentList targetId={state.id} />
      <Navigation />
    </>
  )
}

export default ContentPage