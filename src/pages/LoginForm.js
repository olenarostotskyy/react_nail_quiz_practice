import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import Avatar from "../pictures/avatar.jpeg";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="login-container">
      <h1>Log in</h1>
      <div className="login-form">
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

            <button onClick={loginUser} type="submit">
              Log in
            </button>
            <div>
              <small>
                Do not have account?<Link to="/sign-up">Create one</Link>{" "}
              </small>
            </div>
          </div>
        </form>
        {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button as="sub" variant="primary" onClick={loginUser}>
            Login
          </Button>
          <Form.Group>
            <small>
              Do not have account?<Link to="/sign-up">Create one</Link>{" "}
            </small>
          </Form.Group>
        </Form> */}
      </div>
    </div>
  );
}

export default LoginForm;
