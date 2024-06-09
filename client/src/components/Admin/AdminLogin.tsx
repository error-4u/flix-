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
import { userState } from "../../store/atoms/user";
import { Link } from "react-router-dom";
import React from "react";

function Admin() {
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
      const res = await axios.post("http://localhost:3000/admin/login", {
        username: email,
        password: password,
      });

      const data = await res.data;
      localStorage.setItem("token", data.token);
      if (data.token) {
        setUser({
          userEmail: email,
          isLoading: false,
        });
        navigate("/admin/courses");
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
          <h1 style={{ color: "#4e0eff", textTransform: "uppercase" }}>
            Admin login
          </h1>
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
      </div>
    </div>
  );
}

export default Admin;
