import React from 'react'
import Header from '../Ui/Header'
import Footer from '../Ui/Footer'
import { Outlet } from 'react-router-dom'

function Applayout() {
  return (
    <div className='appLayout'>
      <Header></Header>
      <div className="main-content-appLayout">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Applayout
