import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Skills from "./sections/skills/skills";
import SoftSkills from "./sections/softSkills/softSkills";
import Hero from "./sections/hero/hero";
import Profile from "./sections/profile/profile";
import Experience from "./sections/experience/experience";
import Stack from "./sections/stack/stack";
import Projects from "./sections/projects/projects";
import Certifications from "./sections/certifications/certifications";
import Contact from "./sections/contact/contact";

export default function App() {
  return (
    <div className="min-h-screen">

      <main className="main-layout">

        <Hero />
        <Profile />
        <Experience />
        <Stack />
        <Skills />
        <SoftSkills />
        <Projects />
        <Certifications />
        <Contact />

      </main>

    </div>
  );
}

