import { useEffect, useState } from 'react'

const RECIPES_URL = 'http://localhost:3001/recipes'

export function useGetRecipes () {
  const [recipes, setRecipes] = useState([])
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
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes()
  }, [RECIPES_URL])

  return { recipes, error, loading }
}
