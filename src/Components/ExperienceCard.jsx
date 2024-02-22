import React from "react";
import "./ExperienceCard.css";

import exp_detail from "../Static Data/Exp";

// console.log(exp_detail[0])
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function ExperienceCard(props) {
  console.log(typeof props.companyJoin);
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
          <h3>
            From :
            {month[props.companyJoin.getMonth()] +
              " " +
              props.companyJoin.getFullYear() +
              " "}
            {props.companyEnd ? "" : "till Date"}
          </h3>
        </div>
        {props.companyEnd ? (
          <div className="joining">
            <h3>
              Till :
              {month[props.companyEnd.getMonth()] +
                " " +
                props.companyEnd.getFullYear() +
                " "}
            </h3>
          </div>
        ) : (
          ""
        )}
        <div className="post">
          <h3>Work as : {props.companyPost}</h3>
        </div>
        <div className="role">
          <ul>{/* <li>create Fornt end of applications</li> */}</ul>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
