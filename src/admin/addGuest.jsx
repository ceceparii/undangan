import React, { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase.js'
import { getData } from '../libs/fetcher.js'

const AddGuest = () => {
  const [guest, setGuest] = useState('')
  const [username, setUsername] = useState('');
  const [allGuest, setAllGuest] = useState([])
  
  useEffect(() => {
    getData('guest')
    .then(data => setAllGuest(data))
  }, [guest])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if(username) {
        const docRef = await addDoc(collection(db, 'guest'), {
          guestname: guest,
          username,
        })
        if(docRef) {
          setGuest('')
          console.log(docRef)
        }
      }
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className='m-3.5 p-3.5 rounded-2xl shadow'>
        <div className='text-center font-semibold my-3.5'>
          TAMBAH TAMU UNDANGAN
        </div>
        <div className="my-3 5">
          <select 
            className='py-2 px-3.5 rounded-md'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            <option value="">
              username
            </option>
            <option value="cecepari_">
              cecepari
            </option>
            <option value="rose.are.rose01">
              rosmayanti
            </option>
          </select>
        </div>
        <div className='flex gap-3.5'>
          <input
            type='text'
            value={guest}
            className='p-2 border rounded-xl w-full'
            onChange={(e) => setGuest(e.target.value)}
          />
          <button
            onClick={submitHandler}
            className='p-2.5 px-4 bg-blue-400 rounded-xl text-white'
          >
            TAMBAH
          </button>
        </div>
      </div>
      
      <div className='w-full m-3.5 p-3.5 shadow rounded-xl'>
        <header className='font-semibold text-center'>
          UNDANGAN
        </header>
          { 
            allGuest.map((guest, index) => 
              <div key={index} className='w-full my-2 py-2 border-b flex gap-3'>
                <div>{index +1 }</div>
                <div>{guest.guestname}</div>
                <div>{guest.username}</div>
              </div>
            )
          }
      </div>
    </>
  )
}


export default AddGuest