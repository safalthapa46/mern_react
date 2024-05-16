import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Home from './Pages/Home/Home'
import Pricing from './Pages/Pricing/Pricing'
import Product from './Pages/Product/Product'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'


const App = () => {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      </BrowserRouter>

  )
}

export default App
