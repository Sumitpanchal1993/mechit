import React from "react";
import "../Assly/SmallProject.css";
import PrimeFinder from "../Components/PrimeFinder";
import Calculator from "../Components/Calculator";

function SmallProject() {
  return (
    <>
      <div className="smallProjectBase">
        <div className="smallproject_list">
        <div>
          <Calculator />
        </div>
          <PrimeFinder />
        </div>
      </div>
    </>
  );
}

export default SmallProject;
