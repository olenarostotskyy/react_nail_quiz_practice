import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import "./LoginForm.css";
import Avatar from "../pictures/avatar.jpeg";

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
      const response = fetch(
        "https://nail-practicer.herokuapp.com/users/auth",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setAuth.setAuth([data.Id, data.username]);
          console.log(data);
        });

      setUser("a");
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
            {/* <h2>{setAuth?.auth[0]}</h2> */}
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
            <div className="img-container">
              <img src={Avatar} alt="Avatar" className="avatar"></img>
            </div>
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
