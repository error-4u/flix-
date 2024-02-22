/* eslint-disable no-undef */
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
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyChartComponent from './Statics';

// THIS WILL GET ALL THE COURSES 

function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate()
   
  const init = async () => {
 

    function callback1(res) {
      res.json().then(callback2);
    }

    const response = await axios.get("http://localhost:3000/admin/courses", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    setCourses(response.data.courses)
  }

  useEffect(() => {
  init();
  }, []);

  

  return (
    <div>
      <center>
      <span style={{alignItems:"center", justifyContent:"center", background:"#4e0eff", padding:"0.5rem",}}><Button 
      onClick={() => navigate("/admin/statistic")}
      style={{color:"whitesmoke"}}>Show Statistic
      
      </Button></span>
      </center>
    <div style={{ key:"courses",display: "flex", flexWrap: "wrap", justifyContent: "center", backgroundColor:"#131324" }} key={"wd"}>
      {courses && courses.map(course => (
        <Course course={course} />
       ))}
    </div>
  
    </div>
  );
}

export function Course({ course }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, marginTop: "100px", backgroundColor: "yellow", marginLeft: "10px"}}>
      <CardMedia
        sx={{ height: 140, backgroundColor: "red" }}
        image={course.price}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <br />
          {course.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { navigate("/course/" + course.id) }}>Edit</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default AdminCourses;
