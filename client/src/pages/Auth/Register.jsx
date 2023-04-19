import React, { useState } from 'react'
import iconJm from '../../assets/iconjm.png'
import './Login.css' // same styles as login
import { AuthForm } from '../../components'
import { Link } from 'react-router-dom'
import { NewMessage } from '../../utils/NewMessage/NewMessage'

const REGISTER_URL = 'http://localhost:3001/auth/register'
const LABEL = 'Sign up'

export const Register = () => {
  const [userUpdate, setUserUpdate] = useState(false)
  const [message, setMessage] = useState('')

  const onSubmitForm = async (username, password) => {
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message)
      }
      setMessage(data.message)
      setUserUpdate(true)
    } catch (error) {
      console.log(error)
      setMessage(error.message)
    }
  }

  if (userUpdate) return <NewMessage setUserUpdate={setUserUpdate} message={message} /> // After submiting the form shows info

  return (
    <section className='login'>
      <img className='login__icon' src={iconJm} width='60px' height='60px' alt='JmLogo' />
      <h2 className='login__title'>{LABEL}</h2>
      <AuthForm onSubmitForm={onSubmitForm} label={LABEL} />
      <article className='auth__container'>
        <span>Already have an account?</span>
        <Link to='/login'>Log in</Link>
      </article>
    </section>
  )
}
