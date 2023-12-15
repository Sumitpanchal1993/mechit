import React, { useEffect } from "react";
import "./Educard.css";
import ProgressDonut from './ProgressDonut'

function Educard(props) {
  return (
    <>
      <div className="edu_base">
            <ProgressDonut percent={props.percent}/>
    
            <div className="edu_detail">
                <div className="course_name">
                    <h3>{props.title}</h3>
                </div>
                <div className="name_detail">
                    <p>From:</p>
                    <p>{props.school}</p>
                </div>
                <div className="name_detail">
                    <p>Location:</p>
                    <p>{props.city}</p>
                </div>
                <div className="name_detail">
                    <p>Specialization:</p>
                    <p>{props.splz}</p>
                </div>
                <div className="name_detail">
                    <p>Percentage:</p>
                    <p>{props.percent}%</p>
                </div>
                <div className="name_detail">
                    <p>Year of Passing</p>
                    <p>{props.year}</p>
                </div>
               
            </div>
            <div>
            <a href={props.link}>
            <button>Know More</button>
            </a>
            </div>
      </div>
    </>
  );
}

export default Educard;
