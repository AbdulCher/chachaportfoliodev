// ============================================
// sections/About.js - AMÉLIORÉ
// ============================================
import BgPortfolio from "../animate/BgPortfolio";
import Icons from "../components/Icons";

export default function About() {
  const achievements = [
    {
      title: "Booki",
      description: "Intégration HTML/CSS responsive",
    },
    {
      title: "Sophie Bluel",
      description: "JavaScript dynamique",
    },
    {
      title: "Kasa",
      description: "Application React complète",
    },
  ];

  return (
    <section
      id="apropos"
      className="min-h-screen flex flex-col justify-center px-8 py-24
        snap-start w-full relative bg-[#001524] text-[#ece5dd]
        items-center md:px-12 lg:px-20"
      aria-labelledby="about-title"
    >
      <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-20 z-10">
        {/* Présentation */}
        <article 
          className="flex-1 text-left space-y-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 
            id="about-title"
            className="text-[#ece5dd] text-2xl md:text-3xl 
              xl:text-4xl lg:text-5xl font-semibold"
          >
            À propos de <span className="text-[#ff7d00]">ChaChaDev</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
            Après une formation complète chez <strong>OpenClassrooms</strong>, 
            j'ai appris à transformer des maquettes Figma en sites web modernes 
            et responsives. Curieux et rigoureux, j'aime relever des défis 
            techniques et concevoir des interfaces élégantes et fonctionnelles.
          </p>
        </article>

        {/* Projets phares */}
        <article className="flex-1 flex flex-col items-center lg:items-start w-full">
          <div 
            className="w-full grid gap-8 mb-10"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {achievements.map((project, index) => (
              <div
                key={index}
                className="bg-[#001524]/40 backdrop-blur-sm p-6 rounded-lg 
                  shadow-lg shadow-[#ffecd1]/20 text-center
                  border border-[#27818f]/30
                  hover:shadow-[#ffecd1]/40 hover:border-[#ff7d00]/50
                  transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#ff7d00] mb-2">
                  {project.title}
                </h3>
                <p className="text-base opacity-90">{project.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#projets"
            className="bg-[#27818f] text-[#ece5dd] px-8 py-3 rounded-lg
              hover:bg-[#ff7d00] hover:text-black 
              transition-all duration-300
              font-semibold shadow-lg
              hover:shadow-xl hover:scale-105
              self-center"
            data-aos="fade-up"
            data-aos-delay="400"
            aria-label="Voir tous mes projets"
          >
            Mes projets →
          </a>
        </article>
      </div>

      {/* Éléments de décoration */}
      <BgPortfolio />
      <Icons />
    </section>
  );
}



