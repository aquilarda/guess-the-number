import "@/app/components/navbar/navbar.css";

export default function Navbar() {
  return (
    <main>
      <div className="navbar flex justify-evenly m-8 p-4 rounded-xl bg-slate-700">
        <h1>
          <a href="/">Guess The Number</a>
        </h1>
      </div>
    </main>
  );
}
