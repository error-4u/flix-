/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import {Card, Typography} from "@mui/material";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


// function Signin() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   return <div>
//           <div style={{
//               paddingTop: 150,
//               marginBottom: 10,
//               display: "flex",
//               justifyContent: "center"
//           }}>
//               <Typography variant={"h6"}>
//               Welcome to Coursera. Sign up below
//               </Typography>
//           </div>
//       <div style={{display: "flex", justifyContent: "center"}}>
//           <Card varint={"outlined"} style={{width: 400, padding: 20}}>
//               <TextField
//                   onChange={(evant11) => {
//                       let elemt = evant11.target;
//                       setEmail(elemt.value);
//                   }}
//                   fullWidth={true}
//                   label="Email"
//                   variant="outlined"
//               />
//               <br/><br/>
//               <TextField
//                   onChange={(e) => {
//                       setPassword(e.target.value);
//                   }}
//                   fullWidth={true}
//                   label="Password"
//                   variant="outlined"
//                   type={"password"}
//               />
//               <br/><br/>

//               <Button
//                   size={"large"}
//                   variant="contained"
//                   onClick={async () => {
//                       const res = await axios.post("http://localhost:3000/admin/login",{}, {
//                           headers: {
//                               "Content-type": "application/json",
//                               username: email,
//                               password: password

//                           }
//                       });
//                       const data = res.data;
                      
//                       localStorage.setItem("token", data.token);
//                       window.location = "/"
//                   }}

//               > Signin</Button>
//           </Card>
//       </div>
//   </div>
// }

// export default Signin;

function Signin(setUserEmail={setUserEmail}){
const [username, setEmail ]= useState("");
const [password, setPassword] = useState(""); 
const navigate = useNavigate();

return <div style={{marginTop: 200}}>
        <center>
        <div>Welcome back. Sign in below</div>
      <Card variant = {"outlined"} style = {{width : 400 , padding: "3rem"}}>
     <TextField 
     fullWidth ={true}
     id="username" label="Email" variant="outlined" onChange={(e) => {
        setEmail(e.target.value)
     }}/>
     <br /> <br />
     <TextField 
     fullWidth = {true}
     id="password" label="Password" variant="outlined" onChange={(e) => {
      setPassword(e.target.value)
     }} />
     <br /> <br />
     {/* <Button variant="contained" onClick={() => {
      fetch("http://localhost:3000/admin/login", {
        method : "POST",
        body: JSON.stringify({
          username,password
        }),
        headers : {
          "Content-type" : "application/json",
          
        
        }
      })
     }}>Login</Button> */}

<Button
                size={"large"}
                  variant="contained"
                  onClick={async() => {
                      const response = await axios.post("http://localhost:3000/admin/login", {
                          username: username,
                          password: password
                      })
                      let data = response.data;
                      localStorage.setItem("token", data.token);
                     setUserEmail(username)
                      navigate('/courses')
                      
                   
                  }}

              > login</Button>
     </Card>
     </center>

    </div>


}

export default Signin;