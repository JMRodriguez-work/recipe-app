import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ToggleButton } from '../../utils/ToggleButton/ToggleButton'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const toggleDarkmode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <nav className='nav'>
      <Link to='/'><h1>Recipes</h1></Link>
      <ToggleButton isOn={darkMode} handleToggle={toggleDarkmode} />
    </nav>
  )
}
