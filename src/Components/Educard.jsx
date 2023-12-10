import React, { useEffect } from "react";
import "./Educard.css";

function Educard(props) {
//   useEffect(() => {
//     let progOD = document.querySelector(".prog_OD");
//     let progVal = document.querySelector(".prog_data");
//     let progStart = 0.0;
//     let progEnd = 80;
//     let progSpeed = 50;
//     let progress = setInterval(() => {
//       progStart++;
//       if (progStart == progEnd) {
//         clearInterval(progress);
//       }
//       progVal.textContent = progStart + "%";
//       progOD.style.background = `conic-gradient(red ${
//         (360 / 100) * progStart
//       }deg, green 0deg) `;
//     }, progSpeed);
//   });

  return (
    <>
      <div className="edu_base">
            <div className="progress">
                <div className="prog_OD">
                    <div className="prog_ID">
                        <div className="prog_data">{props.percent}%</div>
                    </div>
                </div>
                <h5>Percentage</h5>
            </div>
    
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
            <button>Know More</button>
            </div>
      </div>
    </>
  );
}

export default Educard;
