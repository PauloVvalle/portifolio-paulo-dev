"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, cum!
            Similique officia voluptatum, molestiae possimus vero odit quam
            doloribus ducimus maiores tempora labore velit aut reprehenderit
            natus recusandae deleniti nam.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("habilidades")}
              active={tab === "habilidades"}
            >
              {" "}
              habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("formacoes")}
              active={tab === "formacoes"}
            >
              Formações
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experiencia")}
              active={tab === "Experiencia"}
            >
              Experiencia
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
