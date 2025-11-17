import React from "react";
import Header from "./components/Header";


function App() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
      <Header />

      <section id="accueil" className="snap-start h-screen bg-gray-900 flex items-center justify-between p-6 lg:px-8">
        <div>
          <h1 className="text-5xl text-white animate-bounceScale">NDIAYE<br></br>CHEIKH<br></br>ABDUL</h1>
        </div>
        <div className="">
          <img class="h-60 w-60 object-cover rounded-full ..." src="/img/profile.jpg" />
          </div>
      </section>

      <section
        id="apropos"
        className="snap-start h-screen bg-blue-900 flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">À propos</h1>
      </section>

      <section
        id="projets"
        className="snap-start h-screen bg-purple-500 flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">Projets</h1>
      </section>

      <section
        id="contact"
        className="snap-start h-screen bg-orange-500 flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">Contact</h1>
      </section>
    </div>
  );
}

export default App;
