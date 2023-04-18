import React from 'react'
import iconJm from '../../assets/iconjm.png'
import './Login.css'
import { Link } from 'react-router-dom'
import { AuthForm } from '../../components'
export const Login = () => {
  const label = 'Log in'
  const onSubmitForm = async (username, password) => {

  }
  return (
    <section className='login'>
      <img className='login__icon' src={iconJm} width='60px' height='60px' alt='JmLogo' />
      <h2 className='login__title'>{label}</h2>
      <AuthForm onSubmitForm={onSubmitForm} label={label} />
      <article className='auth__container'>
        <span>Are you new?</span>
        <Link to='/register'>Create an account</Link>
      </article>
    </section>
  )
}
