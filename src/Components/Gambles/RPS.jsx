import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../config/firebase"; // Adjust the import according to your project structure

const RPS = () => {
  const [result, setResult] = useState(null);
  const [betChoice, setBetChoice] = useState(null);
  const [betAmount, setBetAmount] = useState(10);
  const [balance, setBalance] = useState(0); // Balance will be fetched from Firestore
  const [pool, setPoll] = useState(0);

  const auth = getAuth();
  const user = auth.currentUser; // Get the currently logged-in user

  // Fetch the user's balance from Firestore when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid); // Firestore document for the user
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          setBalance(userDoc.data().balance); // Assuming balance field is in the user's document
        } else {
          console.log("No such user document!");
        }

        const gameRef = doc(db, "games", "rock-paper-scissors");
        const gameDoc = await getDoc(gameRef);

        if (gameDoc.exists()) {
          setPoll(gameDoc.data().pool);
        } else {
          console.log("No such game document!");
        }
      }
    };

    fetchData();
  }, [user]);

  const options = ["Rock", "Paper", "Scissors"];

  const playGame = async () => {
    if (betAmount > balance) {
      alert("You don't have enough balance!");
      return;
    }

    if (pool < balance / 2) {
      alert(
        `The pool isn't enough to play this game! Please wait for the pool to be updated!`
      );
      return;
    }

    const randomChoice = options[Math.floor(Math.random() * options.length)];
    setResult(randomChoice);

    let newBalance = balance;

    const gameRef = doc(db, "games", "rock-paper-scissors");

    if (betChoice === randomChoice) {
      // Draw
      newBalance -= betAmount / 2;
      await updateDoc(gameRef, { pool: increment(betAmount / 2) });

      alert(`It's a draw! Your new balance is ${newBalance}`);
    } else if (
      (betChoice === "Rock" && randomChoice === "Scissors") ||
      (betChoice === "Paper" && randomChoice === "Rock") ||
      (betChoice === "Scissors" && randomChoice === "Paper")
    ) {
      // Win
      newBalance += betAmount;
      await updateDoc(gameRef, { pool: increment(-betAmount) });
      alert(`You win! Your new balance is ${newBalance}`);
    } else {
      // Lose
      newBalance -= betAmount;
      await updateDoc(gameRef, { pool: increment(betAmount) });
      alert(`You lose! Your new balance is ${newBalance}`);
    }

    // Update the balance in Firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { balance: newBalance }, { merge: true }); // Merge to preserve other fields

    // Update the state with the new balance
    setBalance(newBalance);

    const gameDoc = await getDoc(gameRef);
    setPoll(gameDoc.data().pool);
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
