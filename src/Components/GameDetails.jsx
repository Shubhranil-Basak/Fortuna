import React from "react";
import { useParams } from "react-router-dom";
import CoinFlip from "./Gambles/CoinFlip";
import Wheel_ from "./Gambles/Wheel";
import RPS from "./Gambles/RPS";
import _7UD from "./Gambles/7UD";
import _3Cards from "./Gambles/3Cards";

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
      {gameName === "7-up-7-down" && <_7UD />}
      {gameName === "3-cards" && <_3Cards />}
    </div>
  );
};

export default GameDetails;
