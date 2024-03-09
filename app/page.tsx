import "@/app/home.css";

export default function Home() {
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
    </main>
  );
}
