/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourses from "./components/Admin/AddCourses";
import Courses from "./components/Courses";
import AdminCourse from "./components/Admin/AdminCourse";
import { RecoilRoot, useSetRecoilState } from "recoil";
import Landing from "./components/Landing";
import axios from "axios";
import { BASE_URL } from "./config";
import { userState } from "./store/atoms/user";
import React from "react";
import AdminAppbar from "./components/Admin/AdminLogin";
import Admin from "./components/Admin/AdminLogin";
import AdminCourses from "./components/Admin/AdminCourses";
import MyChartComponent from "./components/Admin/Statics";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#131324",
        overflowX: "hidden",
      }}
    >
      <RecoilRoot>
        <Router>
          <Appbar />
          <InitUser />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/admin/addcourses" element={<AddCourses />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/user/courses" element={<Courses />} />
            <Route path="/admin/login" element={<Admin />} />
            <Route path="/course/:courseId" element={<AdminCourse />} />
            <Route path="/admin/courses" element={<AdminCourses />} />
            <Route path="/admin/statistic" element={<MyChartComponent />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}
function InitUser() {
  // whenever userState atoms changes this will not RERENDER InitUser

  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.data.username) {
        setUser({
          isloading: false,
          userEmail: response.data.username,
        });
      } else {
        setUser({
          isloading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isloading: false,
        userEmail: null,
      });
    }
  };
  return <></>;
}

export default App;
