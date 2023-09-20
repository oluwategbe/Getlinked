import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <img
          src={require("../../assets/images/star.png")}
          alt="Star"
          id="bright-star"
        />
        <div className="about">
          <div className="aboutTop">
            <h1>
              get<span>linked</span>
            </h1>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="terms">
            <h3>Terms of Use</h3>
            <hr />
            <h3>Privacy</h3>
          </div>
        </div>
        <div className="footerRight">
          <div className="links">
            <h2>Useful Links</h2>
            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="follow">
              <p>Follow us</p>
              <a href="/">
                <img
                  src={require("../../assets/images/instagram.png")}
                  alt="Instagram"
                />
              </a>
              <a href="/">
                <img src={require("../../assets/images/twitter.png")} alt="X" />
              </a>
              <a href="/">
                <img
                  src={require("../../assets/images/facebook.png")}
                  alt="Facebook"
                />
              </a>
              <a href="/">
                <img
                  src={require("../../assets/images/linkedin.png")}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/images/dimstar.png")}
            alt="Star"
            id="dim-star"
          />
          <div className="contact">
            <h2>Contact Us</h2>
            <span>
              <img src={require("../../assets/images/call.png")} alt="Call" />
              <p>+234 6707653444</p>
            </span>
            <span>
              <img
                src={require("../../assets/images/location.png")}
                alt="Location"
              />
              <p>27,Alara Street Yaba 100012 Lagos State</p>
            </span>
          </div>
          <img
            src={require("../../assets/images/star.png")}
            alt="Star"
            id="star"
          />
        </div>
      </div>
      <img
        src={require("../../assets/images/star-purple.png")}
        alt="Star"
        id="purple-star"
      />
      <p>All rights reserved. © getlinked Ltd.</p>
    </div>
  );
};

export default Footer;
