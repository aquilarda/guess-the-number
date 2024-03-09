"use client";
import { useState } from "react";
import "@/app/home.css";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100));
  let [userGuessChance, setUserGuessChance] = useState(5);

  function gameMode() {
    console.log(randomNumber);

    const guessNumberID = document.getElementById("guessNumberID") as HTMLInputElement;
    const all = document.getElementById("all") as HTMLElement;
    const chanceID = document.getElementById("chanceID") as HTMLElement;

    let guessedNumberID = guessNumberID.value;
    
    if (parseInt(guessedNumberID) == randomNumber) {
      all.innerHTML = "You Won!";
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else if (parseInt(guessedNumberID) < randomNumber && parseInt(guessedNumberID) > 0 && parseInt(guessedNumberID) < 101) {
      all.innerHTML = "The number is higher than your guess.";
      userGuessChance -= 1;
    } else if (parseInt(guessedNumberID) > randomNumber && parseInt(guessedNumberID) > 0 && parseInt(guessedNumberID) < 101) {
      all.innerHTML = "The number is lower than your guess.";
      userGuessChance -= 1;
    } else if (typeof guessedNumberID === "string" || parseInt(guessedNumberID) < 0 || parseInt(guessedNumberID) > 101) {
      all.innerHTML = "Please type a number / Please type a number that higher than 0 and lower than 100";
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }

    if (userGuessChance == 0) {
      all.innerHTML = "Oops! You lost.";
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }

    chanceID.innerHTML = "Chance: " + userGuessChance.toString();
  }

  return (
    <main>
      <div className="question-mark flex justify-center m-8 p-4 rounded-xl bg-slate-700 text-center items-center" id="all">
        ?
      </div>
      <div className="button-input flex justify-evenly text-center items-center">
        <input
          type="text"
          id="guessNumberID"
          className="input-box flex justify-evenly text-center items-center h-8 rounded-xl bg-slate-700"
          placeholder="Guess a number."
        />
        <button
          id="guessButtonID"
          className="flex bg-slate-700 p-4 m-4 rounded-xl text-center items-center"
          onClick={gameMode}
        >
          Guess!
        </button>
      </div>
      <div className="chance-box flex justify-evenly text-center items-center m-8 p-4 rounded-xl bg-slate-700" id="chanceID">
        Chance: 5
      </div>
      <div className="notes flex justify-evenly text-center items-center m-8 p-4 rounded-xl bg-slate-700">
        The number is between 0 and 100 <br />
        You have 5 chances to guess.
      </div>
    </main>
  );
}
