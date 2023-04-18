import React from 'react'
import './AuthForm.css'

export const AuthForm = ({ buttonName, onSubmitForm }) => {
  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        name='username'
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        name='password'
      />
      <button type='submit' className='form-button'>{buttonName}</button>
    </form>
  )
}
