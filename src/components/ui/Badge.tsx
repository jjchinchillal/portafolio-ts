import React from "react";

export default function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-200">
      {text}
    </span>
  );
}
