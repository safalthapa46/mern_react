import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Home from './Pages/Home/Home'
import Pricing from './Pages/Pricing/Pricing'
import Product from './Pages/Product/Product'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import SingleDetails from './Pages/Product/ProductDetails'
import Post from './Pages/Post/Post'
import PostDetails from './components/Post/PostDetails'
import SinglePost from './Pages/Post/SinglePost'


const App = () => {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />}/>
        <Route path='/products/:id' element={<SingleDetails />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/post/:id' element={<SinglePost />}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      </BrowserRouter>

  )
}

export default App
