import React from "react";
import "./ExperienceCard.css";

import exp_detail from "../Static Data/Exp";

// console.log(exp_detail[0])

function ExperienceCard(props) {
  console.log(props.companyJoin);
  return (
    <>
      <div className="exp_card">
        <div className="title">
          <h1>{props.companyName}</h1>
        </div>
        <div className="comp_detail">
          <p>{props.companyDetail}</p>
        </div>
        <div className="joining">
          <h3>From :{toString(props.companyJoin)}till Date</h3>
        </div>
        <div className="post">
          <h3> Currently Working as : FrontEnd Developer</h3>
        </div>
        <div className="role">
          <ul>{/* <li>create Fornt end of applications</li> */}</ul>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
