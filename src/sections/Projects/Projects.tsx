import projects from "../../data/projects.json";


export default function Projects() {
return (
<section className="py-20">
<h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>


<div className="grid md:grid-cols-3 gap-8">
{projects.map((project) => (
<div key={project.name} className="bg-white/5 p-6 rounded-xl">
<img src={project.image} className="rounded-lg mb-4" />
<h3 className="text-xl font-semibold">{project.name}</h3>
<p className="text-slate-400 mt-2">{project.description}</p>
</div>
))}
</div>
</section>
);
}