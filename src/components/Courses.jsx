/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Courses() {
    const [courses , setCourses] = useState([]);

    useEffect(() => {
       function callback2(data){
        console.log(data)

       }
       function callback1(res){
        res.json().then(callback2)

       }
      fetch("http://localhost:3000/admin/courses",{
        method: "GET",
        headers: {
            "authorization" : "Bearer " + localStorage.getItem("token")
        }
      }).then(callback1)
    }, [])
  return (
    <div>
        courses
      
    </div>
  )
}

export default Courses
