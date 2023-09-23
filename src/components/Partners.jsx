import React from "react";
import "./index.css";

export default function Partners() {
  return (
    <div className="partners">
      <div className="header">
        <h1 className="section-header">Partners and Sponsors</h1>
        <p className="section-subtext">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="images">
        <div className="box">
          <div className="top">
            <div className="imgBox">
              <img
                src={require("../assets/images/libertyassured.png")}
                alt=""
              />
            </div>
            <div className="topLine"></div>
            <div className="imgBox">
              <img src={require("../assets/images/liberty.png")} alt="" />
            </div>
            <div className="topLine"></div>
            <div className="imgBox">
              <img src={require("../assets/images/winwise.png")} alt="" />
            </div>
          </div>
          <div className="horizLine">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="top">
            <div className="imgBox">
              <img src={require("../assets/images/whisper.png")} alt="" />
            </div>
            <div className="topLine"></div>
            <div className="imgBox">
              <img src={require("../assets/images/Paybox.png")} alt="" />
            </div>
            <div className="topLine"></div>
            <div className="imgBox">
              <img src={require("../assets/images/vuzual.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
