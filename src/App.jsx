import React from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { Canvas } from "@react-three/fiber";

import ParticleBackground from "./components/ParticleBackground";




function App() {
  return (
    <div className="relative">
      <ParticleBackground />

      <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
        <Header />
        <Home />
        <About />
        <Works />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}


export default App;
