import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text-card">
        <h1>Our mission</h1>
        <p className="quote">Keep calm and nail it!</p>
        <p>
          We want to deliver the nail exam preraration tool with quality that is
          unbeatable in Washingron area. Our principle is to focus on the
          training of recent nail's school graduets, so they are always up to
          date with the newest board exam preparation information. We believe in
          strong management and continuous self-development. We want to help you
          to celebrate yourself in your real, most raw, authentic brilliance,
          who believes in yourselves and are ready to step into the carier you
          love.
        </p>
        <div className="about-contact-us">
          <p> If you have any questions, please let us know!</p>
          <div className="link">
            <Link className="nav-links" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
