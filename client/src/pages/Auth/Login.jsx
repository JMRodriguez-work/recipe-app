import React from 'react'
import iconJm from '../../assets/iconjm.png'
import './Login.css'

export const Login = () => {
  return (
    <section className='login'>
      <img className='login__icon' src={iconJm} alt='JmLogo' />
      <h2 className='login__title'>Log in</h2>
    </section>
  )
}
