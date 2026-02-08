import experience from "../../data/experience.json";


export default function Experience() {
return (
<section className="py-20 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold mb-10">Experiencia</h2>


<div className="grid md:grid-cols-2 gap-8">
{experience.map((job) => (
<div key={job.company} className="bg-white/5 p-6 rounded-xl">
<h3 className="text-xl font-semibold">{job.company}</h3>
<p className="text-slate-400">{job.role}</p>
<ul className="mt-4 space-y-2">
{job.tasks.map((task, i) => (
<li key={i}>• {task}</li>
))}
</ul>
</div>
))}
</div>
</section>
);
}