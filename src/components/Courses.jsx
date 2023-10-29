/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'

// THIS WILL GET ALL THE COURSES 

function Courses() {
    const [courses , setCourses] = useState([]);

    useEffect(() => {
       function callback2(data){
        console.log(data.courses);
        setCourses(data.courses);

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
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        
        {courses.map(course => {
         return <Course course={course}/> }
         

        )}
      
    </div>
  )
}

 export function Course(props){
  return (
 
    <Card sx={{ maxWidth: 345, marginTop:"20px", backgroundColor:"yellow", marginLeft:"10px"}}>
      <CardMedia
        sx={{ height: 140, backgroundColor:"red"}}
        image={props.course.imagelink} 
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
     
       <br />
       {props.course.description}
       <br />
      
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
 
  );
}


export default Courses;
