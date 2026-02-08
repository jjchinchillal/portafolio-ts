import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary", ...rest }: ButtonProps) {
  const base = "px-4 py-2 rounded-xl font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-cyan-500 hover:bg-cyan-600 text-black"
      : "border border-white/10 hover:bg-white/5 text-white";

  return (
    <button className={`${base} ${styles}`} {...rest}>
      {children}
    </button>
  );
}
