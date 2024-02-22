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
<<<<<<< HEAD
=======
  console.log(typeof props.companyJoin);
>>>>>>> 3118bb4595b17fc1185e600d7b083c06ac11b6ef
  return (
    <>
      <div className="exp_card">
        <div className="title">
          <h1>{props.companyName}</h1>
        </div>
        <hr />
        <div className="comp_detail">
          <p>{props.companyDetail}</p>
        </div>
        <div className="joining">
          <h3>
            From :
<<<<<<< HEAD
            {month[props.companyJoin.getMonth() + 1] +
=======
            {month[props.companyJoin.getMonth()] +
>>>>>>> 3118bb4595b17fc1185e600d7b083c06ac11b6ef
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
<<<<<<< HEAD
              {month[props.companyEnd.getMonth() + 1] +
=======
              {month[props.companyEnd.getMonth()] +
>>>>>>> 3118bb4595b17fc1185e600d7b083c06ac11b6ef
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
