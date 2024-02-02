import React from "react";
import "./ExperienceCard.css";

import exp_detail from "../Static Data/Exp";

// console.log(exp_detail[0])

function ExperienceCard() {
  return (
    <>
      <div className="exp_card">
        <div className="title">
          <h1>Techium Infotech Pvt. Ltd. </h1>
        </div>
        <div className="comp_detail">
          <p>
            Techium InfoTech is a leading software company providing the
            services of E-Commerce Development, Custom Web Development, Software
            Maintenance, Software Enhancement, Software Testing and various IT
            related supports and solution provider
          </p>
        </div>
        <div className="joining">
          <h3>From : July 2021 till Date</h3>
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
