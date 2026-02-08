import React, { JSX } from "react";
import certifications from "../../data/certifications.json";

export default function Certificactions(): JSX.Element {
  return (
    <section id="certifications" className="section-spacing">
      <div className="container-main">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificaciones</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((c: any, i: number) => (
            <div key={i} className="bg-white/3 p-5 rounded-xl border border-white/5">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{c.institution} · {c.year}</p>
              {c.link && (
                <a className="text-cyan-400 text-sm mt-3 inline-block" href={c.link} target="_blank" rel="noreferrer">Ver certificado</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
