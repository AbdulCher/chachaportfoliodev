import AnimatedCard from "../animate/AnimatedCard";

export default function About() {
  return (
    <section
      id="apropos"
      className="snap-start w-full bg-gray/10 flex flex-col items-center justify-center p-6 lg:px-16 py-36"
    >
      
      <div className="text-center text-[#0D141F] max-w-3xl mb-10">
        <h2 className="text-4xl font-bold mb-4">À propos</h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          Après une formation complète chez <strong>OpenClassrooms</strong>,<br />
          j’ai appris à transformer des maquettes Figma en sites web modernes et responsives.<br />
          Curieux et rigoureux, j’aime relever des défis techniques et concevoir<br />
          des interfaces élégantes et fonctionnelles.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <AnimatedCard direction="right" delay={0.20}>
        <div className="text-[#023047] rounded-lg hover:shadow-xl transition p-4 shadow-lg shadow-[#fb8500] flex flex-col items-center">
          <img 
            src="/img/cards/homebooki.png"
            alt="Projet Booki"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
            
          <p className="text-center text-sm">
            Booki<br />Intégration HTML/CSS responsive
          </p>
        </div>
      </AnimatedCard>
      <AnimatedCard direction="up" delay={0.3}>
        <div className="text-[#023047] rounded-lg overflow-hidden hover:shadow-xl transition p-4 shadow-lg shadow-[#fb8500] flex flex-col items-center">
          <img
            src="/img/cards/homesophie.png"
            alt="Portfolio Sophie Bluel"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm">
            Sophie Bluel<br />JavaScript dynamique
          </p>
        </div>
      </AnimatedCard>
      <AnimatedCard direction="left" delay={0.20}>
        <div className="text-[##023047] rounded-lg hover:shadow-xl transition p-4 shadow-lg shadow-[#fb8500] flex flex-col items-center">
          <img
            src="/img/cards/homekasa.png"
            alt="Projet Kasa"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm">
            Kasa<br />Application React complète
          </p>
        </div>
        </AnimatedCard>
      </div>

      {/* Bouton */}
      <a
        href="#projets"
        className="bg-[#8ecae6] mt-6 inline-block px-6 py-2 text-[#023047] rounded hover:text-[#fb8500] transition"
      >
        Mes projets →
      </a>
    </section>
  );
}
