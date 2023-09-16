import { Typography } from "@mui/material";
import { Button } from "@mui/material";


function Appbar(){

return <div style={{display: "flex",
justifyContent: "space-between", padding: "1rem"}}>

<div style={{backgroundColor: "red"}}>
<Typography variant="h5">Coursera</Typography>
</div>
<div>
<Button variant="contained" style={{marginRight: 5}}>Sign up</Button>
<Button variant="contained">Sign in</Button>
</div>
</div>


}

export default Appbar