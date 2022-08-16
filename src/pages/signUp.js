import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../pictures/avatar.jpeg";

import "./signUp.css";
// import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed_password, setConfirmPassword] = useState("");

  const submitForm = (e) => {
    console.log("Form submitted");
    console.log(username);
    // console.log(email);
    console.log(password);

    e.preventDefault();
    const user = { username, password, confirmed_password, email };

    console.log(JSON.stringify(user));

    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("new user added");
      console.log(password);
    });

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <div className="sign-up-form">
        <form className="form">
          <div className="img-container">
            <img src={Avatar} alt="Avatar" className="avatar"></img>
          </div>

          <div className="fields-container">
            <label className="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            ></input>
            <label className="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>

            <label className="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            ></input>

            <label className="confirm-password">
              <b>Confirm password</b>
            </label>
            <input
              type="confirm-password"
              placeholder="Confirm Password"
              value={confirmed_password}
              name="confirmPassword"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
            ></input>

            <button onClick={submitForm} type="submit">
              Sign up
            </button>
            <div>
              <small>
                Already have an account?<Link to="/login">Log in</Link>{" "}
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
