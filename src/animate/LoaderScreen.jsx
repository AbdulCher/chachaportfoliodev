import { useEffect, useState } from "react";

export default function LoaderScreen({ onFinish }) {
  const sequence = [
    { text: "...Curieux", class: "text-[#8ecae6] font-bold text-4xl" },
    { text: "...Créatif", class: "text-[#8ecae6] font-bold text-5xl" },
    { text: "Professionel !", class: "text-[#8ecae6] font-bold text-7xl" },
  ];

  const [step, setStep] = useState(0); // gère le mot affiché
  const [finalBoom, setFinalBoom] = useState(false); // effet d’explosion finale
  const [fadeOut, setFadeOut] = useState(false); // disparition du loader

  useEffect(() => {
    // Durée entre chaque mot
    const timer = setInterval(() => {
      setStep((s) => {
        if (s === sequence.length - 1) {
          clearInterval(timer);

          // Lance effet boom après le dernier mot
          setTimeout(() => setFinalBoom(true), 700);

          // Fade-out + fin animation
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 400);
          }, 800);

          return s;
        }
        return s + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[9999] transition-opacity duration-700 ${
        fadeOut ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="text-[#fb8500] text-5xl w-32 h-32 mb-6 animate-pulse">
        <h3>@/////</h3>
        </div>

      {/* Mot animé */}
      <div
        className={`
          transition-all duration-300 
          ${finalBoom ? "scale-[3] opacity-0" : "scale-100 opacity-100"}
        `}
      >
        <p className={`transition-all duration-700 ${sequence[step].class}`}>
          {sequence[step].text}
        </p>
      </div>

      {/* Spinner */}
      <div className="mt-8 w-12 h-12 border-4 border-[#8ecae6] border-t-white rounded-full animate-spin"></div>

      {/* Texte "Chargement…" */}
      <p className="text-[#8ecae6] text-lg mt-4 tracking-wide">Chargement…</p>
    </div>
  );
}
