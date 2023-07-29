
import './App.css';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import Chatbar from './chatbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {
 
  const [message,setmessage] = useState([]);
  const [{user},dispatch]=useStateValue();

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
