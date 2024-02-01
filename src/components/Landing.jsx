/* eslint-disable no-unused-vars */
import { Typography } from '@mui/material'
import React from 'react'

function Landing() {
  return (
    <div>
    <div style={{backgroundColor:"#00000076", display:"flex", margin:'10px', justifyContent:"space-between", borderRadius:"20px", marginTop:"30px", fontFamily:"monospace"}}>
      <div style={{position:"absolute", color: "#4e0eff", marginTop: "200px", marginLeft:"40px" }}>
        <span style={{textTransform:"uppercase"}}>Welcom to coursea</span>
      <Typography >
      <h1 style={{marginTop:"1px"}}>Best Online Education Expertise</h1>
      </Typography>
      <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </span>
      </div>
     
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <img src="src/assets/girl.webp" alt="eren" height={800} style={{width:"100%", borderRadius:"20px"}} />
      </div>
     <div>
      
     </div>
     <div>
     <center>
      <div style={{alignItems:"center", marginTop:"50px"}}>
      <h1 style={{color:"blue"}}>Learn from 275+ leading universities and companies with Coursera Plus</h1>
      </div>
      </center>
      <div  style={{marginTop:"50px", alignItems:"baseline"}}>
        <center>
        
         <span style={{margin:"10px"}}><img src="src/assets/googel.png" alt="xyz" /></span>
          <span style={{margin:"10px"}}><img src="src/assets/img.png" alt="xyz" /></span>
           <span style={{margin:"10px"}}><img src="src/assets/landing.png" alt="xyz" /></span>
            <span style={{margin:"10px"}}><img src="src/assets/ibm.png" alt="xyz" /></span>
             <span style={{margin:"10px"}}><img src="src/assets/stanford.png" alt="xyz" /></span>
            <span style={{margin:"10px"}}><img src="src/assets/msft.webp" alt="xyz" height={30} /></span> 
          </center>
      </div>
      </div>
      <div style={{display:"flex", marginTop:"80px", justifyContent:"space-around"}}>
        
      <img src="src/assets/sitting_girl.webp" alt="" srcset="" style={{height:"1000px", width:"100%", marginLeft:"0", paddingLeft:"0px"}}/>
      <div style={{fontSize:"46px", fontWeight:"500", lineHeight:"1,4", padding:"20px"}}>
        <h2 style={{color:"black"}}>Benefits About Online Learning Expertise </h2>
        </div>

        

      </div>
   
    </div>
  )
}

export default Landing
