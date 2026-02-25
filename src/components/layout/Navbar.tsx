import React, { JSX } from "react";

export default function Navbar(): JSX.Element {
  const links = [
    { id: "hero", label: "Inicio" },
    { id: "profile", label: "Perfil" },
    { id: "stack", label: "Stack" },
    { id: "experience", label: "Experiencia" },
    { id: "projects", label: "Proyectos" },
    { id: "education", label: "Educación" },
    { id: "certifications", label: "Certificaciones" },
    { id: "contact", label: "Contacto" },
  ];

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Juan José Chinchilla
        </div>

        <nav className="hidden md:flex gap-4 items-center text-sm text-slate-200">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="px-3 py-1 rounded-md hover:bg-white/5 transition"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-1 rounded-md bg-white/5">Menu</button>
        </div>
      </div>
    </header>
  );
}
