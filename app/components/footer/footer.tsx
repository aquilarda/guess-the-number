import "@/app/components/footer/footer.css";

export default function Footer() {
  return (
    <main>
      <div className="footer flex justify-center m-8 p-4 rounded-xl bg-slate-700 text-center items-center">
        <a href="https://github.com/aquilarda" className="flex">
          <img
            src="github-mark-white.png"
            alt="GitHub Icon"
            width={40}
            height={40}
          />
          <h1 className="px-2">GitHub</h1>
        </a>
      </div>
    </main>
  );
}
