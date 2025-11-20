export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setTheme("")}
        className={`px-3 py-1 rounded transition ${
          theme === "" ? "bg-[var(--primary)] text-white" : "bg-[var(--bg)] text-[var(--text)] border border-[var(--primary)]"
        }`}
      >
        Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`px-3 py-1 rounded transition ${
          theme === "dark" ? "bg-[var(--primary)] text-white" : "bg-[var(--bg)] text-[var(--text)] border border-[var(--primary)]"
        }`}
      >
        Dark
      </button>

      <button
        onClick={() => setTheme("purple")}
        className={`px-3 py-1 rounded transition ${
          theme === "purple" ? "bg-[var(--primary)] text-white" : "bg-[var(--bg)] text-[var(--text)] border border-[var(--primary)]"
        }`}
      >
        Purple
      </button>
    </div>
  );
}
