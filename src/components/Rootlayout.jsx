import{Outlet} from 'react-router-dom'
import Navbarpanel from './Navbar'
import {store} from '../store/store'
import { Provider } from 'react-redux'
const Rootlayout = () => {
  return (
    <>
    
    <Navbarpanel/>
    <main>
    <Outlet/>
    </main>
  
    </>
  )
}

export default Rootlayout