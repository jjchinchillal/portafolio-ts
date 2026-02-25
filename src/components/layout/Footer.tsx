import React, { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-10 border-t border-white/5 text-center text-slate-400 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Juan José Chinchilla · Portfolio Profesional</p>
        <p className="text-sm mt-2">Email: jchinchilla1204@gmail.com · Bogotá - Colombia</p>
      </div>
    </footer>
  );
}
