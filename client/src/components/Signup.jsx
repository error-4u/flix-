/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const handlesignup = async () => {
    if (!email.trim() || password.length < 6) {
      alert("Invalid email & password");
    }
    const res = await axios.post("http://localhost:3000/user/signup", {
      username: email,
      password: password,
    });
    let data = res.data;
    localStorage.setItem("token", data.token);
    setUser({ userEmail: email, isLoading: false });
    navigate("/user/courses");
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
          onClick={handlesignup}
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
          SignUP
        </button>
        <span style={{ color: "white", textTransform: "uppercase" }}>
          Allready have an account ?{" "}
          <Link
            style={{
              color: "#4e0eff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/login"
          >
            Create One.
          </Link>
        </span>
        <span style={{ color: "white", textTransform: "uppercase" }}>
          Login as <span></span>
          <Link
            style={{
              color: "#4e0eff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/admin/login"
          >
            ADMIN ?
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
