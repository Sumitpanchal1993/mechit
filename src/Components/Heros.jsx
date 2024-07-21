import React from "react";
import Heroimg from "../Media/Heros Image.png";
import "./Heros.css";
import  Resume from '../Media/Sumit_Panchal_ReactJS_Developer_Immediate_Joiner.pdf'

const onButtonClick = () => {
  const pdfUrl = Resume;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Sumit_Panchal_ReactJS_Developer_Immediate_Joiner.pdf"; // specifying  filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Heros() {
  return (
    <>
      <div className="heroBase flex" id='Home'>
        <div className="intro">
        <p>
          I'm <strong>Sumit Panchal</strong>
        </p>
        <p>React JS Developer & Web Developer</p>
        <button className="activeBtn" onClick={()=>{onButtonClick()}} > <a download={'../pdf'}>Hire Me</a></button>
        </div>
        <div className="heroimage"> 
          <img src={Heroimg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Heros;
