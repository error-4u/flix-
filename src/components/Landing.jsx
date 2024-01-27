/* eslint-disable no-unused-vars */
import React from 'react'

function Landing() {
  return (
    <div style={{backgroundColor:"red", display:"flex",margin:'10px', justifyContent:"space-between"}}>
      <div>
      <h1 style={{position:"absolute", textAlign:"center", alignItems:"center" }}>This is landing page</h1>
      </div>
      <img src="src/assets/eren.jpg" alt="eren" height={900} style={{width:"100%"}} />
    </div>
  )
}

export default Landing
