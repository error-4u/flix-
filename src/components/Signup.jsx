/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';


function Signup({setUserEmail}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  return <div>
          <div style={{
              paddingTop: 150,
              marginBottom: 10,
              display: "flex",
              justifyContent: "center"
          }}>
              <Typography variant={"h6"}>
              Welcome to Coursera. Sign up below
              </Typography>
          </div>
      <div style={{display: "flex", justifyContent: "center"}}>
          <Card varint={"outlined"} style={{width: 400, padding: 20}}>
              <TextField
                  onChange={(evant11) => {
                      let elemt = evant11.target;
                      setEmail(elemt.value);
                  }}
                  fullWidth={true}
                  label="Email"
                  variant="outlined"
              />
              <br/><br/>
              <TextField
                  onChange={(e) => {
                      setPassword(e.target.value);
                  }}
                  fullWidth={true}
                  label="Password"
                  variant="outlined"
                  type={"password"}
              />
              <br/><br/>
              <center>
              <Button
                  size={"large"}
                  variant="contained"
                  style={{width:400}}
                  onClick={async() => {
                      const response = await axios.post("http://localhost:3000/admin/signup", {
                          username: email,
                          password: password
                      })
                      let data = response.data;
                      localStorage.setItem("token", data.token);
                      setUser({userEmail: email, isLoading: false})
                      navigate('/courses')
                   
                  }}

              > Signup</Button>
              </center>
          </Card>
      </div>
  </div>
}

export default Signup;