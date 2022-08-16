import React from "react";
import "./HowItWorks.css";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="how-container">
      <div className="how-text-card">
        <h1>Getting Started</h1>

        <p>
          Congratulations! You have chosen a career filled with unlimited
          potential, one that can take you in many directions and holds the
          possibility to make you a confident, successful professional. As a
          nail professional, you will play a vital role in the lives of your
          clients. Your clients will come to rely on you to provide them with
          ongoing service, helping them to look and feel their best. <br></br>
          According to Nails magazine industry statistics, in 2013, professional
          nail technicians performed more than 7.5 billion dollars’ worth of
          manicuring, pedicuring, and nail enhancement services for millions of
          fashion-conscious clients in the United States. The business of nails
          continues to progress and grow with new breakthroughs in product
          technologies, application techniques, and business strategy. The need
          for educated and competent nail technicians is expanding in the same
          way. All the preparation information is taken from official book
          "Milady Standard Nail Technology", which is the complete first step to
          basic nail technology that all professional nail technicians need to
          kick off their career. <br></br> All of the experiences in which you
          have the opportunity to participate will provide you with additional
          insights into the profession you have chosen. You will build a base of
          knowledge to pass state board exam. Whatever direction you choose, we
          wish you a successful and enjoyable journey!
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

export default HowItWorks;
