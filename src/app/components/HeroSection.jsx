"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="md:grid md:drig-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-800">
              olá, eu sou {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Paulo",
                1000,
                "Fullstacks",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl">
            Desenvolvedor Fullstack Junior, apaixonado por tecnologia e jogos.
          </p>
          <div className="grid grid-cols-1 sm:block gap-4">
            <Link href="#contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-200 via-blue-500 to-secondary-950 hover:bg-slate-800 text-white">
                Me contrate
              </button>
            </Link>
            <Link 
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-[#121212] border border-primary-700 hover:bg-slate-800 text-white" 
              href="https://drive.google.com/uc?export=download&id=1BWzdcIAWykva0mlKuW9QQmpKtm7J6G8L" 
              download="Curriculo-Paulo.pdf" 
            >
                Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Dev-pc.png"
              alt="Dev"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
