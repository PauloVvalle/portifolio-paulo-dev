"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import projectsData from "../data/ProjcData";
import Carousel from "./Carousel";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

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

  const handlePreviewClick = (images) => {
    setPreviewImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewImages([]);
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "all"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="relative">
        <ul
          ref={ref}
          className="flex md:grid overflow-x-scroll snap-x snap-mandatory md:overflow-visible md:grid-cols-3 gap-8 md:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              className="flex-shrink-0 w-80 md:w-auto snap-center"
            >
              <ProjectsCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewImages={project.previewImages}
                onPreviewClick={handlePreviewClick}
              />
            </motion.li>
          ))}
        </ul>
        <Carousel
          isOpen={isModalOpen}
          onClose={closeModal}
          images={previewImages}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
