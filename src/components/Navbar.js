import React, { useState, useEffect, useContext } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "./../pages/context/AuthProvider";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const setAuth = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {Number.isInteger(setAuth.auth[0]) == false ? (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              NE
              <i class="fas fa-archway" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/test"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Test
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/flash-cards"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Flash Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Login/signUp
                </Link>
              </li>
            </ul>
            {/* {button && <Button buttonStyle="btn-outline">SIGN UP</Button>} */}
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              NE
              <i class="fas fa-archway" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/test"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Test
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/flash-cards"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Flash Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Logged in as: {setAuth?.auth[1]}
                </Link>
              </li>
            </ul>
            {/* {button && <Button buttonStyle="btn-outline">SIGN UP</Button>} */}
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
