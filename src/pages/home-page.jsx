import React, { Suspense, useEffect } from 'react'
import { HeaderHomePage } from '../components/header.jsx'
import { StoryComponent } from '../components/storyContent/storyComponent.jsx'
import Navigation from '../components/navigation.jsx'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'
import { Loading } from '../fragments/fragmentComponent.jsx'

const ContentList = React.lazy(() => import('../components/content/contentList.jsx'))
// Home Page
const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const getCookies = Cookies.get('guest')
    if(!getCookies){
      navigate('/undangan-untuk/publik')
    }
  }, [navigate]);
  
  return (
    <>
      <HeaderHomePage />
      <div className='flex gap-3.5 overflow-auto items-center p-3.5 hide-scrollbar'>
      <Suspense fallback={Loading}>
        <StoryComponent
          addStory={true}
          gradient={true}
          style={{ flex: '0 0 85px', width: '80px' }}
        />
      </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <ContentList />
      </Suspense>
      <Navigation />
    </>
  )
}

export default HomePage