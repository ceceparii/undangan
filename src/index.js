import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/router.js'
import ContentProvider, { ContentContext } from './context/contentProvider.js'
import { getData, getMusics } from './libs/fetcher.js'

const App = () => {
  const { dispatch } = ContentContext()

  useEffect(() => {
    // get feed content
    getData('feed')
    .then((data) => {
      dispatch({ type: 'FEED_CONTENT', payload: data })
    })
    // get story content
    getData('story')
    .then((data) => {
      dispatch({ type: 'STORY_CONTENT', payload: data })
    })
    // get music
    getMusics()
    .then((data) => {
      dispatch({ type: 'MUSICS', payload: data })
    })
  },[dispatch])
  return (<AppRouter />)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ContentProvider>
    <App />
  </ContentProvider>
)