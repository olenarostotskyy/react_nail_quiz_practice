import React from "react";
import "./Influencer.css";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Tom from "../pictures/Tom Bachik.webp";
import Ali from "../pictures/allie_baker.webp";
import Amy from "../pictures/amy_backer.webp";
import Diana from "../pictures/diana_bonn.jpeg";
import Renee from "../pictures/renee.webp";
import Alisha from "../pictures/alisha.webp";
import Lashaun from "../pictures/Lashaun.webp";
import April from "../pictures/aplril.webp";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Influencer = () => {
  return (
    <div className="influencer">
      <h1 style={{ textAlign: "center" }}>Get to know famous nail techs:</h1>
      <div>
        <Carousel className="car" breakPoints={breakPoints}>
          <Item>
            <div className="inf-card">
              <div>
                <h1 className="inf-name">Tom Bachik</h1>
              </div>
              <div className="img-container">
                <img src={Tom} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  World-renowned nail tech Tom Bachik has made headlines as a
                  nail competitor (ranking on NAILS’ Top 25 list many times) and
                  manicurist to the stars, while his cutting-edge nail designs
                  have been featured on magazine covers (including many for
                  NAILS), other editorial and commercial photo shoots, and on
                  fashion runways. Together with nail tech Tom Holcomb, Bachik
                  was part of the startup team for Entity Beauty Products in
                  2005. In 2013, he appeared on an episode of reality show
                  Project Runway to do nail consultations, educating the models
                  and the general public about nails. He was recently named OPI
                  Global Nail Ambassador.
                </p>
              </div>
            </div>
          </Item>
          <Item>
            {" "}
            <div className="inf-card">
              <div>
                <h1 className="inf-name">Allie Baker</h1>
              </div>
              <div className="img-container">
                <img src={Ali} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  Veteran competitor Allie Baker has been doing nails for 20
                  years and is currently global brand ambassador for EzFlow (a
                  position she's held for 15 years). In 2012, Baker earned the
                  number-one spot on the NAILS Top 25 competitors list. When not
                  globe-trotting for EzFlow, Baker can be found at her Medford,
                  Ore.-based salon, Nail It!
                </p>
              </div>
            </div>
          </Item>
          <Item>
            {" "}
            <div className="inf-card">
              <div>
                <h1 className="inf-name">Amy Becker</h1>
              </div>
              <div className="img-container">
                <img src={Amy} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  Amy Becker first appeared on the national radar in 1994 when
                  she made NAILS Top 25 competitors ranking, and the
                  Wisconsin-based nail tech quickly leveraged competitions to
                  build her reputation and skills. As an early adopter of gel
                  nails (when most other techs were doing liquid-and-powder
                  acrylics), Becker developed and refined gel application
                  techniques before ultimately launching her own gel brand,
                  Masterworks by Amy Becker.
                </p>
              </div>
            </div>
          </Item>
          <Item>
            {" "}
            <div className="inf-card">
              <div>
                <h1 className="inf-name">Diana Bonn</h1>
              </div>
              <div className="img-container">
                <img src={Diana} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  Many nail techs have taken up the fight against acrylic
                  ingredient MMA (methyl methacrylate), but few have gone as
                  many rounds as Diana Bonn. Her efforts to educate consumers,
                  clients, and legislators culminated in an appearance before
                  the Indiana State Senate committee. Soon afterward, Indiana
                  enacted a law banning MMA use. Bonn later obtained a position
                  on Indiana’s State Board of Cosmetology, a role she holds to
                  this day.
                </p>
              </div>
            </div>
          </Item>
          <Item>
            {" "}
            <div className="inf-card">
              <div>
                <h1 className="inf-name">Renee Borowy</h1>
              </div>
              <div className="img-container">
                <img src={Renee} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  V.I.P. Salon & Spa owner Renee Borowy shared the most
                  devastating experience of her life in the pages of NAILS in
                  order to prevent others from making the same mistake. In an
                  article titled "Misclassification: The Ultimate Nightmare,"
                  Borowy explains how she unintentionally misclassified the nail
                  techs in her Riverview, Mich., salon, despite having hired a
                  CPA to help set up its business structure. After the
                  government determined the salon’s nail techs should have been
                  classified as employees, Borowy had to pay an unexpected
                  $43,000. The veteran salon owner and NAILS' 2006 Salon of the
                  Year winner remains an evangelist for proper worker
                  classification.
                </p>
              </div>
            </div>
          </Item>
          <Item>
            {" "}
            <div className="inf-card">
              <div>
                <h1 className="inf-name">Alisha Rimando Botero</h1>
              </div>
              <div className="img-container">
                <img src={Alisha} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  World champion nail artist Alisha Rimando Botero has trained
                  nail professionals around the globe via live classes and
                  educated countless others through contributions to textbooks
                  like Milady’s Standard Nail Technology Workbook, all while
                  writing procedures for numerous manufacturers and salon
                  franchises. Instrumental in co-founding Entity Beauty and
                  currently creative director at Artistic Nail Design, Botero’s
                  lengthy resume also includes being a celebrity manicurist,
                  being hired for editorial and marketing photo shoots, styling
                  nails for the runways of New York Fashion Week, and judging
                  nail competitions like NTNA and Nailympia.
                </p>
              </div>
            </div>
          </Item>
          <Item>
            {" "}
            <div className="inf-card">
              <div>
                <h1 className="inf-name">LáShaun Brown-Glenn</h1>
              </div>
              <div className="img-container">
                <img src={Lashaun} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  LáShaun Brown-Glenn is an all-around nail star. The longtime
                  owner of Chicago's Nails Naturally salon earned an early
                  accolade by being named NAILS Nail Technician of the Year for
                  1999-2000. She has worked for several nail manufacturers,
                  including being a CND education ambassador for a decade. These
                  days, she focuses much of her time on motivational speaking
                  and on her coaching and consulting firm Speaking On Point. She
                  also recently launched a Wordpress blog dubbed LáShaun Speaks.
                </p>
              </div>
            </div>
          </Item>
          <Item>
            {" "}
            <div className="inf-card">
              <div>
                <h1 className="inf-name">April Buford</h1>
              </div>
              <div className="img-container">
                <img src={April} alt="Avatar" className="inf-avatar"></img>
              </div>
              <div className="inf-info">
                <p>
                  In 1996, instructor April Buford won the first-ever NAILS
                  Educator of the Year award. She ran educational company Nails
                  Consultants and inspired Truman College in Chicago to add a
                  nail program, for which she then began teaching courses.
                </p>
              </div>
            </div>
          </Item>
        </Carousel>
      </div>
    </div>
  );
};
export default Influencer;
