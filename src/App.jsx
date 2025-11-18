import React from "react";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";



function App() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
