import React, { useState } from "react";

export default function RandomNubmer() {
  const [randomNumber, setRandomNumber] = useState(null);

  const handleClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newRandomNumber);
    console.log(`Random number: ${newRandomNumber}`);
  };

  return (
    <div className="col-md-4">
      <label htmlFor="generateRandomNubmer" className="form-label">
        Random Number
      </label>
      <br />
      <button
        id="generate-button"
        className="btn btn-primary btn-lg"
        onClick={handleClick}
      >
        Generate
      </button>
      {randomNumber && <p>Random number: {randomNumber}</p>}
    </div>
  );
}
