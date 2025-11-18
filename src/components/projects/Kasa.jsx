import React from "react";


const Kasa = () => {
  return (
    <article className="project-card">
      <h2 className="project-title">Kasa</h2>

      <section className="project-section">
        <h3>Contexte</h3>
        <p>
          Kasa est une application web de location immobilière développée avec
          React. L’objectif était de créer une Single Page Application (SPA)
          moderne et performante.
        </p>
      </section>

      <section className="project-section">
        <h3>Objectifs</h3>
        <p>
          Développer une interface responsive, gérer la navigation avec React
          Router et afficher les données depuis un fichier JSON local.
        </p>
      </section>

      <section className="project-section">
        <h3>Stack technique</h3>
        <p>React, Vite, React Router, SCSS Modules, JavaScript ES6</p>
      </section>

      <section className="project-section">
        <h3>Compétences développées</h3>
        <p>
          Création et gestion de composants, passage de props, gestion des
          routes dynamiques et organisation du code selon les bonnes pratiques
          React.
        </p>
      </section>

      <section className="project-section">
        <h3>Résultats et impact</h3>
        <p>
          L’application offre une navigation fluide, un carrousel interactif et
          des collapses dynamiques. Le code est lisible et performant.
        </p>
      </section>

      <section className="project-section">
        <h3>Perspectives d’amélioration</h3>
        <p>
          Connecter l’application à une API réelle et ajouter des tests
          unitaires pour renforcer la stabilité.
        </p>
      </section>
    </article>
  );
};

export default Kasa;
