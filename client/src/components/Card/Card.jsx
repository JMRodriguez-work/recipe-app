import React, { useState } from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function Card ({ recipe, handleFavorite, isSaved, isHome }) {
  // I used a flag to know if I come from Home or SavedRecipes to show the favIcon

  const isRecipeSaved = isSaved && isSaved.includes(recipe._id)
  const [isFavorite, setIsFavorite] = useState(isRecipeSaved) // Estado local para el corazón favorito

  const handleFavoriteClick = () => {
    if (!isFavorite && handleFavorite) { // Si no es favorito, ejecutar la función handleFavorite
      handleFavorite(recipe._id)
    }
    setIsFavorite(true) // Actualizar el estado del corazón favorito
  }

  console.log(isRecipeSaved)

  return (
    <article className='card'>
      <h2>{recipe.name}</h2>
      {isHome && <FontAwesomeIcon
        onClick={handleFavoriteClick}
        className={isRecipeSaved ? 'card__favorite-active' : 'card__favorite'}
        size='sm'
        icon={faStar}
                 />}
      <div className='card__instructions'>
        <p>{recipe.instructions}</p>
      </div>
      <div className='card__boxing'>
        <div className='card__boxing-back' />
        <img src={recipe.imageUrl} alt={recipe.name} width='80px' height='80px' />
        <ul className='card__boxing__ingredients'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <p><span className='bold'>Cooking time:</span> {recipe.cookingTime} minutes</p>
    </article>
  )
}
