import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import "./LoginForm.css";

// import axios from "./api/axios";
// const LOGIN_URL = "/auth";

const Login = () => {
  const setAuth = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = fetch("http://127.0.0.1:5000/users/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      // const response = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ username, password }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //     withCredentials: true,
      //   }
      // );
      console.log(JSON.stringify(response));
      // //console.log(JSON.stringify(response));

      const accessToken = "token";
      const roles = "response?.data?.roles;";
      setAuth.setAuth(username);
      setUser("aa");
      setPwd("");
      setSuccess(true);
      console.log(success);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div className="login-success-container">
          <section className="login-section-success">
            <h1>You are logged in!</h1>
            <h2>{setAuth?.auth}</h2>
            <br />
            <p>
              <a href="/home">Go to Home</a>
            </p>
          </section>
        </div>
      ) : (
        <div className="login-container">
          <section className="login-section">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={username}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                required
              />
              <button>Sign In</button>
            </form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                {/*put router link here*/}
                <a href="/register">Register</a>
              </span>
            </p>
          </section>
        </div>
      )}
    </>
  );
};

export default Login;

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
// import "./LoginForm.css";
// import Avatar from "../pictures/avatar.jpeg";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const loginUser = () => {
//     console.log(email);
//     console.log(password);

//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <div className="login-container">
//       <h1>Log in</h1>
//       <div className="login-form">
//         <form className="form">
//           <div className="img-container">
//             <img src={Avatar} alt="Avatar" className="avatar"></img>
//           </div>

//           <div className="fields-container">
//             <label className="username">
//               <b>Username</b>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               value={email}
//               name="email"
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               required
//             ></input>

//             <label className="password">
//               <b>Password</b>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               name="password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               required
//             ></input>

//             <button onClick={loginUser} type="submit">
//               Log in
//             </button>
//             <div>
//               <small>
//                 Do not have account?<Link to="/sign-up">Create one</Link>{" "}
//               </small>
//             </div>
//           </div>
//         </form>
//         {/* <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               name="email"
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>
//           <br></br>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               name="password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group>
//           <Button as="sub" variant="primary" onClick={loginUser}>
//             Login
//           </Button>
//           <Form.Group>
//             <small>
//               Do not have account?<Link to="/sign-up">Create one</Link>{" "}
//             </small>
//           </Form.Group>
//         </Form> */}
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
