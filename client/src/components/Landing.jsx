/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import React from "react";
import "./css/landing.css";
import Footer from "./Footer";
import CoreFeatures from "./CoreFeatures";
import BrowseCourse from "../pages/BrowseCourse";
import Instructor from "../pages/Instructor";
import PopularCourses from "../pages/PopularCourses";
import Register from "../pages/Register";
import Slider2 from "../pages/Slider2";

function Landing() {
  return (
    <div>
      <div
        className="flex flex-col lg:text-sm md:flex"
        style={{
          backgroundColor: "green",
          display: "flex",
          margin: "10px",
          justifyContent: "space-between",
          borderRadius: "20px",
          marginTop: "30px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            color: "#4e0eff",
            marginTop: "200px",
            marginLeft: "40px",
          }}
        >
          <span style={{ textTransform: "uppercase", fontSize: "2.7rem" }}>
            <span className="text-black"> Welcome to </span> coursea
          </span>
          <Typography>
            <h1
              className="text-black"
              style={{ marginTop: "3px", fontSize: "1.4rem" }}
            >
              Best Online Education Expertise
            </h1>
          </Typography>
          <span
            className="text-sm mt-5 text-indigo-700"
            style={{ marginTop: "1rem" }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and <br /> Consonantia, there live the blind texts.
          </span>
        </div>

        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <img
          src="/girl.webp"
          alt="eren"
          height={800}
          style={{ width: "100%", borderRadius: "20px" }}
        />
      </div>

      <div>
        <center>
          <div
            style={{ alignItems: "center", marginTop: "50px" }}
            className="text-5xl"
          >
            <h1 style={{ color: "#4e0eff" }}>
              Learn from 275+ leading universities and companies with Coursera
              Plus
            </h1>
          </div>
        </center>
      </div>
      <div
        className="flex-row flex items-center justify-center"
        style={{
          marginTop: "50px",
          alignItems: "baseline",
        }}
      >
        <span style={{ margin: "10px", padding: "10px" }}>
          <img src="/googel.png" alt="xyz" />
        </span>
        <span style={{ margin: "10px", padding: "1rem" }}>
          <img src="/img.png" alt="xyz" />
        </span>
        <span style={{ margin: "10px", padding: "1rem" }}>
          <img src="/landing.png" alt="xyz" />
        </span>
        <span style={{ margin: "10px", padding: "1rem" }}>
          <img src="/ibm.png" alt="xyz" />
        </span>
        <span style={{ margin: "10px", padding: "1rem" }}>
          <img src="/stanford.png" alt="xyz" />
        </span>
        <span style={{ margin: "10px", padding: "1rem" }}>
          <img src="/msft.webp" alt="xyz" width={130} />
        </span>
      </div>

      <div className="items-center justify-center">
        <center>
          <CoreFeatures />
        </center>
      </div>

      <div>
        <center>
          <PopularCourses />
        </center>
      </div>
      <div>
        <center>
          <Instructor />
        </center>
      </div>
      <div>
        <center>
          <Register />
        </center>
      </div>
      <div>
        <center>
          <Slider2 />
        </center>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "80px",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <img
          src="/sitting_girl.webp"
          alt=""
          srcset=""
          style={{
            height: "1000px",
            width: "100%",
            marginLeft: "0",
            paddingLeft: "0px",
          }}
        />
        {/* <div style={{minWidth:"1000px"}}>
       
      <div style={{fontSize:"46px", fontWeight:"500", lineHeight:"1,4", padding:"20px"}}>
        <div style={{color:"#4e0eff",fontSize:"16px", fontWeight:"700"}}>LEARN ANYTHING</div>
        <h2 style={{color:"black", marginTop:"1px",whiteSpace:"nowrap", marginRight:"220px" }}>Benefits About Online <br />Learning Expertise </h2>
     
        <div style={{fontSize:"20px", fontWeight:"500", fontFamily:"Roboto"}}>Online Courses</div>
        <p>Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind texts.</p>
        </div> 
        </div>  */}

        <div className="col-md-6 heading-section d-flex align-items-center">
          <div className="mt-0 my-lg-5 py-5">
            <span className="subheading">LEARN ANYTHING</span>
            <h2 className="mb-2">
              Benefits About Online <br /> Learning Expertise
            </h2>
            <div className="row mt-4 g-lg-2">
              <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                <div className="services d-flex">
                  <div className="icon">
                    <span className="flaticon-online-learning"></span>
                  </div>
                  <div className="text">
                    <h2>Online Courses</h2>
                    <p style={{ marginBottom: 0, opacity: "0.9" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                <div className="services d-flex">
                  <div className="icon">
                    <span className="flaticon-certificate"></span>
                  </div>
                  <div className="text">
                    <h2>Earn A Certificates</h2>
                    <p style={{ marginBottom: 0, opacity: "0.9" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                <div className="services d-flex">
                  <div className="icon">
                    <span className="flaticon-scientist"></span>
                  </div>
                  <div className="text">
                    <h2>Learn with Expert</h2>
                    <p style={{ marginBottom: 0, opacity: "0.9" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
