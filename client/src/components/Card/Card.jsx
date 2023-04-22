import React from 'react'
import './Card.css'

export function Card ({ recipe }) {
  return (
    <article className='card'>
      <h2>{recipe.name}</h2>
      <div className='card__instructions'>
        <p>{recipe.instructions}</p>
      </div>
      <img src={recipe.imageUrl} alt={recipe.name} width='80px' height='80px' />
      <p><span className='bold'>Cooking time:</span> {recipe.cookingTime} minutes</p>
    </article>
  )
}
