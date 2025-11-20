import { useState, useEffect } from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: "/assets/icons/html5.svg" },
    { name: "CSS", logo: "/assets/icons/css.svg" },
    { name: "JavaScript", logo: "/assets/icons/javascript.svg" },
    { name: "React", logo: "/assets/icons/react.svg" },
    { name: "Vite", logo: "/assets/icons/vite.svg" },
    { name: "Sass", logo: "/assets/icons/sass.svg" },
    { name: "Bootstrap", logo: "/assets/icons/bootstrap.svg" },
    { name: "Figma", logo: "/assets/icons/figma.svg" },
    { name: "Git", logo: "/assets/icons/git.svg" },
  ];

  const [currentSkill, setCurrentSkill] = useState("");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentSkill(skills[i].name);
      setPulse(true);
      setTimeout(() => setPulse(false), 400);
      i = (i + 1) % skills.length;
    }, 2000);
    return () => clearInterval(interval);
  }, [skills]);

  return (
    <section
      id="competences"
      className="snap-start h-screen w-full bg-gradient-to-b from-[#0D141F]/2 via-[#111A27] to-[#1F6692] 
      flex flex-col items-center justify-center p-6 lg:px-16 text-white"
    >
      <h2 className="text-3xl font-bold mb-10">Compétences</h2>

      <div className="relative flex items-center justify-center">
        {/* Cercle des compétences */}
        <div className="relative w-72 h-72 rounded-full border-2 border-gray-500 flex items-center justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center transform rotate-${index * 40}`}
              title={skill.name}
              style={{
                transform: `rotate(${index * (360 / skills.length)}deg) translate(120px) rotate(-${
                  index * (360 / skills.length)
                }deg)`,
              }}
            >
              <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
            </div>
          ))}

          <div
            className={`absolute w-4 h-4 bg-blue-500 rounded-full ${
              pulse ? "animate-pulse" : ""
            }`}
          ></div>

          <div className="absolute bottom-0 text-xl font-semibold">{currentSkill}</div>
        </div>
      </div>
    </section>
  );
}
