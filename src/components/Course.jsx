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
import { TextField } from '@mui/material';

// THIS WILL GET INDIVIDUAL COURSE
 
function Course() {

    console.log("from course");

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

// THIS WILL UPDATE INDIVIDUAL COURSE

function UpdateCourse(props){
    console.log("from Update course");
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [image, setimg] = useState("");
    const course = props.course;
    
    
    return <div style={{
        marginTop : 200
    
    }}> 
    <center>
        <Card variant="outlined" style={{
            width : 400,
            padding: "3rem"
          
        }}> 
            <Typography>Update course details</Typography>
            <TextField variant="outlined" id='title' label= 'title' fullWidth = {true} onChange={(e) => {
                setTitle(e.target.value)
            }}/>
            <br /><br />
            <TextField variant='outlined' id='description' label= 'description' fullWidth = {true} onChange={(e) => {
                setDescription(e.target.value)
            }}/>
            <br /><br />
            <TextField variant='outlined' id='imglink' label='image link' fullWidth = {true} onChange={(e) => {
                setimg(e.target.value)
            }}/>
            <br /> <br />
            <Button variant='contained'onClick={() => {
    
                function callback2(data){
                  
                    let UpdateCourses = [];
                    // alert("course updated")
                    for (let i = 0; i < props.courses.length; i++) {
                        if(props.courses[i].id == course.id){
                            UpdateCourses.push ({
                                id: course.id,
                                title: title,
                                description:description,
                                imagelink: image

                            })
                        }
                        else{
                            UpdateCourses.push(props.courses[i]);
                        }
                        
                    }
                    props.setCourses(UpdateCourses)

                }
                function callback1(res){
                    res.json().then(callback2)
                }
                fetch("http://localhost:3000/admin/courses/" + course.id, {
                    method: "PUT",
                    body : JSON.stringify({
                        title : title,
                        description : description,
                        imagelink : image,
                        published : true
                    }),
                    headers : {
                        "Content-type" : "application/json",
                        "authorization" : " Bearer " + localStorage.getItem("token") 
                    }
                }).then(callback1)
             
            }}>Update course</Button>
    
        </Card>
     </center>
    </div>
        
    
}

// THIS WILL RENDER ALL THE INDIVIDUAL COURSE 

function GetCourse(props){
    const course = props.course;
    console.log("from get course");
   
    return <div >
    <Card sx={{ maxWidth: 345, marginTop:"20px", backgroundColor:"yellow", marginLeft:"10px"}}>
      <CardMedia
        sx={{ height: 140, backgroundColor:"red"}}
        image={course.imagelink} 
       
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

}
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
   <GetCourse course = {course}/>
   
   <UpdateCourse courses= {courses} course = {course} setCourses={setCourses}/>
  </div>
  )

}

export default Course;
