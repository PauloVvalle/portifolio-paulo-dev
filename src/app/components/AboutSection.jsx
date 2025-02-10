"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const Tab_Data = [
  {
    title: "habilidades",
    id: "habilidades",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "formacoes",
    id: "formacoes",
    content: (
      <ul className="list-disc pl-2">
        <li>Desenvolvedor Fullstack - Infnet</li>
        <li>Analise e desenvolvimento de sistemas(cursando)</li>
      </ul>
    )
  },
  {
    title: "experiencia",
    id: "experiencia",
    content: (
      <ul className="list-disc pl-2">
        <li>...</li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [ isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/pc-page.jpg"
          alt="Pc"
          width={500}
          height={500}
        ></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, cum!
            Similique officia voluptatum, molestiae possimus vero odit quam
            doloribus ducimus maiores tempora labore velit aut reprehenderit
            natus recusandae deleniti nam.
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
          <div className="mt-8">{Tab_Data.find((item) => item.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
