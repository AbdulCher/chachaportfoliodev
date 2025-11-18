import React from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";



function App() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
      <Header />
      <Home />
      <About />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
