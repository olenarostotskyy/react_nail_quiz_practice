import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../pictures/avatar.jpeg";

import "./signUp.css";
// import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = () => {
    console.log("Form submitted");
    console.log(username);
    console.log(email);
    console.log(password);

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
              value={confirmPassword}
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
        {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              value={username}
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <br></br>
          <Form.Group className="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <br></br>
          <Form.Group className="confirm-password">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>
          <br></br>
          <Form.Group className="form-button">
            <Button as="sub" variant="primary" onClick={submitForm}>
              Sign up
            </Button>
          </Form.Group>
          <br></br>
          <Form.Group>
            <small>
              Already have an account?<Link to="/login">Log in</Link>{" "}
            </small>
          </Form.Group>
        </Form> */}
      </div>
    </div>
  );
};

export default SignUp;
