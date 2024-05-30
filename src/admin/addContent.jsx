import React, { useState } from 'react'
import { storage, db } from '../config/firebase.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { ContentContext } from '../context/contentProvider.js'

// Add content
const InputContent = ({ header, folder }) => {
  const [ file, setFile ] = useState({})
  const [ description, setDescription ] = useState('')
  const [ category, setCategory ] = useState('')
  const [musicFile, setMusicFile] = useState({ musicTitle: '', musicUrl: ''});
  
  const { state } = ContentContext()
  
  const changeHandler = (e) => {
    const { files } = e.target
    setFile(files[0])
  }
  
  const musicChange = (e) => {
    const { options, value } = e.target
    const selectedIndex = options.selectedIndex
    const musicTitle = options[selectedIndex].text
    
    setMusicFile({
      musicTitle,
      musicUrl: value
    })
  }
  
  const submitHandler = async (e) => {
    e.preventDefault()
    
    try {
      const storageRef = ref(storage, `images/${folder}/${file.name}`)
      uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
        .then((url) => {
          addDoc(collection(db, folder), {
            image_url: url,
            description: description,
            category,
            musicTitle: musicFile.musicTitle,
            musicUrl: musicFile.musicUrl,
            likes: [],
            comments: [],
          })
          .then(() => {
            setFile({})
            setDescription('')
          })
          .catch((err) => console.error(err))
        })
      })
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <form className='m-3.5 p-3.5 rounded-2xl shadow' onSubmit={submitHandler}>
      <div className='text-center font-semibold my-3.5'>{header}</div>
      <input
        type="file"
        value={file.originalname}
        onChange={changeHandler}
        className='my-3.5'
      />
      <div>
        { folder === 'story' ?
          <select
            className='px-3.5 py-1.5 my-3.5'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">PILIH KATEGORI</option>
            <option value="ceceparii_">CECEP ARI</option>
            <option value="rose.are.rose01">ROSMAYANTI</option>
            <option value="nagitaslavina1717">NAGITA</option>
          </select>
          :
          <select
            className='px-3.5 py-1.5 my-3.5'
            value={musicFile.musicUrl}
            onChange={musicChange}
          >
            <option value="">PILIH KATEGORI</option>
            { state.musics.length > 0 && state.musics.map((music, index) => 
                <option value={music.url} key={index}>
                  {music.id}
                </option>
              )
            }
          </select>
        }
      </div>
      <textarea 
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='w-full my-3.5 border rounded-lg min-h-20'
      />
      <button type='submit' className='p-2.5 px-4 bg-blue-400 rounded-xl text-white'>
        P O S T
      </button>
    </form>
  )
}

const AddContent = () => {
  return (
    <>
      <InputContent header='ADD CONTENT FEED' folder='feed'/>
      <InputContent header='ADD CONTENT STORY' folder='story'/>
    </>
  )
}

export default AddContent