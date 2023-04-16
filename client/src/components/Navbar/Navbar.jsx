import React, { useContext } from 'react'
import './Navbar.css'
import { ThemeContext } from '../../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ToggleButton = ({ isOn, handleToggle }) => (
  <button className='toggle-button' onClick={handleToggle}>
    {isOn ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
  </button>
)

export const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const toggleDarkmode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <nav>
      <h1>Navbar</h1>
      <ToggleButton isOn={darkMode} handleToggle={toggleDarkmode} />
    </nav>
  )
}
