import React, { useState, useEffect } from "react";

const _3Cards = () => {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const [result, setResult] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [gameResult, setGameResult] = useState(""); // "Win", "Lose", or "Draw"
  const [cardsRevealed, setCardsRevealed] = useState(false);

  const select = () => {
    const cardSet = new Set();

    while (cardSet.size < 3) {
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      const randomValue = values[Math.floor(Math.random() * values.length)];
      const card = `${randomValue}${randomSuit}`;
      cardSet.add(card);
    }

    const uniqueCards = Array.from(cardSet).map((card) => {
      const cardValue = card.slice(0, -1); // Everything except the last character is the value
      const cardSuit = card.slice(-1); // The last character is the suit
      return { value: cardValue, suit: cardSuit };
    });

    setResult(uniqueCards);
    setSelectedCardIndex(null);
    setGameResult("");
    setCardsRevealed(false);
  };

  const handleCardClick = (index) => {
    if (cardsRevealed) return; // Prevent multiple clicks after revealing
    setSelectedCardIndex(index);
    setCardsRevealed(true);

    // Determine the card with the highest value
    const getCardValueRank = (value) => {
      return values.indexOf(value);
    };

    const maxRank = Math.max(
      ...result.map((card) => getCardValueRank(card.value))
    );

    const selectedCardRank = getCardValueRank(result[index].value);

    // Check win, draw, or lose conditions
    const isDraw =
      result.filter((card) => getCardValueRank(card.value) === maxRank).length >
        1 && selectedCardRank === maxRank;

    if (selectedCardRank === maxRank) {
      if (isDraw) {
        setGameResult("Draw");
      } else {
        setGameResult("Win");
      }
    } else {
      setGameResult("Lose");
    }
  };

  return (
    <>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <button
          onClick={select}
          style={{ marginBottom: "20px" }}
          id="play-button"
        >
          Start Game
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {result.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: "100px",
              height: "150px",
              border: "2px solid black",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: cardsRevealed ? "#f9f9f9" : "#ccc", // Show back or front of card
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: cardsRevealed ? "default" : "pointer",
            }}
          >
            {cardsRevealed ? (
              <>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {card.value}
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    color: "black"
                  }}
                >
                  {card.suit}
                </p>
              </>
            ) : (
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>?</p> // Placeholder for card back
            )}
          </div>
        ))}
      </div>

      {
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            {gameResult === "Win"
              ? "You Win!"
              : gameResult === "Draw"
              ? "It's a Draw!"
              : gameResult === "Lose"
              ? "You Lose!"
              : "You haven't chosen a card yet."}
          </h3>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            {gameResult === "Win"
              ? "You chose the card with the highest value!"
              : gameResult === "Draw"
              ? "Two cards had the same highest value!"
              : gameResult === "Lose"
              ? "You didn't choose the card withe the highest value"
              : "Choose a card to play."}
          </p>
        </div>
      }
    </>
  );
};

export default _3Cards;
