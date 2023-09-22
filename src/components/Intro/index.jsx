import React from "react";
import "./index.css";

const Intro = () => {
  return (
    <section>
      <div className="sectionImg">
        <img src={require("../../assets/images/idea.png")} alt="idea" />
      </div>
      <div className="sectionText">
        <div className="heading">
          <h1>Introduction to getlinked</h1>
          <h1 style={{ color: "#D434FE" }}>tech Hackathon 1.0</h1>
        </div>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>
  );
};

export default Intro;
