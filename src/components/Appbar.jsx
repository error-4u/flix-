/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 


function Appbar(){

  const navigate = useNavigate();
  const [userEmail, setUseremail] = useState(null);


  useEffect(() => {
     
    function callback2(data){
 
     if(data.userEmail){
      setUseremail(data.userEmail);
      console.log(userEmail);

     }
    }
    function callback1(res){
      res.json().then(callback2)
    }
    fetch("http://localhost:3000/admin/me" , {
      method: "GET",
      headers : {
       "authorization" : "Bearer " + localStorage.getItem("token")
      }
    }).then(callback1)


  },[]);

  if(userEmail){
    return <div style={{display: "flex",
    justifyContent: "space-between", padding: "1rem"}}>
    
    <div style={{backgroundColor: "red"}}>
    <Typography variant="h5">Coursera</Typography>
    </div>
    <div>
      {userEmail}
    </div>
    <div>
   
    <Button variant="contained" onClick={() => {
      localStorage.setItem("token", null);
      window.location="/";
    }} >Logout</Button>
    </div>
    </div>
  }

return <div style={{display: "flex",
justifyContent: "space-between", padding: "1rem"}}>

<div style={{backgroundColor: "red"}}>
<Typography variant="h5">Coursera</Typography>
</div>
<div>
<Button variant="contained" onClick={() => {
  navigate("/signup")
}} style={{marginRight: 5}}>Sign up</Button>
<Button variant="contained" onClick={() => {
  navigate("/login")
}} >Sign in</Button>
</div>
</div>


}

export default Appbar;