import React, { JSX } from "react";
import { SiReact, SiTypescript, SiFlutter, SiPostgresql, SiMongodb, SiNodedotjs } from "react-icons/si";

const tech = [
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

export default function Stack(): JSX.Element {
  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Stack Tecnológico</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {tech.map((t, i) => (
            <div key={i} className="w-44 bg-white/3 p-4 rounded-lg border border-white/5 flex flex-col items-center gap-2">
              <div className="text-2xl text-cyan-300">{t.icon}</div>
              <div className="text-sm text-slate-200">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
