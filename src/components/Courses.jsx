/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'

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
    <div>
        courses
        {courses.map(course => {
         return <Course course={course}/> }
         

        )}
      
    </div>
  )
}

function Course(props){
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Course card
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {props.course.title}
       <br />
       {props.course.description}
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
