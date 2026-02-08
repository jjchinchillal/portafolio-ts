import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/3 p-6 rounded-2xl border border-white/5 backdrop-blur">
      {children}
    </div>
  );
}
