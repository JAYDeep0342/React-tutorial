import React from 'react'
import Navbar from './components/Navbar'
import Foter from './components/Foter'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/product'
import PageNotFound from './pages/PageNotFound'
import Men from './pages/Men'
import Woman from './pages/Woman'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import Coursesdetails from './pages/Coursesdetails'
import Navbar2 from './components/Navbar2'
function App() {

  
  return (
    <div>
      <Navbar/>
      <Navbar2/>
  <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
         <Route path='*' element ={<PageNotFound/>} />
        <Route path='/product' element ={<Product/>} >          
        <Route path='men' element ={<Men/>} />
        <Route path='Woman' element ={<Woman/>} />
         <Route path='kids' element ={<Kids/>} />

    </Route> 
        <Route path='/courses' element ={<Courses/>}/>
                <Route path='/courses/:id' element ={<Coursesdetails/>}/>



  </Routes>
      <Foter/>
    </div>
  )
}

export default App
