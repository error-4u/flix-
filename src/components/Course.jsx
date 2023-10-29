/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// THIS WILL GET INDIVIDUAL COURSES
 
function Course() {

let { courseId } = useParams();
const [courses, setCourses] = useState("");
useEffect(() => {
    function callback2(data){
        setCourses(data.courses)
    }
     function callback(res){
        res.json().then(callback2)
     }
    fetch("http://localhost:3000/admin/courses", {
        method: "GET",
        headers: {
          "authorization" : "Bearer " + localStorage.getItem("token")
        }
    }).then(callback)
}, []);


let course = null;
for (let i = 0; i < courses.length; i++) {
    if(courses[i].id == courseId){
    course = courses[i];
    }
    
}

if(!course){
    return <div>
        error course
    </div>
}
function GetCourse(props){
   
    <Card sx={{ maxWidth: 345, marginTop:"20px", backgroundColor:"yellow", marginLeft:"10px"}}>
      <CardMedia
        sx={{ height: 140, backgroundColor:"red"}}
        image={course.imagelink} 
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {course.title} */}
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

}
  return (
    <div>
   <GetCourse course = {course}/>
  </div>
  )

}

export default Course;
