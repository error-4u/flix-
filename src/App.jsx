/* eslint-disable no-undef */
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
import { RecoilRoot, useSetRecoilState  } from 'recoil'
import Landing from './components/Landing'
import axios from 'axios'
import { BASE_URL } from './config'
import { userState } from './store/atoms/user'

function App() {
  return (
    <div style={{height:"100vh", width: "100vw",
    backgroundColor: "#eeeeee"}}>
    <RecoilRoot>
    <Router>
    <Appbar  />
    <InitUser />
      <Routes>
          <Route path='/' element ={<Landing />}/>
           <Route path='/addcourses' element = {<AddCourses />} />
          <Route path='/signup' element = {<Signup  />} />
          <Route path='/login' element = {<Signin />}  />
          <Route path='/courses' element = {<Courses />} />
          <Route path='/course/:courseId' element = {<Course />} />
      </Routes>

    </Router>
    </RecoilRoot>
    </div>
  )
}
function InitUser(){

  // whenever userState atoms changes this will not RERENDER InitUser

  const setUser = useSetRecoilState(userState);
  const init = async() => {
    try{
      const response = await axios.get(`${BASE_URL}/admin/me`, {
        headers:{
          "Authorization" : "Bearer " + localStorage.getItem("token")
        }
      })
      if(response.data.username){
        setUser({
          isloading: false,
          userEmail: response.data.username
        })
      }
       else{
          setUser({
            isloading: false,
            userEmail: null
          })
        }
      }
      catch(e){

        setUser({
          isloading: false,
          userEmail: null
        })
      }
    }
    return(
      <></>
    )
  }


export default App
