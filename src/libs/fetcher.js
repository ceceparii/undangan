import { db, storage } from '../config/firebase.js'
import { getFirestore, collection, getDocs, query, where, doc, updateDoc, arrayUnion, arrayRemove, getDoc, addDoc } from 'firebase/firestore'
import { ref, getDownloadURL, listAll } from 'firebase/storage'

const firestore = getFirestore()

// Get data
export const getData = async (collectionId) => {
  let guest = []
  
  const data = await getDocs(collection(db, collectionId))
  data.forEach((doc) => {
    guest.push({ id: doc.id, ...doc.data() })
  })

  return guest
}

// Get comment
export const getComments = async (contentId) => {
  let contents = []
  
  const data = await getDocs(collection(db, 'feed'))
  data.forEach((doc) => {
    contents.push({ id: doc.id, ...doc.data()})
  })
  const [content] = contents.filter(content => content.id === contentId)
  return content.comments
}

// Find guest
export const findGuest = async (guestname) => {
  const queryData = await query(collection(db, 'guest'), where('guestname', '==', guestname))
  const snapshot = await getDocs(queryData)
  
  let guest = []
  snapshot.forEach((doc) => {
    guest.push({ id: doc.id, ...doc.data() })
  })
  
  return guest[0]
}

// send messages
export const sendMessages = async (formData) => {
  const docRef = await addDoc(collection(db, 'messages'), formData)
  if(docRef) {
    return docRef
  }
}

// send comment
export const sendComment = async (contentId, formData) => {
  const docRef = doc(firestore, 'feed', contentId)
  
  try {
    await updateDoc(docRef, {
      'comments': arrayUnion(formData)
    })
  } catch(err){
    console.error(err)
  }
}

// add/delete guestId to likes array document
export const likeContent = async (contentId, guestId) => {
  const docRef = doc(firestore, 'feed', contentId)
  
  try {
    const docSnapshot = await getDoc(docRef)
    if(docSnapshot.exists()) {
      const data = docSnapshot.data()
      const field = data['likes']
      if(field && Array.isArray(field) && field.includes(guestId)){
        await updateDoc(docRef, {
          'likes': arrayRemove(guestId)
        })
      } else {
        await updateDoc(docRef, {
          'likes': arrayUnion(guestId)
        })
      }
    }
  } catch(err) {
    console.log(err)
  }
}

// getmusic
export const getMusics = async () => {
  const musicRef = ref(storage, 'music')

  const data = await listAll(musicRef)
  const items = data.items.map(async (mp3) => {
    const url = await getDownloadURL(mp3)
    return {id: mp3.name, url}
  })
  
  return await Promise.all(items)
}