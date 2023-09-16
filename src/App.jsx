/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Signup from './components/Signup'
import Appbar from "./components/Appbar"


function App() {


  return (
    <div style={{height:"100vh", width: "100vw",
    backgroundColor: "#eeeeee"}}>
    <Appbar></Appbar>
    <Signup></Signup>
    </div>
  )
}

export default App
