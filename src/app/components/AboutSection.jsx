"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Tab_Data from "../data/TabData";

const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image
          src="/images/pc-page.jpg"
          alt="Pc"
          width={500}
          height={500}
        ></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Apaixonado por programação e jogos, estou cursando Ciências da Computação. Meu objetivo é ser um desenvolvedor de
            mobile, web e jogos.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("habilidades")}
              active={tab === "habilidades"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("formacoes")}
              active={tab === "formacoes"}
            >
              {" "}
              Formações{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiencia")}
              active={tab === "experiencia"}
            >
              {" "}
              Experiencia{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_Data.find((item) => item.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
