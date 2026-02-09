import React, { JSX } from "react";
import educations from "../../data/educations.json";

export default function Education(): JSX.Element {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Educación</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {educations.map((e: any, i: number) => (
            <div key={i} className="bg-white/3 p-5 rounded-xl border border-white/5">
              <h3 className="font-semibold">{e.institution}</h3>
              <p className="text-slate-300 text-sm">{e.degree}</p>
              <p className="text-slate-400 text-sm mt-2">{e.note}</p>
              <p className="text-xs text-slate-500 mt-3">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
