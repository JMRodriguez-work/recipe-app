import React from 'react'
import iconJm from '../../assets/iconjm.png'
import './Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <section className='login'>
      <img className='login__icon' src={iconJm} alt='JmLogo' />
      <h2 className='login__title'>Log in</h2>
      <form>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
        />
        <button className='form-button'>LOG IN</button>
      </form>
      <div className='auth__container'>
        <span>Are you new?</span>
        <Link to='/register'>Create an account</Link>
      </div>
    </section>
  )
}
