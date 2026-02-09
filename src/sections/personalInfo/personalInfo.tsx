import React, { JSX } from "react";
import personal from "../../data/personal.json";

export default function PersonalInfo(): JSX.Element {
  return (
    <section id="profile" className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/2 p-6 rounded-2xl border border-white/5">
        <h2 className="text-2xl font-bold mb-4">Información Personal</h2>

        <div className="grid md:grid-cols-2 gap-4 text-slate-300">
          <div><span className="text-cyan-400">Nombre:</span> {personal.name}</div>
          <div><span className="text-cyan-400">Ubicación:</span> {personal.location}</div>
          <div><span className="text-cyan-400">Email:</span> {personal.email}</div>
          <div><span className="text-cyan-400">Teléfono:</span> {personal.phone}</div>
          <div><span className="text-cyan-400">LinkedIn:</span> <a className="text-cyan-300" href={personal.linkedin} target="_blank" rel="noreferrer">{personal.linkedin}</a></div>
          <div><span className="text-cyan-400">GitHub:</span> <a className="text-cyan-300" href={personal.github} target="_blank" rel="noreferrer">{personal.github}</a></div>
        </div>
      </div>
    </section>
  );
}
