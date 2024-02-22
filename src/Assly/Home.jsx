import React from "react";
import { Link } from "react-router-dom";
// import MyButton from '../Components/MyButton'
import "../Assly/Home.css";
import Poster from "../Media/Poster3.png";

const aboutMe = () => {
  let menu = document.getElementsByClassName("explore_menu");
  if (menu[0].style.display === "flex") {
    menu[0].style.display = "none";
  } else menu[0].style.display = "flex";
};

function Home() {
  return (
    <>
      <div className="homecontainer">
        <div className="home_lhs">
          <div className="poster">
            <img src={Poster} alt="" />
          </div>
        </div>
        <div className="home_rhs">
          <div className="title">
            <h1>Hi ! Visitor This is:</h1>
            <p className="myHeading">Sumit Panchal</p>
            <p className="myBio">Web Developer and a Mechanical Engineer</p>
          </div>

          <div className="exp_btn">
            <button onClick={aboutMe}>
              <span>Explore About Me</span>
            </button>
            <div className="explore_menu">
              <Link to="/qualification">Qualification</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/contact">Hire Me</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
