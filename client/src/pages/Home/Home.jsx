import React from 'react'
import './Home.css'
import { Loader } from '../../utils/Loader/Loader'
import { Card } from '../../components/Card/Card'
import { useGetRecipes } from '../../hooks/useGetRecipes'
import { useGetUserID } from '../../hooks/useGetUserID'

export const Home = () => {
  const userID = useGetUserID()
  const { recipes, savedRecipes, handleFavorite, loading, error } = useGetRecipes(userID)
  console.log(savedRecipes)

  if (loading) return <Loader />
  if (error) return <p>Error</p>

  return (
    <main className='home'>
      <h1 className='home__title'>Recipes</h1>
      <ul className='home__list'>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Card isHome handleFavorite={handleFavorite} recipe={recipe} isSaved={savedRecipes} />
          </li>
        ))}
      </ul>
    </main>
  )
}
