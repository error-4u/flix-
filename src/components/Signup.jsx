/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
function Signup(){


return <div style={{marginTop: 200}}>
        <center>
        <div>Welcome to Coursera. Sign Up</div>
      <Card variant = {"outlined"} style = {{width : 400 }}>
     <TextField 
     fullWidth ={true}
     id="outlined-basic" label="Email" variant="outlined" />
     <br /> <br />
     <TextField 
     fullWidth = {true}
     id="outlined-basic" label="Password" variant="outlined" />
     <br /> <br />
     <Button variant="contained">Sign up</Button>
     </Card>
     </center>

    </div>


}

export default Signup;