import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToggleButton } from '../../utils/ToggleButton/ToggleButton'
import { ThemeContext } from '../../context/ThemeContext'

export const NavbarMobile = ({ isMobileMenuHidden, setIsMobileMenuHidden, toggleDarkmode }) => {
  const { darkMode } = useContext(ThemeContext)
  const handleMobileMenuButtonClick = () => {
    setIsMobileMenuHidden(!isMobileMenuHidden)
  }
  return (
    <>
      <div className='nav__mobile-button'>
        <ToggleButton isOn={darkMode} handleToggle={toggleDarkmode} />
        <FontAwesomeIcon title='menu-mobile' onClick={handleMobileMenuButtonClick} icon={faBars} />
      </div>
      <div className={`nav__mobile__container${isMobileMenuHidden ? '-hidden' : ''}`}>
        <ul className='nav__mobile__ul'>
          <Link onClick={() => setIsMobileMenuHidden(true)} to='/create-recipe'><li>CREATE RECIPE</li></Link>
          <Link onClick={() => setIsMobileMenuHidden(true)} to='/saved-recipes'><li>SAVED RECIPES</li></Link>
          <Link onClick={() => setIsMobileMenuHidden(true)} to='/login'><li>LOGIN</li></Link>
          <Link onClick={() => setIsMobileMenuHidden(true)} to='/register'><li>REGISTER</li></Link>
        </ul>
      </div>
    </>
  )
}
