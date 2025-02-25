import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../src/assets/Pages/Home'
import About from '../src/assets/Pages/About'
import Contact from '../src/assets/Pages/Contact'
import Country from '../src/assets/Pages/Country'
import Applayout from '../src/Components/Layout/Applayout'
import ErrorPage from './assets/Pages/ErrorPage'
import CountryDetail from './Components/Layout/CountryDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout></Applayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'country',
        element: <Country></Country>
      },
      {
        path: 'country/:id',
        element: <CountryDetail></CountryDetail>
      },
    ],
  },

])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
