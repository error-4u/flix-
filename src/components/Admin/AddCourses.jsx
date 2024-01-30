/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';

function AddCourses(){
const [title , setTitle] = useState("");
const [description , setDescription] = useState("");
const [image, setimg] = useState("");
const [price, setPrice] = useState("")



return <div style={{
    marginTop : 200

}}> 
<center>
    <Card variant="outlined" style={{
        width : 400,
        padding: "3rem"
      
    }}>
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
        <br /><br />
        <TextField variant='outlined' id='price' label='price' fullWidth = {true} onChange={(e) => {
            setPrice(e.target.value)
        }}/>
        <br /> <br />
        <Button variant='contained'onClick={() => {

            function callback2(data){
                alert("course added")
            }
            function callback1(res){
                res.json().then(callback2)
            }
            fetch("http://localhost:3000/admin/courses", {
                method: "POST",
                body : JSON.stringify({
                    title : title,
                    description : description,
                    imagelink : image,
                    published : true,
                    price
                }),
                headers : {
                    "Content-type" : "application/json",
                    "authorization" : " Bearer " + localStorage.getItem("token") 
                }
            }).then(callback1)
         
        }}>Add</Button>

    </Card>
 </center>
</div>
    
}

export default AddCourses;