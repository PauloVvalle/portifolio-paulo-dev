"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PetShop",
    description: "em construção",
    image: "/images/projetos/exemplo-1.jpg",
    name: ["All", "Web"],
    gitUrl: "https://github.com/PauloVvalle/petshop",
    previewUrl: "https://github.com/PauloVvalle/petshop",
  },
  {
    id: 2,
    title: "Msg automática whatsapp",
    description: "em construção",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = projectsData.filter((project) => 
   project.name.includes(tag)
  );
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} 
        name="All" 
        isSelected={tag === "all"} />
        <ProjectTag onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} 
        name="Mobile" 
        isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
