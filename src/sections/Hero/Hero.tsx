import { Github, Linkedin } from "lucide-react";


export default function Hero() {
return (
<section className="min-h-screen flex flex-col justify-center items-center text-center gap-6">
<img
src="/images/profile/profile.jpg"
className="w-40 h-40 rounded-full border-4 border-indigo-500"
/>


<h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
Juan José Chinchilla
</h1>


<p className="text-xl text-slate-300">
Frontend & Mobile Developer
</p>


<div className="flex gap-6">
<Github />
<Linkedin />
</div>
</section>
);
}