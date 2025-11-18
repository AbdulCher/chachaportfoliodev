import React from "react";
import Booki from "./projects/Booki";
import SophieBluel from "./projects/SophieBluel";
import Kasa from "./projects/Kasa";

const ProjectsList = () => {
  return (
    <section className="w-full py-16 px-4 inset-shadow-sm inset-shadow-indigo-500 ...">
      <h1 className="text-3xl font-bold mb-10">Mes Projets</h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <Booki />
        <SophieBluel />
        <Kasa />
      </div>
    </section>
  );
};

export default ProjectsList;
