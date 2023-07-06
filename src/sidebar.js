import React, { useEffect, useState } from 'react'
import './sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from './Sidebarchat';
import dani1 from "./dani1"
import { useStateValue } from './StateProvider'

const Sidebar = () => {

  const [rooms ,setRoom] = useState([]);
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
 
   dani1.collection('Rooms').onSnapshot((snapshot)=>setRoom(
            snapshot.docs.map((doc)=>(
               {
                id:doc.id,
                data: doc.data()
               }
            ))
   ))

  },[])
console.log('cl gya')

  return (
    <div className='sidebar'>
    <div className='sidebar_header'>
      <Avatar src ={`${user.photoURL}`}/>
      <div className='sidebar_headerRight'>
     <IconButton>
      <DonutLargeIcon/>
     </IconButton>
     <IconButton>
      <ChatIcon/>
     </IconButton>
     <IconButton>
      <MoreVertIcon/>
     </IconButton>

    </div>
    </div>
    <div className='sidebar_search'>
      <div className='sidebarsearch_container'>
        <SearchIcon/>
        <input placeholder='search or start new chat' type='text'></input>
      </div>
    </div>
    <div className='sidebar_chats'>
    <Sidebarchat addnewchat/>
   {
     rooms.map((room)=>(
        //console.log(room.data.name);
        <Sidebarchat key={room.id } id={room.id} name={room.data.name}/>
     ))
   }
    </div>

    </div>
   
  )
}

export default Sidebar