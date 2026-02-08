import Hero from "./sections/Hero/Hero";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";


export default function App() {
return (
<main className="bg-[#020617] text-white">
<Hero />
<Experience />
<Projects />
<Contact />
</main>
);
}