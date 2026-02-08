import React, { JSX } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import personal from "../../data/personal.json";

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-slate-300 mb-6">¿Tienes un proyecto o vacante? Hablemos.</p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a href={`mailto:${personal.email}`} className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5">
            <FaEnvelope /> {personal.email}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5">
            <FaGithub /> GitHub
          </a>
        </div>

        <p className="text-slate-400 text-sm">Tel: {personal.phone}</p>
      </div>
    </section>
  );
}
