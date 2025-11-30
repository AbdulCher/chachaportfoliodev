// ============================================
// animate/LoaderScreen.js - VERSION FINALE
// ============================================
export default function LoaderScreen({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 .z-[100] flex items-center justify-center 
        bg-linear-to-br from-[#001219] via-[#001524] to-[#001219]
        transition-opacity duration-700
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-live="polite"
      aria-busy={!fadeOut}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo animé */}
        <div className="text-[#ff7d00] text-4xl md:text-5xl font-bold flex space-x-1">
          {["C", "h", "a", "C", "h", "a"].map((letter, i) => (
            <span
              key={i}
              className="inline-block animate-bounce"
              style={{ 
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Texte de chargement */}
        <p className="text-[#27818f] text-lg font-medium animate-pulse">
          Chargement en cours...
        </p>

        {/* Points animés */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full animate-bounce"
              style={{
                backgroundColor: i === 0 ? '#27818f' : i === 1 ? '#ff7d00' : '#78290f',
                animationDelay: `${i * 150}ms`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}