"use client";
import "@/app/home.css";

export default function Home() {
  function placeHolder() {
    console.log("Hello, World!");
  }


  return (
    <main>
      <div className="question-mark flex justify-center m-8 p-4 rounded-xl bg-slate-700 text-center items-center">
        ?
      </div>
      <div className="button-input flex justify-evenly text-center items-center">
        <input
          type="text"
          id="guessedNumberID"
          className="input-box flex justify-evenly text-center items-center h-8 rounded-xl bg-slate-700"
          placeholder="Guess a number."
        />
        <button
          id="guessButtonID"
          className="flex bg-slate-700 p-4 m-4 rounded-xl text-center items-center"
        >
          Guess!
        </button>
      </div>
      <div className="game-mode flex justify-evenly text-center items-center m-8 p-4 rounded-xl bg-slate-700">
        <button
          className="modeButton p-4"
          id="easyModeButtonID"
          onClick={placeHolder}
        >
          Easy
        </button>
        <button
          className="modeButton p-4"
          id="intermediateModeButtonID"
          onClick={placeHolder}
        >
          Intermediate
        </button>
        <button
          className="modeButton p-4"
          id="hardModeButtonID"
          onClick={placeHolder}
        >
          Hard
        </button>
      </div>
      <div className="notes flex justify-evenly text-center items-center m-8 p-4 rounded-xl bg-slate-700">
        Easy: 0 - 20 <br /> Intermediate: 0 - 100 <br /> Hard: 0 - 250 <br />{" "}
        You have 5 chance to guess.
      </div>
    </main>
  );
}
