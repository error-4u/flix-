/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const handlelogin = async () => {
    if (!email.trim() || password.length < 6) {
      alert(
        "Invalid email or password. Make sure email is not empty and password is at least 6 characters long."
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        username: email,
        password: password,
      });

      const data = await res.data;

      if (data.token) {
        localStorage.setItem("token", data.token);
        setUser({
          userEmail: email,
          isLoading: false,
        });
        navigate("/user/courses");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error, maybe show a message to the user
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        alignItems: "center",
        backgroundColor: "#131324",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          backgroundColor: "#00000076",
          borderRadius: "2rem",
          padding: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
          }}
          className="brand"
        >
          <img style={{ height: "5rem" }} src="/book.png" alt="logo" />
          <h1 style={{ color: "white", textTransform: "uppercase" }}>Flix</h1>
        </div>
        <input
          style={{
            backgroundColor: "transparent",
            padding: "1rem",
            border: "0.1rem solid #4e0eff",
            borderRadius: "0.4rem",
            color: "white",
            width: "100%",
            fontSize: "1rem",
          }}
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="true"
          onChange={(e) => {
            let elem = e.target;
            setEmail(elem.value);
          }}
          min="3"
        />

        <input
          style={{
            backgroundColor: "transparent",
            padding: "1rem",
            border: "0.1rem solid #4e0eff",
            borderRadius: "0.4rem",
            color: "white",
            width: "100%",
            fontSize: "1rem",
          }}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          onClick={handlelogin}
          style={{
            backgroundColor: "#4e0eff",
            color: "white",
            padding: "1rem 2rem",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "0.4rem",
            fontSize: "1rem",
            textTransform: "uppercase",
          }}
          type="submit"
        >
          LogIn
        </button>
        <span style={{ color: "white", textTransform: "uppercase" }}>
          Don't have an account ?{" "}
          <Link
            style={{
              color: "#4e0eff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/signup"
          >
            Create One.
          </Link>
        </span>
        <span style={{ color: "white", textTransform: "uppercase" }}>
          login as <span></span>
          <Link
            style={{
              color: "#4e0eff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/admin/login"
          >
            admin
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signin;

// function Signin(setUserEmail={setUserEmail}){
// const [username, setEmail ]= useState("");
// const [password, setPassword] = useState("");
// const navigate = useNavigate();

// return <div style={{marginTop: 200}}>
//         <center>
//         <div>Welcome back. Sign in below</div>
//       <Card variant = {"outlined"} style = {{width : 400 , padding: "3rem"}}>
//      <TextField
//      fullWidth ={true}
//      id="username" label="Email" variant="outlined" onChange={(e) => {
//         setEmail(e.target.value)
//      }}/>
//      <br /> <br />
//      <TextField
//      fullWidth = {true}
//      id="password" label="Password" variant="outlined" onChange={(e) => {
//       setPassword(e.target.value)
//      }} />
//      <br /> <br />
//      {/* <Button variant="contained" onClick={() => {
//       fetch("http://localhost:3000/admin/login", {
//         method : "POST",
//         body: JSON.stringify({
//           username,password
//         }),
//         headers : {
//           "Content-type" : "application/json",

//         }
//       })
//      }}>Login</Button> */}

// <Button
//                 size={"large"}
//                   variant="contained"
//                   onClick={async() => {
//                       const response = await axios.post("http://localhost:3000/admin/login", {
//                           username: username,
//                           password: password
//                       })
//                       let data = response.data;
//                       localStorage.setItem("token", data.token);
//                      setUserEmail(username)
//                       navigate('/courses')

//                   }}

//               > login</Button>
//      </Card>
//      </center>

//     </div>

// }

// export default Signin;
