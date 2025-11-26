import { useState, useEffect } from "react";

export default function TypewriterText({ text = "", speed = 80, className = "", trigger }) {
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    setSubIndex(0); // reset à chaque déclenchement

    const interval = setInterval(() => {
      setSubIndex(prev => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [trigger, text, speed]);

  return (
    <p className="text-[#ffecd1] text-xl">
      {text.substring(0, subIndex)}
      <span className="inline-block">{subIndex < text.length ? "|" : ""}</span>
    </p>
  );
}
