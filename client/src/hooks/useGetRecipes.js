import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RECIPES_URL = 'http://localhost:3001/recipes'

export function useGetRecipes (userID) {
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])
  const [savedRecipes, setSavedRecipes] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(RECIPES_URL, {
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
        setRecipes(data)
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    const fetchSavedRecipes = async () => {
      try {
        const response = await fetch(`${RECIPES_URL}/savedRecipes/${userID}`, {
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
        setSavedRecipes(savedRecipes => data.savedRecipes)
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes()
    fetchSavedRecipes()
  }, [RECIPES_URL, userID])

  const handleFavorite = async (recipeID) => {
    if (!userID) {
      navigate('/login')
      return
    }
    try {
      const response = await fetch(RECIPES_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipeID, userID })
      })
      const data = await response.json()
      setSavedRecipes(savedRecipes => data.savedRecipes)
      // BUG -> if i dont have saved recipes and click for the first time to save
      // it doesnt update right away, but after that works fine
    } catch (error) {
      console.error(error)
    }
  }

  return { recipes, savedRecipes, handleFavorite, error, loading }
}
