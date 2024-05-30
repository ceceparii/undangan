import React, { createContext, useContext, useReducer} from 'react'

const initialState = {
  feedContent: [],
  storyContent: [],
  chatMessage: [],
  musics: [],
  storyRemovedDuplicat: [],
  contentId: '',
  navigationBottom: false,
  openComment: false,
}


const removeDuplicatCategory = (array) => {
  const categories = new Set()
  return array.filter(item => {
    if(categories.has(item.category)) {
      return false
    } else {
      categories.add(item.category)
      return true
    }
  })
}


const reducer = (state, action) => {
  switch(action.type) {
    case 'FEED_CONTENT': {
      state.feedContent = action.payload
      return {
        ...state
      }
    }
    
    case 'STORY_CONTENT': {
      state.storyContent = action.payload
      state.storyRemovedDuplicat = removeDuplicatCategory(action.payload)
      return {
        ...state
      }
    }
    
    case 'CHAT_MESSAGE': {
      state.chatMessage = action.payload
      return {
        ...state
      }
    }
    
    case 'navigation_handler': {
      // Navigation display handler with comment input as handler
      state.navigationBottom = action.payload
      return {
        ...state,
      }
    }
    
    case 'MUSICS': {
      state.musics = action.payload
      return {
        ...state
      }
    }
    
    default: {
      return state
    }
  }
}

const CreateContentProvider = createContext()

export const ContentContext = () => {
  return useContext(CreateContentProvider)
}

export default function ContentProvider({children}){
  const [ state, dispatch ] = useReducer(reducer, initialState)
  
  return (
    <CreateContentProvider.Provider value={{state, dispatch}}>
      {children}
    </CreateContentProvider.Provider>
  )
}