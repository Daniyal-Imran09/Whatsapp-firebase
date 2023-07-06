import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import './Sidebarchat.css'

import db from './dani1'
import { Link } from 'react-router-dom'
function Sidebarchat({id,name,addnewchat}) {
  const [messages,setmessages]=useState([])
  const [seed,setseed] = useState('')
 const createchat = async ()=>{
    const roomname = prompt("plese enter the room name");
    if (roomname){
        db.collection('Rooms').add({
          name:roomname
        })
    }
 }

 useEffect(()=>{
   setseed(Math.floor(Math.random()*5000))
 },[])

 useEffect(()=>{
  if (id){
     db.collection('Rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(
      (snapshot)=>(setmessages(snapshot.docs.map((doc)=>{
        return doc.data()}
        
        )))
     )
      }
 },[id])

  return  !addnewchat ? (
    <Link to={`/rooms/${id}`}>
    <div className='Sidebarchat'>
        <Avatar className='Avatar'  src = {`https://api.dicebear.com/api/human/${seed}.svg`} />
        <div className='Sidebarchat_info'>
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
        </div>
        </div>
       
    </Link>
    
  ):(
    <div className='Sidebarchat' onClick={createchat}>
      <h2>Add new chat</h2>
    </div>
  )

}

export default Sidebarchat