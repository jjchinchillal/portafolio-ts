import React from "react";

const softs = ["Trabajo en equipo", "Liderazgo", "Autonomía", "Pensamiento analítico", "Comunicación"];

export default function SoftSkills(): JSX.Element {
  return (
    <section id="softskills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Habilidades Blandas</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {softs.map((s, i) => (
            <span key={i} className="px-4 py-2 bg-white/5 text-slate-200 rounded-full">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
