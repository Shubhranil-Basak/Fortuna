import React, { useState } from "react";

const HiLoGame = () => {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
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
    "A",
  ]; // Card values in order of ranking

  const [currentCard, setCurrentCard] = useState(null); // Current base card
  const [nextCard, setNextCard] = useState(null); // The next card to reveal
  const [guess, setGuess] = useState(""); // Player's guess (High or Low)
  const [message, setMessage] = useState(""); // Message for result

  // Function to draw a random card
  const drawCard = () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return { suit: randomSuit, value: randomValue };
  };

  // Function to start the game
  const startGame = () => {

    const firstCard = drawCard(); // Draw the initial card
    setCurrentCard(firstCard);
    setNextCard(null);
    setGuess("");
    setMessage("");
  };

  // Function to handle guesses
  const makeGuess = (playerGuess) => {

    const newCard = drawCard();
    setNextCard(newCard);
    setGuess(playerGuess);

    const currentValueIndex = values.indexOf(currentCard.value);
    const nextValueIndex = values.indexOf(newCard.value);


    if (
      (playerGuess === "higher" && nextValueIndex > currentValueIndex) ||
      (playerGuess === "lower" && nextValueIndex < currentValueIndex)
    ) {
      setMessage("You guessed correctly! 🎉");
    } else if (nextValueIndex === currentValueIndex) {
      setMessage("It's a draw! Both cards are the same.");
    } else {
      setMessage("You guessed wrong! 💔");
    }

    setCurrentCard(newCard); // Update the current card to the new card
  };

  return (
    <div>

      <div>
      {!currentCard && <button onClick={startGame}>Start Game</button>}
      </div>
      {currentCard && (
        <div>
            <p>
              {currentCard.value}
            </p>
            <p>
              {currentCard.suit}
            </p>
          <div>
            <button id="high-low" onClick={() => makeGuess("higher")}>Higher</button>
            <button id="high-low" onClick={() => makeGuess("lower")}>Lower</button>
          </div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default HiLoGame;
