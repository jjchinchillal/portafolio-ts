import React, { JSX } from "react";
import projects from "../../data/projects.json";

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p: any, i: number) => (
            <article key={i} className="bg-white/3 p-4 rounded-2xl border border-white/5">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-slate-300 text-sm mt-2">{p.description}</p>
              <div className="mt-3 flex gap-3">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-cyan-300 text-sm">Demo</a>}
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-cyan-300 text-sm">Repo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
