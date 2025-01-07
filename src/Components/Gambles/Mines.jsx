import React, { useState } from "react";

const Mines = () => {
  const [grid, setGrid] = useState([]);
  const [revealedTiles, setRevealedTiles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [safeRevealed, setSafeRevealed] = useState(0);
  const [betMultiplier, setBetMultiplier] = useState(1); // Starts with 1x
  const totalMines = 10;
  const totalSafeTiles = 25 - totalMines; // Total tiles - mines

  const initializeGame = () => {
    const newGrid = Array(5)
      .fill(null)
      .map(() => Array(5).fill("safe"));
    const minePositions = new Set();

    // Place mines randomly
    while (minePositions.size < totalMines) {
      const position = Math.floor(Math.random() * 25); // Random index from 0 to 24
      minePositions.add(position);
    }

    // Map mine positions to the grid
    for (const pos of minePositions) {
      const row = Math.floor(pos / 5);
      const col = pos % 5;
      newGrid[row][col] = "mine";
    }

    setGrid(newGrid);
    setRevealedTiles([]);
    setGameOver(false);
    setSafeRevealed(0);
    setBetMultiplier(1);
  };

  const handleTileClick = (row, col) => {
    if (
      gameOver ||
      revealedTiles.some((tile) => tile.row === row && tile.col === col)
    ) {
      return; // Do nothing if game is over or tile is already revealed
    }

    const newRevealedTiles = [...revealedTiles, { row, col }];
    setRevealedTiles(newRevealedTiles);

    if (grid[row][col] === "mine") {
      setGameOver(true);
      alert("You hit a mine! Game over. You lost your bet.");
    } else {
      const newSafeRevealed = safeRevealed + 1;
      setSafeRevealed(newSafeRevealed);

      // Update multiplier (example: 1.5x for each safe tile revealed)
      const newMultiplier = 1 + newSafeRevealed * 0.1;
      setBetMultiplier(newMultiplier);

      if (newSafeRevealed === totalSafeTiles) {
        setGameOver(true);
        handleCashOut();
        alert(`You win! You found all safe tiles.`);
      }
    }
  };

  // Handle bet amount input
  const handleBetAmountChange = (event) => {
    setBetAmount(Number(event.target.value));
  };

  const handleCashOut = () => {
    if (!gameOver) {
      setGameOver(true);
    }
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: "flex", justifyContent: "center" }}>
        {row.map((tile, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleTileClick(rowIndex, colIndex)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: revealedTiles.some(
                (tile) => tile.row === rowIndex && tile.col === colIndex
              )
                ? grid[rowIndex][colIndex] === "mine"
                  ? "red"
                  : "lightgreen"
                : "white",
              cursor: gameOver ? "not-allowed" : "pointer",
            }}
          >
            {revealedTiles.some(
              (tile) => tile.row === rowIndex && tile.col === colIndex
            )
              ? grid[rowIndex][colIndex] === "mine"
                ? "💣"
                : "💎"
              : ""}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <>
      <div>
        <button
          onClick={initializeGame}
          id="play-button"
        >
          Start New Game
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>{renderGrid()}</div>
      <p>Bet Multiplier: {betMultiplier.toFixed(2)}x</p>
      <div>
        <button
          onClick={handleCashOut}
          disabled={gameOver || revealedTiles.length === 0}
          id="cash-out-button"
          style={{ marginBottom: "10px" }}
        >
          Cash Out
        </button>
      </div>
    </>
  );
};

export default Mines;
