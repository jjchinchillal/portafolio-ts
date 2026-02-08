import React, { JSX } from "react";
import personal from "../../data/personal.json";

export default function Profile(): JSX.Element {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-slate-300">
        <h2 className="text-3xl font-bold mb-4">Perfil Profesional</h2>
        <p className="leading-relaxed">
          {personal.tagline}
        </p>
      </div>
    </section>
  );
}
