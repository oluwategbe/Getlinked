import React from "react";
import "./index.css";

export default function Success() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="success">
      <div className="model">
        <div className="modelBox">
          <div className="imageContainer">
            <img src={require("../assets/images/congratulation.png")} alt="" />
          </div>
          <div className="downSection">
            <div className="text">
              <h1>Congratulations</h1>
              <h1>you have successfully Registered!</h1>
            </div>
            <p>
              Yes, it was easy and you did it! check your mail box for next step
              <img src={require("../assets/images/wink.png")} alt="" />
            </p>
            <button>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
