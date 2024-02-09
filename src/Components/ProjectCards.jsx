import React from "react";
import "../Components/ProjectCards.css";
import Logo from "../Media/calc.png";

function Cards(props) {
  return (
    <>
      <div className="cardBody">
        <div className="card_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <h2>{props.data.title}</h2>
        </div>
        <div>
          <h4>Project Detail:</h4>
        </div>
        <div>
          <p>{props.data.detail}</p>
        </div>
        <div>
          <h4>Technologies Used:</h4>
          <ul className="list">
            {props.data.tech.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <button className="viewbtn">
            <a href={props.data.link} target="_blank">
              <span>View</span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
