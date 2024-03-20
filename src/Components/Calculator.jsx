import React, { useEffect, useState } from "react";
import "./Calculator.css";

function Calculator() {
  useEffect(() => {
    //Variables
    let calcBtn = document.querySelectorAll("button");
    calcBtn = Array.from(calcBtn);  
    let display = document.getElementById("screen");
    let output = "";

    calcBtn.forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          if (e.target.innerHTML === "=") {
            output = eval(output);
            display.value = output;
          } else if (e.target.innerHTML === "AC") {
            output = "";
            display.value = output;
          } else if (e.target.innerHTML === "%") {
            output = output * 0.01;
            display.value = output;
          } else if (e.target.innerHTML === "Del") {
            output = output.slice(0, output.length - 1);
            display.value = output;
          } else {
            output += e.target.innerHTML;
            display.value = output;
          }
        });
      },
      [output]
    );
  });
  

  return (
    <>
      <div className="calcBody">
        <div className="title">
          <h3>Calculator</h3>
        </div>
        <div className="screen">
          <input
            type="text"
            name="display"
            id="screen"
            readOnly={true}
          />
        </div>
        <div className="keybord">
          <div className="keyRow">
            <button id="clear">AC</button>
            <button id="delete">Del</button>
            <button>%</button>
            <button>/</button>
          </div>
          <div className="keyRow">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
          </div>
          <div className="keyRow">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>
          <div className="keyRow">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>
          <div className="keyRow">
            <button>00</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>

      <div>Instruction to use:</div>
      <div>
        <ul>
          <li>For power press * twice</li>
        </ul>
      </div>
    </>
  );
}

export default Calculator;
