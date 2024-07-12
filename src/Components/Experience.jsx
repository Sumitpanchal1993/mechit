import React from "react";
import ExpCard from "./Sub Components/ExpCard";
import "./Experience.css";
import exp_detail from '../Static Data/Exp'



export default function Experience() {
  return (
    <>
      <div className="expBase flex">
        <h2>Experience</h2>
        {exp_detail.map((item) => {
          return <ExpCard  key={item.id} item ={item} />;
        })}
      </div>
    </>
  );
}
