import React from 'react'
import './NewMessage.css'
import { Link } from 'react-router-dom'

export const NewMessage = ({ message, setUserUpdate }) => {
  return (
    <div className='message__wrapper'>
      <h1 className='message__title'>{message}</h1>
      <Link to='/login'><button onClick={() => setUserUpdate(false)} className='message__button'>Go to Login</button></Link>
    </div>
  )
}
