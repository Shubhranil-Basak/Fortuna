import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "0" },
  { option: "10" },
  { option: "125" },
  { option: "15" },
  { option: "better luck next time" },
  { option: "75" },
  { option: "45" },
  { option: "100" },
  { option: "0" },
  { option: "better luck next time" },
];

const Wheel_ = () => {
  const [mustSpin, setMustSpin] = useState(false); // Controls spinning
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length); // Randomly select a prize
    setPrizeNumber(newPrizeNumber);

    setMustSpin(true);
  };

  const handleStop = () => {
    setMustSpin(false);
  }
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={handleStop} // Stop spinning after animation
          fontSize={10}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleSpinClick}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "19px",
          }}
        >
          Spin($50)
        </button>
      </div>
    </>
  );
};

export default Wheel_;
