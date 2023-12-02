/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//import { Typography } from "@mui/material";
//import { Button } from "@mui/material";
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useEffect, useState } from "react";
//import Toolbar from "@mui/material";
//import Box from "@mui/material";
import { useNavigate } from "react-router-dom";
 


export default function Appbar({userEmail, setUserEmail}) {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // useEffect(() => {
  //   fetch( 'http://localhost:3000/admin/me', { headers: { "Authorization": "Bearer " + localStorage.getItem("token") }})
  //     .then(response => response.json())
  //     .then(data => {
  //       setUsername(data.username);
  //       setLoggedIn(true);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching username:', error);
  //       setLoggedIn(false);
  //     });
  // }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.setItem("token", null);
    setLoggedIn(false);
    setUserEmail(null)
    navigate("/signup")
  };

  // if(userEmail){
    if (userEmail) {
      return (
        <Box>
          <AppBar>
          <Toolbar>
          <Typography style={{cursor:"pointer"}} variant="h6" component="h6" sx={{ flexGrow: 1 }}>{userEmail}</Typography>
          <Button variant="contained" onClick={() => {
           handleLogout()
          }}>
            Logout
          </Button>
          </Toolbar>
          </AppBar>
        </Box>
        
      );
    }

  //     <Box>
  //     <AppBar position="static">
  //       <Toolbar>
        
          
  //             <Typography variant="subtitle1" component="span" sx={{ marginRight: '1rem', backgroundColor:"red"}}> {username} </Typography>
  //             <Button color="inherit" onClick={handleLogout}> Logout </Button>
          
          
  //       </Toolbar>
  //     </AppBar>
  //   </Box>

    
  // }

 

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{cursor:"pointer"}} variant="h6" component="h6" sx={{ flexGrow: 1 }}>Coursera</Typography>
          {loggedIn ? (
            <>
              <Typography variant="subtitle1" component="span" sx={{ marginRight: '1rem' }}> {username} </Typography>
              <Button color="inherit" onClick={handleLogout}> Logout </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handleLogin}> Login </Button>
              <Button color="inherit" onClick={handleSignup}> Signup </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// function Appbar(){

//   const navigate = useNavigate();
//   const [userEmail, setUseremail] = useState(null);


//   useEffect(() => {
     
//     function callback2(data){
 
//      if(data.userEmail){
//       setUseremail(data.userEmail);
//       console.log(userEmail);

//      }
//     }
//     function callback1(res){
//       res.json().then(callback2)
//     }
//     fetch("http://localhost:3000/admin/me" , {
//       method: "GET",
//       headers : {
//        "authorization" : "Bearer " + localStorage.getItem("token")
//       }
//     }).then(callback1)


//   },[]);

//   if(userEmail){
//     return <div style={{display: "flex",
//     justifyContent: "space-between", padding: "1rem"}}>
    
//     <div style={{backgroundColor: "red"}}>
//     <Typography variant="h5">Coursera</Typography>
//     </div>
//     <div>
//       {userEmail}
//     </div>
//     <div>
   
//     <Button variant="contained" onClick={() => {
//       localStorage.setItem("token", null);
//       window.location="/";
//     }} >Logout</Button>
//     </div>
//     </div>
//   }

// return <div style={{display: "flex",
// justifyContent: "space-between", padding: "1rem"}}>

// <div style={{backgroundColor: "red"}}>
// <Typography variant="h5">Coursera</Typography>
// </div>
// <div>
// <Button variant="contained" onClick={() => {
//   navigate("/signup")
// }} style={{marginRight: 5}}>Sign up</Button>
// <Button variant="contained" onClick={() => {
//   navigate("/login")
// }} >Sign in</Button>
// </div>
// </div>


// }

// export default Appbar;