import React, { useEffect } from "react";

function ProgressDonut(props) {
    useEffect(() => {
        let progOD = document.querySelector(".prog_OD");
        let progVal = document.querySelector(".prog_data");
        let progStart = 0;
        let progEnd = Math.round(props.percent);
        let progSpeed = 50;
        console.log(progEnd)
        let progress = setInterval(() => {
          progStart++;
          if (progStart == progEnd) {
            clearInterval(progress);
          }
          progVal.textContent = progStart + "%";
          progOD.style.background = `conic-gradient(red ${
            (360 / 100) * progStart
          }deg, green 0deg) `;
        }, progSpeed);
      });

  return (
    <>
    <div className="progress">
                <div className="prog_OD">
                    <div className="prog_ID">
                        <div className="prog_data">{props.percent}%</div>
                    </div>
                </div>
                <h5>Percentage</h5>
            </div>
      
    </>
  )
}

export default ProgressDonut
