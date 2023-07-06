import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import {auth,provider} from './dani1'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'



const Login = () => {

    const [{},dispatch]=useStateValue();

    const signin = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error)=>console.log(error))
      }

  return (
    <div className='login'>
        <div className='login_container'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png" alt=""/>
          <div className='login_text'>
          <h2>Sign in to whatsapp</h2>
          </div>
          <Button type='submit' onClick={signin}>
          Sign in with Google
          </Button>
        </div>
      </div>
  )
}

export default Login