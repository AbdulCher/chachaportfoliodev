import React from "react";


const SophieBluel = () => {
  return (
    <article className="project-card">
      <h2 className="project-title">Portfolio d’architecte – Sophie Bluel</h2>

      <section className="project-section">
        <h3>Contexte</h3>
        <p>
          Ce projet consistait à dynamiser le site portfolio d’une architecte
          d’intérieur grâce à JavaScript et à l’intégration d’une API REST.
        </p>
      </section>

      <section className="project-section">
        <h3>Objectifs</h3>
        <p>
          Créer une galerie photo dynamique, gérer l’ajout et la suppression de
          médias, et concevoir une modale interactive pour l’administrateur.
        </p>
      </section>

      <section className="project-section">
        <h3>Stack technique</h3>
        <p>HTML5, SCSS, JavaScript (Fetch API, async/await), API REST</p>
      </section>

      <section className="project-section">
        <h3>Compétences développées</h3>
        <p>
          Manipulation avancée du DOM, gestion d’événements, communication
          asynchrone avec une API et structuration modulaire du code JS.
        </p>
      </section>

      <section className="project-section">
        <h3>Résultats et impact</h3>
        <p>
          La galerie est alimentée en temps réel depuis l’API. La modale permet
          d’ajouter ou de supprimer des médias et la connexion admin sécurise
          les actions.
        </p>
      </section>

      <section className="project-section">
        <h3>Perspectives d’amélioration</h3>
        <p>
          Ajouter une validation côté serveur et une meilleure gestion des
          erreurs réseau pour fiabiliser l’expérience administrateur.
        </p>
      </section>
    </article>
  );
};

export default SophieBluel;
