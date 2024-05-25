import React, { Suspense } from 'react'
import { HeaderHomePage } from '../components/header.jsx'
import { StoryComponent } from '../components/storyContent/storyComponent.jsx'
import { ContentContext } from '../context/contentProvider.js'
import Navigation from '../components/navigation.jsx'

import { Loading } from '../fragments/fragmentComponent.jsx'

const ContentList = React.lazy(() => import('../components/contentList.jsx'))
// Home Page
const HomePage = () => {
  const { state } = ContentContext()

  return (
    <>
      <HeaderHomePage />
      <div className='flex gap-3.5 overflow-auto items-center p-3.5 hide-scrollbar'>
      <Suspense fallback={Loading}>
        <StoryComponent
          addStory={true}
          gradient={false}
          style={{ flex: '0 0 82px', width: '70px' }}
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