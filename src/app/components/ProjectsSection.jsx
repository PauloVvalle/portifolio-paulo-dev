"use client";
import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/images/projetos/exemplo-1.jpg",
    name: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    image: "/images/projetos/exemplo-2.jpg",
    name: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição do projeto 3",
    image: "/images/projetos/exemplo-3.jpg",
    name: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição do projeto 4",
    image: "/images/projetos/exemplo-4.jpg",
    name: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição do projeto 5",
    image: "/images/projetos/exemplo-5.jpg",
    name: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTAgChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
   project.name.includes(tag)
  );
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag onClick={handleTAgChange} 
        name="All" 
        isSelected={tag === "all"} />
        <ProjectTag onClick={handleTAgChange} 
        name="Web" 
        isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTAgChange} 
        name="Mobile" 
        isSelected={tag === "Mobile"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            name={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
