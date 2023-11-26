/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Signup from './components/Signup'
import Appbar from "./components/Appbar"
import Signin from './components/Signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddCourses from './components/AddCourses'
import Courses from './components/Courses'
import Course from './components/Course'
import { RecoilRoot } from 'recoil'
import Landing from './components/Landing'
import axios from 'axios'


function App() {

  const [userEmail, setUserEmail] = useState("")

  const init = async () => {
    const response = await axios.get('http://localhost:3000/admin/me', {
      headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
    })

    if(response.data.username){
      setUserEmail(response.data.username)
    }

  }

  useEffect(() => {
    init()
  },[])

  return (
    <div style={{height:"100vh", width: "100vw",
    backgroundColor: "#eeeeee"}}>
    <RecoilRoot>
    <Router>
    <Appbar userEmail={userEmail} setUserEmail={setUserEmail} />
    {userEmail}
      <Routes>
          <Route path='/' element ={<Landing />}/>
           <Route path='/addcourses' element = {<AddCourses />} />
          <Route path='/signup' element = {<Signup setUserEmail={setUserEmail} />} />
          <Route path='/login' element = {<Signin setUserEmail={setUserEmail} />}  />
          <Route path='/courses' element = {<Courses />} />
          <Route path='/course/:courseId' element = {<Course />} />
      </Routes>

    </Router>
    </RecoilRoot>
    </div>
  )
}

export default App
