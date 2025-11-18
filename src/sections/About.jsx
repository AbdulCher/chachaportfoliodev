export default function About() {
  return (
    <section
      id="apropos"
      className="snap-start h-screen bg-blue-950 flex items-center justify-center p-6 lg:px-16"
    >
      <div className="flex flex-col lg:flex-row items-start gap-10 w-full max-w-6xl">

        {/* Texte à propos */}
        <div className="flex-1 text-white space-y-4">
          <h2 className="text-4xl font-bold">À propos</h2>
          <p className="text-xl leading-relaxed">
            Après une formation complète chez <strong>OpenClassrooms</strong>, <br />
            j’ai appris à transformer des maquettes Figma en sites web modernes et responsive. <br />
            Curieux et rigoureux, j’aime relever des défis techniques et concevoir <br />
            des interfaces élégantes et fonctionnelles.
          </p>
        </div>

        {/* Projets récents */}
        <div className="flex-1 text-white space-y-6">
          <h3 className="text-2xl font-semibold">Quelques projets récents</h3>

          <div className="flex flex-col gap-4">
            <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
              <img src="/img/booki.jpg" alt="Projet Booki" className="w-full h-40 object-cover rounded-md mb-2" />
              <p className="text-center text-sm">Booki<br />Intégration HTML/CSS responsive</p>
            </div>

            <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
              <img src="/img/sophiebluel.jpg" alt="Portfolio Sophie Bluel" className="w-full h-40 object-cover rounded-md mb-2" />
              <p className="text-center text-sm">Portfolio Sophie Bluel<br />JavaScript dynamique</p>
            </div>

            <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
              <img src="/img/Kasa.jpg" alt="Projet Kasa" className="w-full h-40 object-cover rounded-md mb-2" />
              <p className="text-center text-sm">Kasa<br />Application React complète</p>
            </div>
          </div>

          <a
            href="#projets"
            className="inline-block mt-4 px-6 py-2 border-2 border-white text-white rounded hover:text-blue-500 transition"
          >
            Voir tous les projets →
          </a>
        </div>
      </div>
    </section>
  );
}
