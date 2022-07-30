import React from "react";
import { Link } from "react-router-dom";
import nail_home_video from "../videos/nail_video.mp4";

import "../App.css";
import { Button } from "../components/Button";
import "./home_page.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* <video className="videoTag" autoPlay loop muted>
        <source src={nail_home_video} type="video/mp4" />
      </video> */}
      <h1>FUTURE AWAITS</h1>
      <p>Pick where you want to start</p>
      <div className="home-btns">
        <Link to="./test">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            TAKE TEST <i className="fas fa-book" />
          </Button>
        </Link>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          FLASH CARDS <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
