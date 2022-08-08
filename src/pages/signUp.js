import React from "react";
import "./signUp.css";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h1>Sign Up</h1>
        <form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              // value={username}
              name="username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              // value={email}
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              // value={password}
              name="password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              // value={confirmPassword}
              name="confirmPassword"
            />
          </Form.Group>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
