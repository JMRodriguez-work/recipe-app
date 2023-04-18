import React from 'react'
import iconJm from '../../assets/iconjm.png'
import './Login.css' // same styles as login
import { AuthForm } from '../../components'
import { Link } from 'react-router-dom'

export const Register = () => {
  const onSubmitForm = () => {}
  return (
    <section className='login'>
      <img className='login__icon' src={iconJm} width='60px' height='60px' alt='JmLogo' />
      <h2 className='login__title'>Sign up</h2>
      <AuthForm onSubmitForm={onSubmitForm} buttonName='SIGN UP' />
      <div className='auth__container'>
        <span>Already have an account?</span>
        <Link to='/login'>Log in</Link>
      </div>
    </section>
  )
}
