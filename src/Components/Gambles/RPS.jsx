import React, { useState, useEffect } from "react";

const RPS = () => {
  const [result, setResult] = useState(null);
  const [betChoice, setBetChoice] = useState(null);

  const options = ["Rock", "Paper", "Scissors"];

  const playGame = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomChoice = options[randomIndex];
    setResult(randomChoice);

    console.log("randomChoice: ", randomChoice, "betChoice: ", betChoice);

    if (betChoice === randomChoice) {
  
        alert(`It's a draw!`);
      } else if (
        (betChoice === "Rock" && randomChoice === "Scissors") ||
        (betChoice === "Paper" && randomChoice === "Rock") ||
        (betChoice === "Scissors" && randomChoice === "Paper")
      ) {
        alert(`You win!`);
      } else {
        alert(`You lose!`);
      }
  };

  return (
    <>
    <div>
        <button onClick={() => setBetChoice("Rock")}>Rock</button>
        <button onClick={() => setBetChoice("Paper")}>Paper</button>
        <button onClick={() => setBetChoice("Scissors")}>Scissors</button>
    </div>
      <div>
        <button onClick={playGame}>Play</button>
      </div>
    </>
  );
};

export default RPS;
