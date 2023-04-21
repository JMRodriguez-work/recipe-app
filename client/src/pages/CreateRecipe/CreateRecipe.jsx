import React, { useState } from 'react'
import './CreateRecipe.css'
import { useGetUserID } from '../../hooks/useGetUserID'
import { useNavigate } from 'react-router-dom'

const CREATE_RECIPE_URL = 'http://localhost:3001/recipes'

export function CreateRecipe () {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [isRecipeCreated, setIsRecipeCreated] = useState(false)
  const userID = useGetUserID()
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [],
    instructions: '',
    imageUrl: '',
    cookingTime: 0,
    userOwner: userID
  })

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, '']
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setRecipe({
      ...recipe,
      [name]: value
    })
  }

  const handleIngredientChange = (event, index) => {
    const { value } = event.target
    const ingredients = [...recipe.ingredients]
    ingredients[index] = value
    setRecipe({
      ...recipe,
      ingredients
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(CREATE_RECIPE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
      })
      if (!response.ok) {
        throw new Error(response.data.message)
      }
      setIsRecipeCreated(true)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  return (
    <div className='create-recipe'>
      <h2 className='create-recipe__title'>Create Recipe</h2>
      <form className='create-recipe__form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          autoFocus
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
        />
        <label htmlFor='ingredients'>Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            name='ingredients'
            id='ingredients'
            type='text'
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type='button' className='create-recipe__add' onClick={addIngredient}>+Add ingredient</button>
        <label htmlFor='instructions'>Instructions</label>
        <textarea
          id='instructions'
          name='instructions'
          onChange={handleChange}
        />
        <label htmlFor='imageUrl'>Image URL</label>
        <input
          id='imageUrl'
          name='imageUrl'
          type='text'
          onChange={handleChange}
        />
        <label htmlFor='cookingTime'>Cooking time (minutes)</label>
        <input
          type='number'
          id='cookingTime'
          min='0'
          name='cookingTime'
          onChange={handleChange}
        />
        <button type='submit' className='form-button'>Create</button>
      </form>
      {isRecipeCreated && <p className='recipe__created-true'>Recepy created!</p>}
      {error && <p className='recipe__created-error'>Error!</p>}
    </div>
  )
}
