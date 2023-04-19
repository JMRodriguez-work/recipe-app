import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ToggleButton } from '../../utils/ToggleButton/ToggleButton'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { NavbarMobile } from './NavbarMobile'
import { useCookies } from 'react-cookie'

export const Navbar = () => {
  const navigate = useNavigate()
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [cookies, setCookies] = useCookies(['access_token'])
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true)
  const toggleDarkmode = () => {
    setDarkMode(!darkMode)
  }

  const handleLogout = () => {
    setCookies('access_token', '')
    window.localStorage.removeItem('userID')
    navigate('/login')
  }

  return (
    <nav className='nav'>
      <Link to='/'><h1>Recipes</h1></Link>
      <div className='nav__right'>
        <ul className='nav__right__ul'>
          <Link to='/create-recipe'><li>Create a recipe</li></Link>
          <Link to='/saved-recipes'><li>Saved recipes</li></Link>
          {
            !cookies.access_token
              ? (
                <>
                  <Link to='/login'><li>Log in</li></Link>
                  <Link to='/register'><li>Register</li></Link>
                </>
                )
              : (
                <button onClick={handleLogout} className='nav__right__ul-button'>
                  Logout
                </button>
                )
          }
        </ul>
        <ToggleButton isOn={darkMode} handleToggle={toggleDarkmode} />
      </div>
      <NavbarMobile
        handleLogout={handleLogout}
        cookies={cookies}
        isMobileMenuHidden={isMobileMenuHidden}
        setIsMobileMenuHidden={setIsMobileMenuHidden}
        toggleDarkmode={toggleDarkmode}
      />
    </nav>
  )
}
