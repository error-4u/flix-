/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';
function Signup(){

  const [email, setEmail] = useState("")
  const [password , setPassword] = useState("") 

return <div style={{marginTop: 200}}>
  
        <center>
        <div>Welcome to Coursera. Sign Up</div>
      <Card variant = {"outlined"} style = {{width : 400 , padding : "3rem"}}>
     <TextField 
     fullWidth ={true}
     id="username" label="Email" variant="outlined"  onChange={(e) => {
      setEmail(e.target.value);
     }}/>
     <br /> <br />
     <TextField 
     fullWidth = {true}
     id="password" label="Password" variant="outlined" onChange={(e) => {
      setPassword(e.target.value);
     }}/>
     <br /> <br />

     <Button variant="contained" onClick={() => {
      function callback2(data){
       localStorage.setItem('token', data.token);
      }
       function callback1(res){
          res.json().then(callback2)
       }

      fetch("http://localhost:3000/admin/signup", {
        method: "POST",
        body:JSON.stringify({
          username : email,
         password : password
        }),
        headers : {
             "Content-type" : "application/json"
        }
      }).then(callback1)
     }}>SignUP</Button>
     </Card>
     </center>

    </div>


}

export default Signup;