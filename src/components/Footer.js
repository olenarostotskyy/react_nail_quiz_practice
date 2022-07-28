import React from "react";
import About from "../pages/about";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        clasName="footer-info"
        style={{
          color: "yellow",
          textAlign: "center",
          marginTop: "-50px",
          marginRight: "50px",
          fontSize: "15px",
        }}
      >
        Useful info
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About</Heading>
            {/* <FooterLink href="#">Aim</FooterLink> */}
            <FooterLink href={"./about"}>Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Sevice 1</FooterLink>
            <FooterLink href="#">Sevice 2</FooterLink>
            {/* <FooterLink href="#">Sevice 3</FooterLink>
            <FooterLink href="#">Sevice 4</FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact me</Heading>
            {/* <FooterLink href="#">OR</FooterLink> */}
            <FooterLink href="#">Email me</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="https://github.com/olenarostotskyy">
              GitHub
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            {/* <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink> */}
            {/* <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink> */}
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
