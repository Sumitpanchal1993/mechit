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
          <h1>{props.data.title}</h1>
        </div>
        <div>
          <h4>Project Detail:</h4>
        </div>
        <div>
          <p>{props.data.detail}</p>
        </div>
        <div>
          <h4>Technologies Used:</h4>
          <ul>
            {props.data.tech.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <h4>Project Link:</h4>
          <a href="" target="_blank">
            {props.data.link}
          </a>
        </div>
        <div>
          <button className="viewbtn">
            {/* <span className="material-symbols-outlined">visibility</span> */}
            <span>View</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
