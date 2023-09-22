import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTop">
        <h2>Igniting a Revolution in HR Innovation</h2>
        <img
          src={require("../../assets/images/low-bar.png")}
          alt="Bar"
          id="low-bar"
        />
      </div>
      <div className="headerBottom">
        <div className="text">
          <h1>
            getlinked Tech Hackathon <span>1.0</span>
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button>Register</button>
          <div className="time">
            <h3>
              00<span>H</span>
            </h3>
            <h3>
              00<span>M</span>
            </h3>
            <h3>
              00<span>S</span>
            </h3>
          </div>
        </div>
        <div className="images">
          <img src={require("../../assets/images/man.png")} alt="Bar" />
          <img
            src={require("../../assets/images/shining-world.png")}
            alt="world"
            id="shinning-world"
          />
          {/* <div className="overlay"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
