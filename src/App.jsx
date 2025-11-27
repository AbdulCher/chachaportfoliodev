import React from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import LoaderScreen from "./animate/LoaderScreen";

import ParticleBackground from "./components/ParticleBackground";


export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Le loader reste 2 secondes
    const timer = setTimeout(() => {
      setFadeOut(true); // lance l'animation opacity-0
    }, 2000);

    // Après fade-out (700ms), on retire du DOM
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2700);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showLoader && <LoaderScreen fadeOut={fadeOut} />}

      {/* -- Ta vraie page en dessous -- */}
      <main className={`${showLoader ? "bg-[#001219]" : "bg-white"}`}>
          <Header />
          <div className="relative scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
            
            <Home />
            <About />
            <Works />
            <Skills />
            <Contact />
         
        </div>
      </main>
    </>
  );
}

