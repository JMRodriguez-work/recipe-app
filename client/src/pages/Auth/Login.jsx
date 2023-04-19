import React, { useState } from 'react'
import iconJm from '../../assets/iconjm.png'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthForm } from '../../components'
import { NewMessage } from '../../utils/NewMessage/NewMessage'
import { useCookies } from 'react-cookie'

const LABEL = 'Log in'
const LOGIN_URL = 'http://localhost:3001/auth/login'

export const Login = () => {
  const [message, setMessage] = useState('')
  const [userUpdate, setUserUpdate] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [_, setCookies] = useCookies(['access_token'])
  const navigate = useNavigate()

  const onSubmitForm = async (username, password) => {
    try {
      const response = await fetch(LOGIN_URL, {
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
      if (data.message) {
        setMessage(data.message)
        setUserUpdate(true)
      } else {
        setCookies('access_token', data.token)
        window.localStorage.setItem('userID', JSON.stringify(data.userID))
        navigate('/')
      }
    } catch (error) {
      console.error(error)
      setMessage(error.message)
    }
  }

  if (userUpdate) return <NewMessage setUserUpdate={setUserUpdate} message={message} />

  return (
    <section className='login'>
      <img className='login__icon' src={iconJm} width='60px' height='60px' alt='JmLogo' />
      <h2 className='login__title'>{LABEL}</h2>
      <AuthForm onSubmitForm={onSubmitForm} label={LABEL} />
      <article className='auth__container'>
        <span>Are you new?</span>
        <Link to='/register'>Create an account</Link>
      </article>
    </section>
  )
}
