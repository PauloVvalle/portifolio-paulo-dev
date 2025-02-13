import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 pt-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">

        </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Meu contato</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou atualmente em busca de novas oportunidades, minha caixa de
          entrada está sempre aberta. Quer você tenha uma pergunta ou apenas
          queira dizer oi, farei o meu melhor para responder!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="/">
            <Image
              src="/images/github.png"
              alt="Github"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/linkedin.png"
              alt="Linkedin"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="paulovvalledev@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="assunto"
            />
          </div>
          <div className="mb-6">
            <label 
            htmlFor="message"
            className="text-white block mb-2 text-sm font-medium"
            >
              Mensagem
            </label>
            <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Deixe sua mensagem aqui.."
            >
            </textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-blue-200 via-blue-500 to-blue-950 hover:bg-slate-800 text-white rounded-lg py-2.5"
          >
            enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
