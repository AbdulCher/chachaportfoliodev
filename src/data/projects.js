const projects = [
  {
    id: 1,
    title: "Booki",
    description:
      "Création d’un site de planification de vacances dynamique à partir d’une maquette Figma. Intégration responsive complète en HTML et CSS.",
    objectif: "Reproduction d'une maquette de manière fidèle, mis en place de responsive design (desktop, tablette et mobile) et respect des bonnes pratiques d’accessibilité et de sémantique.",
    fonctionnalités: "Barre de recherche statique, filtres visuels non fonctionnels et cartes d’hébergement et d’activité adaptables selon la taille d’écran.",
    acquis: "Structuration de page web en HTML sémantique, utilisation Flexbox et Grid pour le responsive et géstion des medias queries de manière efficace.",
    stack: ["HTML", "CSS", "Figma"],
    image: "/img/homebooki.webp",
    modalimg: "/img/booki.webp",
    github: "https://github.com/AbdulCher/P3-Booki",
  },
  {
    id: 2,
    title: "Sophie Bluel",
    description: "Développement d’un portfolio d’architecte avec gestion dynamique des galeries et modales via JavaScript.",
    fonctionnalités: "Affichage dynamique des travaux, ouverture et fermeture d’une modale avec gestion des événements, ajout d’une photo via formulaire avec aperçu avant envoi et suppression d’un média côté front-end",
    acquis: "Manipulation du DOM de manière dynamique, destion des requêtes asynchrones avec fetch et await et Structuration de en plusieurs fichiers JS (index, login, modal, etc.).",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/img/homesophiebluel.webp",
    modalimg: "/img/sophiebluel.webp",
    github: "https://github.com/AbdulCher/Portfolio-architecte-sophie-bluel",
  },
  {
    id: 3,
    title: "Kasa",
    description:
      "Refonte complète d’un site de location immobilière en React. Création de composants, routage et gestion de données JSON.",
    objectif: " Développement ude SPA (Single Page Application) avec React, structuration des pages avec React Router et géstion d’affichage des données à partir d’un fichier JSON.",
    fonctionnalités: " Carrousel d’images interactif, système de collapses pour les descriptions et équipements, gestion des routes dynamiques (/accommodation/:id) et page 404 personnalisée.",
    acquis: " Créeation et réutilisation des composants React, géstion de l’état local et des props entre composants et séparation de la logique (carrousel, détails, etc.) pour un code maintenable.",
    stack: ["React", "Vite", "CSS Modules"],
    image: "/img/homekasa.webp",
    modalimg: "/img/kasa.webp",
    github: "https://github.com/AbdulCher/kasa-app",
  },
  {
    id: 4,
    title: "Votre Projet Ici",
    description:
      "Avec ma formation Openclasseroom, j'ai apris à utliser plusieurs langages et framework differents pour réaliser des App et sites que vous pouvez voir à la section compétences.",
    fonctionnalités: "A vous de voir ce que vous aimeriez que je réalise pour votre projet, le chois est large.",
    acquis: "Votre projet ici bientôt!!!.",
    stack: ["Hâte de collaborer avec vous !"],
    image: "/img/homeprojet.webp",
    modalimg: "/img/projet.webp",
    github: "https://github.com/AbdulCher/chachaportfoliodev"
  },
];

export default projects;
