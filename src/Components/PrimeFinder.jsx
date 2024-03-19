import React, { useState } from "react";

function PrimeFinder() {
  const [result, setResult] = useState();
  const [divideBy, setDivideBy] = useState();
  let arr = [2, 3, 4, 4, 4, 5, 65, 5, 5]

  function primeCheck() {
    let userValue = document.getElementById("input");
    userValue = Number(userValue.value);
    let nearestSq = Math.ceil(userValue ** 0.5 + 1);
    for (let i = 2; i < nearestSq; i++) {    
      let dividecheck = userValue % i;
      if (dividecheck === 0) {
        console.log(
          `Prime no Nahi hai, ye ${i} se Divide hogaya ${userValue / i} times`
        );
        setResult(false);
        setDivideBy(i)
        break;
      } else setResult(true);
    }
    return result;
  }

  return (
    <div>
      <div>
        <label htmlFor="userInput">Enter the Number To check for Prime</label>
        <input
          type="number"
          name="userInput"
          id="input"
          placeholder="Enter only the Number no alphabets"
        />
      </div>
      <div>
        <button className ='mybtn' onClick={primeCheck}> <span>Check</span></button>
      </div>
      <div>
        <p>{arr}</p>
      </div>
      <div>
        {result ? (
          <p id="result">The Number is Prime</p>
        ) : (
          <p id="result">
            The Number is not Prime it is divisible by {divideBy}
          </p>
        )}
      </div>
    </div>
  );
}

export default PrimeFinder;
