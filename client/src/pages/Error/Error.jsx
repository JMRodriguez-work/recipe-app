import React from 'react'
import './Error.css'

export const Error = () => {
  return (
    <div className='error-container'> {/* Agrega una clase CSS para el contenedor principal */}
      <h1 className='error-title'>Error 404</h1> {/* Agrega una clase CSS para el título */}
      <p className='error-message'>Page not found</p> {/* Agrega una clase CSS para el mensaje */}
    </div>
  )
}
