import { useState, useEffect } from "react";
import LoaderScreen from "./animate/LoaderScreen";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Affiche le loader juste 1 seconde, mais sans bloquer l'affichage réel
    const timer = setTimeout(() => setDone(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoaderScreen done={done} />

      <main>
        <div className="relative scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
          <Header />
          <Home />
          <About />
          <Works />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
