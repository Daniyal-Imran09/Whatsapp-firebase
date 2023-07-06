
import './App.css';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import Chatbar from './chatbar';
import Pusher from 'pusher-js'
import Axios from './axios';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {
  //const [user,setuser] = useState(null)
  const [message,setmessage] = useState([]);
  const [{user},dispatch]=useStateValue();
  // useEffect(()=>{
  //   Axios.get('/messages/sync').then((response)=>{
  //     console.log('ftyd',response.data)
      
  //     setmessage(response.data);
  
  //   })
  // },[])
  // console.log('hghh',message)


  // useEffect(()=>{
  //   var pusher = new Pusher('f9761f2c941261dc8d8b', {
  //     cluster: 'ap2'
  //   });

  //   var channel = pusher.subscribe('messages');
  //   channel.bind('inserted',(data) =>{
  //     // alert(JSON.stringify(data));
  //     console.log('data',data)
  //     console.log('message',message)
  //     setmessage([...message,data])
  //   });

  //   return ()=>{
  //     channel.unbind_all();
  //     channel.unsubscribe()
  //   }
  // },[message])

 

  // console.log('last',message)
  return (



    <div className="App">  

      {!user?(
          <Login/>
      ):(
        <div className="appbody">
        <Router>
        <Sidebar/>
           <Routes>
            <Route path='/'>
            </Route>
  <Route path = '/rooms/:roomid' element={
    <>
      <Chatbar messages={message}/>
    </>
  }>

  </Route>            
           </Routes>
        </Router>
      </div> 

      )}

         
    </div>
  );
}

export default App;
