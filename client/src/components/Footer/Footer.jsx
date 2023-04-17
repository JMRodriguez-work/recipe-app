import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className='footer'>
      <p>Copyright ©</p>
      <a
        href='https://github.com/JMRodriguez-work'
        target='_blank'
        rel='noreferrer'
      ><FontAwesomeIcon size='lg' icon={faGithub} title='github icon' />
      </a>
      <a
        href='https://www.linkedin.com/in/juan-martin-rodriguez-front-end'
        target='_blank' rel='noreferrer'
      ><FontAwesomeIcon size='lg' icon={faLinkedin} title='linkedin icon' />
      </a>
    </footer>
  )
}
