/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Signup from './components/Signup'
import Appbar from "./components/Appbar"
import Signin from './components/Signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddCourses from './components/AddCourses'


function App() {


  return (
    <div style={{height:"100vh", width: "100vw",
    backgroundColor: "#eeeeee"}}>
    
    <Router>
    <Appbar />
      <Routes>
          
           <Route path='/addcourse' element = {<AddCourses />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/login' element = {<Signin />} />
      </Routes>

    </Router>
    </div>
  )
}

export default App
