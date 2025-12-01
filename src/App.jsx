// ============================================
// App.js - VERSION CORRIGÉE AVEC LOADER
// ============================================
import { useEffect, useState } from "react";
import { useAOSInit } from "./hooks/useAOSInit";
import Header from "./components/Header";
import MainPage from "./sections/MainPage";
import Footer from "./components/Footer";
import LoaderScreen from "./animate/LoaderScreen";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Le loader reste visible 2 secondes
    const timer = setTimeout(() => {
      setFadeOut(true); // lance l'animation de fade-out
    }, 2000);

    // Quand l'animation de fade-out est finie (700ms), on enlève le loader
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2700);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  // FIX ROTATION MOBILE
  useEffect(() => {
    const handleResize = () => {
      // Force un reflow pour corriger les dimensions
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    // Au chargement
    handleResize();

    // À chaque resize/rotation
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Initialiser AOS
  useAOSInit({
    once: false,
    offset: 120,
    duration: 800
  });

  return (
    <>
      {/* Afficher le loader seulement si showLoader est true */}
      {showLoader && <LoaderScreen fadeOut={fadeOut} />}

      {/* Contenu principal */}
      <div className="relative overflow-x-hidden  // Empêche le scroll horizontal">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

