import React from "react";
import skills from "../../data/skills.json";

export default function Skills(): JSX.Element {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills Técnicos</h2>

        <div className="space-y-6">
          {skills.map((s: any, i: number) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-200">{s.name}</span>
                <span className="text-slate-400 text-sm">{s.level}%</span>
              </div>
              <div className="w-full bg-white/5 h-3 rounded-full">
                <div className="h-3 rounded-full bg-cyan-400" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
