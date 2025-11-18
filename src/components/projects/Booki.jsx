import React from "react";


const Booki = () => {
  return (
    <>
    <article className="project-card">
      <h2 className="project-title">Booki</h2>

      <section className="project-section">
        <h3>Contexte</h3>
        <p>
          Booki est une plateforme fictive de réservation d’hébergements.
          L’objectif était d’intégrer une maquette Figma en HTML et CSS tout en
          assurant un rendu fidèle et responsive.
        </p>
      </section>

      <section className="project-section">
        <h3>Objectifs</h3>
        <p>
          Reproduire la maquette à l’identique, organiser la mise en page avec
          Flexbox et Grid, et garantir l’accessibilité du code sur tous les
          supports.
        </p>
      </section>

      <section className="project-section">
        <h3>Stack technique</h3>
        <p>HTML5, CSS3, Flexbox, CSS Grid, Media Queries, Figma</p>
      </section>

      <section className="project-section">
        <h3>Compétences développées</h3>
        <p>
          Maîtrise du positionnement responsive, structuration sémantique du
          code et gestion multi-écrans. Organisation claire du fichier CSS.
        </p>
      </section>

      <section className="project-section">
        <h3>Résultats et impact</h3>
        <p>
          Le site reproduit fidèlement la maquette et reste parfaitement lisible
          sur mobile et desktop. Le code est validé par les standards W3C.
        </p>
      </section>

      <section className="project-section">
        <h3>Perspectives d’amélioration</h3>
        <p>
          Ajouter des filtres dynamiques avec JavaScript et optimiser les images
          pour accélérer le chargement.
        </p>
      </section>
    </article>
    </>
  );
};

export default Booki;
