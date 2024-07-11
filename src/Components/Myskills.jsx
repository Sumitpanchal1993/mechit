import React from "react";
import SkillCard from "./Sub Components/SkillCard";
import HTML from "../Media/HTML.png";
import CSS from "../Media/CSS.png";
import JS from "../Media/Javascript.png";
import REACT from "../Media/React.png";
import PYTHON from "../Media/Python.png";
import REDUX from "../Media/Redux.png";
import "./Myskills.css";

const skills = [
  { id: 1, language: "HTML", logo: HTML, level: 90 },
  { id: 2, language: "CSS", logo: CSS, level: 80 },
  { id: 3, language: "JavaScript", logo: JS, level: 70 },
  { id: 4, language: "React JS", logo: REACT, level: 70 },
  { id: 5, language: "Python", logo: PYTHON, level: 40 },
  { id: 6, language: "Redux", logo: REDUX, level: 60 },
];

function Myskills() {
  return (
    <>
      <div className="skillsBase flex">
        <div>
          <h2>My Skills :</h2>
        </div>
        <div className="skill_list flex">
          {skills.map((item) => {
            return <SkillCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Myskills;
