import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider}from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import Rootlayout from './components/Rootlayout'
import Checkout from './components/Checkout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/'element={<Rootlayout/>}>
      <Route index element ={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout'element={<Checkout/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
