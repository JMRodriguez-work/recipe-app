import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './ToggleButton.css'

export const ToggleButton = ({ isOn, handleToggle }) => (
  <button className='toggle-button' onClick={handleToggle}>
    {isOn ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
  </button>
)
