import React, { useEffect, useState } from 'react'
import './chatbar.css'
import { Avatar ,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios.js';
import { useParams } from 'react-router-dom';
import db from './dani1';
import firebase from 'firebase/compat/app';
import { useStateValue } from './StateProvider'
const Chatbar = ({messages}) => {
  const [{user},dispatch]=useStateValue();
  const [seed,setseed] = useState('')
 const [input,setInput]=useState('');
const [message1,setmessages] = useState([]);
 const [rooms,setroooms] = useState([]);
 const {roomid} = useParams();


  useEffect(()=>{
        if(roomid){
          db.collection('Rooms').doc(roomid).onSnapshot((snapshot)=>(
             setroooms(snapshot.data().name)
          ))

          db.collection('Rooms').doc(roomid).collection('messages').orderBy('timestamp','asc')
          .onSnapshot((snapshot)=>
            setmessages(snapshot.docs.map((doc)=>{
                       return doc.data()
            }))
          )
        }

  },[roomid])

  useEffect(()=>{
    setseed(Math.floor(Math.random()*5000))
  },[roomid])
console.log('msg',message1)

  // const sentmessage = async (e)=>{
  //      e.preventDefault();
  //     await  axios.post('/messages/new',{
     
  //   message:input,
  //   name:"Daniyal",
  //   timestamp:"demo timestamp",
  //   received:"false"

  //      })

  //      setInput('')
  // }
const sentmessage1 = (e)=>{
e.preventDefault();
db.collection('Rooms').doc(roomid).collection('messages').add({
  message:input,
  name:user.displayName,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
})
  setInput('')
}

  return (
    <div className='chatbar'>
      <div className='chatbar_header'>
        <Avatar src = {`https://api.dicebear.com/api/human/${seed}.svg`}/>
        <div className='chatbarheader_info'>
          <h3>{rooms}</h3>
          <p>last seen{" "}
          {
           new Date( message1[message1.length-1]?.timestamp?.toDate()).toUTCString()
          }
          </p>
        </div>
    <div className='chatbarheader_right'>
      <IconButton>
  <SearchIcon/>
      </IconButton>
      <IconButton>
        <AttachFileIcon/>
      </IconButton>
      <IconButton>
        <MoreVertIcon/>
      </IconButton>

    </div>
      </div>

      <div className='chatbody'>

        {
          message1.map((message)=>(
            <p className= {`chat_message ${message.name === user.displayName && 'chat_receiver'}` }>
            <span className='chatname'>
            {message.name}
            </span>
           {message.message}
          <span className='chat_time'>
           {new Date(message.timestamp?.toDate()).toUTCString()}
          </span>
             </p>

          ))
        }
                           
      </div>

  <div className='chatfooter'>
  <InsertEmoticonIcon/>
<form>
    <input value={input}   onChange={ (e)=>setInput(e.target.value)} type='text' placeholder='pleae type a message'/>
    <button onClick={sentmessage1} type='submit'>Send a message</button>
</form>
<MicIcon/>
</div>
    </div>
    
  )
}

export default Chatbar