import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './ToggleButton.css'

export const ToggleButton = ({ isOn, handleToggle }) => (
  <button aria-label='select-theme-color' className='toggle-button' onClick={handleToggle}>
    {isOn ? <FontAwesomeIcon title='dark-mode-button' icon={faMoon} /> : <FontAwesomeIcon title='light-mode-button' icon={faSun} />}
  </button>
)
