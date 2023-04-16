import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './container/Layout'
import { Error, Home, Login } from './pages/index'

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
        path: '/login',
        element: <Login />
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
