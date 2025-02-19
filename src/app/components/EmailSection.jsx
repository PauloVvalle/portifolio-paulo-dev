"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (res.ok) {
      setIsSuccess(true);
      setStatusMessage('Email enviado com sucesso!');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setIsSuccess(false);
      setStatusMessage('Erro ao enviar email.');
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 pt-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Meu contato</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou atualmente em busca de novas oportunidades, minha caixa de
          entrada está sempre aberta. Quer você tenha uma pergunta ou apenas
          queira enviar dicas, farei o meu melhor para responder!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link className="hover-scale" href="https://github.com/PauloVvalle">
            <Image
              src="/images/github.png"
              alt="Github"
              width={30}
              height={30}
            />
          </Link>
          <Link className="hover-scale" href="https://www.linkedin.com/in/paulo-roberto-vasques-valle-a37600274/">
            <Image
              src="/images/linkedin.png"
              alt="Linkedin"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Seu Email para contato:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="paulovvalledev@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Assunto:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="assunto"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Mensagem:
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Deixe sua mensagem aqui.."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-primary-200 via-blue-500 to-secondary-950 hover:bg-slate-800 text-white rounded-lg py-2.5"
          >
            enviar
          </button>
          {statusMessage && (
            <p className={`mt-4 text-sm ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;