import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './container/Layout'
import { Error, Home, Auth, CreateRecipe, SavedRecipes } from './pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/create-recipe',
        element: <CreateRecipe />
      },
      {
        path: '/saved-recipes',
        element: <SavedRecipes />
      }
    ]
  }
])

function App () {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
