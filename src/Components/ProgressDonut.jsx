import React, { useEffect, useRef } from "react";
import "./ProgressDonut.css";

function ProgressDonut(props) {
  const progODRef = useRef(null);
  const progValRef = useRef(null);

  useEffect(() => {
    const progOD = progODRef.current;
    const progVal = progValRef.current;

    let progStart = 0;
    let progEnd = Math.round(props.percent);
    let progSpeed = 50;

    let progress = setInterval(() => {
      progStart++;
      if (progStart === progEnd) {
        clearInterval(progress);
      }
      progVal.textContent = progStart + "%";
      progOD.style.background = `conic-gradient(rgb(23, 182, 161) ${
        (360 / 100) * progStart
      }deg, rgb(211, 132, 14) 0deg)`;
    }, progSpeed);

    return () => {
      clearInterval(progress);
    };
  }, [props.percent]);

  return (
    <>
      <div className="progress">
        <div className="prog_OD" ref={progODRef}>
          <div className="prog_ID">
            <div className="prog_data" ref={progValRef}>
              {props.percent}%
            </div>
          </div>
        </div>
        <h5>Percentage</h5>
      </div>
    </>
  );
}

export default ProgressDonut;
