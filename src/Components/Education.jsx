import React from "react";
import ExpCard from "./Sub Components/ExpCard";
import edu_data from "../Static Data/Study";
import './Education.css'

function Education() {
  return (
    <>
      <div className="educationBase flex">
        <h2>Education:</h2>
        <div>
          {edu_data.map((item) => {
            return <ExpCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
