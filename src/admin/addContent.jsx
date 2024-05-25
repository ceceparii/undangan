import React, { useState } from 'react'
import axios from 'axios'

// Add content
const AddContent = ({ path, header, content }) => {
  const [ file, setFile ] = useState({})
  const [ description, setDescription ] = useState('')
  const [ category, setCategory ] = useState('')
  
  const changeHandler = (e) => {
    const { files } = e.target
    setFile(files[0])
  }
  
  const submitHandler = async (e) => {
    e.preventDefault()
    
    const formData = new FormData()
    
    formData.append('file', file)
    formData.append('description', description)
    formData.append('category', category)
    
    const { data } = await axios.post(path, formData, {
      headers: {
        'Content-Type': 'multipart/jpeg'
      },
      withCredentials: true
    })
    
    if(data.success) {
      setFile({})
      setDescription('')
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
        { content === 'story' &&
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


export default AddContent