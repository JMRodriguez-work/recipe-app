import React from 'react'
import './AuthForm.css'

export const AuthForm = ({ label, onSubmitForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    onSubmitForm(username, password)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        name='username'
        required
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        name='password'
        required
      />
      <button type='submit' className='form-button'>{label}</button>
    </form>
  )
}
