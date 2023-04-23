import React, { useEffect, useState } from 'react'
import { useGetUserID } from '../../hooks/useGetUserID'
import { Card } from '../../components/Card/Card'
import { Loader } from '../../utils/Loader/Loader'

const RECIPES_URL = 'http://localhost:3001/recipes/savedRecipes/all'

export const SavedRecipes = () => {
  const userID = useGetUserID()
  const [savedRecipes, setSavedRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await fetch(`${RECIPES_URL}/${userID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          setError(true)
          throw new Error('Failed fetch request')
        }
        const data = await response.json()
        setSavedRecipes(data.savedRecipes)
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchSavedRecipes()
  }, [])

  if (loading) return <Loader />
  if (error) return <p>Error</p>

  return (
    <section className='home'>
      <h1 className='home__title'>Saved Recipes</h1>
      <ul className='home__list'>
        {savedRecipes?.map(recipe => (
          <li key={recipe._id}>
            <Card recipe={recipe} />
          </li>
        ))}
      </ul>
    </section>
  )
}
