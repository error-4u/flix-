/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
 


function Appbar(){

  const navigate = useNavigate();

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