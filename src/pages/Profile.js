import { React, useEffect, useContext, useState } from "react";
import "./Profile.css";
import AuthContext from "./../pages/context/AuthProvider";
import { Link } from "react-router-dom";

const Profile = ({ data }) => {
  const user = useContext(AuthContext);
  const [maxScore, setMaxScore] = useState("");
  const [lastScore, setLastScore] = useState("");
  const [success, setSuccess] = useState(false);

  const ApiUrl = "http://127.0.0.1:5000/users/" + user.auth[0] + "/score";
  useEffect(() => {
    console.log(user.auth);
    if (user.auth[0] !== "") {
      fetch(ApiUrl)
        .then((res) => res.json())
        .then((data) => {
          let temp = NaN;
          data.map((score) => {
            if (Number.isNaN(temp) || parseInt(score.score) > temp) {
              temp = parseInt(score.score);
              console.log(temp);
            }

            if (temp !== NaN) {
              setMaxScore(temp);
              setLastScore(score.score);
            }

            setSuccess(true);
          });
        });
    }
  }, []);

  return (
    <>
      {success ? (
        <div className="profile-container">
          <div className="profile-header">
            <h1>Welcome {user.auth[1]}!</h1>
          </div>
          <div className="profile-card">
            <p>Username: {user.auth[1]}</p>
            <p>Your max score: {maxScore}</p>
            <p>Your latest Score: {lastScore}</p>
            <div className="profile-text-card">
              <div className="user-score-info"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="profile-info-not-logged-container">
          <div className="profile-not-logged-card">
            <p>
              In order to see your personal information, you have to log in!
            </p>

            <Link className="nav-links" to="/login">
              Log in
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
