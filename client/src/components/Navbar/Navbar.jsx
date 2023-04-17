import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ToggleButton } from '../../utils/ToggleButton/ToggleButton'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { NavbarMobile } from './NavbarMobile'

export const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true)
  const toggleDarkmode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className='nav'>
      <Link to='/'><h1>Recipes</h1></Link>
      <div className='nav__right'>
        <ul className='nav__right__ul'>
          <Link to='/create-recipe'><li>Create a recipe</li></Link>
          <Link to='/saved-recipes'><li>Saved recipes</li></Link>
          <Link to='/auth'><li>Login/Signin</li></Link>
        </ul>
        <ToggleButton isOn={darkMode} handleToggle={toggleDarkmode} />
      </div>
      <NavbarMobile
        isOn={darkMode}
        handleToggle={toggleDarkmode}
        isMobileMenuHidden={isMobileMenuHidden}
        setIsMobileMenuHidden={setIsMobileMenuHidden}
        toggleDarkmode={toggleDarkmode}
      />
    </nav>
  )
}
