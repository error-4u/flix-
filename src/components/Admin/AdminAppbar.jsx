/* eslint-disable no-undef */
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
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import { userState } from '../store/atoms/user';
import { userEmailState } from '../store/selectors/userEmail';
import { isUserLoading } from '../store/selectors/isUserLoading';

 


export default function AdminAppbar() {
  const navigate = useNavigate();


  // THESE TWO VARIABLE ARE SELECTORS
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);

  const setUser = useSetRecoilState(userState);


  if(userLoading){
    return <>loading.......</>
  }
  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.setItem("token", null);
   setUser({
    isLoading: false,
    userEmail: null
   })
  };

  // if(userEmail){
    if (userEmail) {
      return <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1
      }}>
          <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
              navigate("/")
          }}>
              <Typography variant={"h6"}>Coursera</Typography>
          </div>
  
          <div style={{display: "flex"}}>
              <div style={{marginRight: 10, display: "flex"}}>
              <div style={{marginRight: 10}}>
                      <Button
                          onClick={() => {
                              navigate("/admin/addcourses")
                          }}
                      >Add course</Button>
                  </div>

                  <div style={{marginRight: 10}}>
                      <Button
                          onClick={() => {
                              navigate("/admin/courses")
                          }}
                      >Courses</Button>
                  </div>

                  <Button
                      variant={"contained"}
                      onClick={() => {
                          localStorage.setItem("token", null);
                          setUser({
                              isLoading: false,
                              userEmail: null
                          })
                          navigate("/")
                      }}
                  >Logout</Button>
              </div>
          </div>
      </div>
  } else {
      return <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1
      }}>
          <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
              navigate("/")
          }}>
              <Typography variant={"h6"}>Coursera</Typography>
          </div>
  
          <div style={{display: "flex"}}>
              <div style={{marginRight: 10}}>
                  <Button
                      variant={"contained"}
                      onClick={() => {
                          navigate("/signup")
                      }}
                  >Signup</Button>
              </div>
              <div>
                  <Button
                      variant={"contained"}
                      onClick={() => {
                          navigate("/login")
                      }}
                  >Signin</Button>
              </div>
          </div>
      </div>
  }
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