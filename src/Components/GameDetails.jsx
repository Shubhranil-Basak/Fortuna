import React from "react";
import { useParams } from "react-router-dom";
import CoinFlip from "./Gambles/CoinFlip";
import Wheel_ from "./Gambles/Wheel";
import RPS from "./Gambles/RPS";

const GameDetails = () => {
  const { gameName } = useParams();

  return (
    <div style={{ color: "white" }}>
      <h1 style={{ justifyContent: "center", display: "flex" }}>
        Playing {gameName.replace(/-/g, " ")}
      </h1>
      {gameName === "coin-flip" && <CoinFlip />}
      {gameName === "wheel-of-fortune" && <Wheel_ />}
      {gameName === "rock-paper-scissors" && <RPS />}
    </div>
  );
};

export default GameDetails;
