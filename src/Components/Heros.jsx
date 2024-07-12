import React from "react";
import Heroimg from "../Media/Heros Image.png";
import "./Heros.css";

function Heros() {
  return (
    <>
      <div className="heroBase flex" id='Home'>
        <div className="intro">
        <p>
          I'm <strong>Sumit Panchal</strong>
        </p>
        <p>React JS Developer & Web Developer</p>
        <button className="activeBtn">Hire Me</button>
        </div>
        <div className="heroimage"> 
          <img src={Heroimg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Heros;
