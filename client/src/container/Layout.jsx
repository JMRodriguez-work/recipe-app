import { Navbar, Footer } from '../components/index'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='app-content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
