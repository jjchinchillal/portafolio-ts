import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Skills from "./sections/Skills/skills";
import SoftSkills from "./sections/SoftSkills/softSkills";
import Hero from "./sections/Hero/hero";
import ProfileEducationRow from "./components/layout/profileEducationRow";
import Profile from "./sections/Profile/profile";
import Experience from "./sections/Experience/experience";
import Stack from "./sections/Stack/stack";
import Projects from "./sections/Projects/projects";
import Certifications from "./sections/Certifications/certifications";
import Contact from "./sections/Contact/contact";

export default function App() {
  return (
    <div className="min-h-screen">

      <main className="main-layout">

        <Hero />
        <ProfileEducationRow />
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


