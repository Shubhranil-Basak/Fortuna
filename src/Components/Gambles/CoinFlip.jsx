import React from "react";
import { useState } from "react";

const CoinFlip = () => {
  const [result, setResult] = useState("");

  const flipCoin = () => {
    setResult(Math.random() < 0.5 ? "heads" : "tails");
  };

  return (
    <div>
      <h1>Coin Flip</h1>
      <button onClick={flipCoin}>Flip Coin</button>
      <p>{result}</p>
    </div>
  );
};

export default CoinFlip;
