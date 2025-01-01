import React, { useState } from "react";

const _7UD = () => {
  const [result, setResult] = useState("");
  const [betChoice, setBetChoice] = useState("");

  const rolldice = () => {
    const outcome = Math.floor(Math.random() * 12 + 1);
    setResult(outcome);

    if (
      (betChoice === "Up" && outcome > 7) ||
      (betChoice === "Down" && outcome < 7)
    ) {
      // User won: double the bet amount and update balance
      alert(
        `You won! The result was ${outcome}.`
      );
    } else if (betChoice === "Even" && outcome === 7) {
      // User won: triple the bet amount and update balance
      alert(
        `You won! The result was ${outcome}.`
      );
    } else {
      // User lost: subtract the bet amount from balance
      alert(
        `You lost! The result was ${outcome}.`
      );
    }
  };

  return (
    <div>
      <button onClick={() => setBetChoice("Up")}>Up</button>
      <button onClick={() => setBetChoice("Down")}>Down</button>
      <button onClick={() => setBetChoice("Even")}>Even</button>

      <button onClick={rolldice}>Roll the Dice</button>
      {result && <p>The result is {result}</p>}
    </div>
  );
};

export default _7UD;
