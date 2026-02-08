import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";
import Experience from "./sections/Experience/Experience";
import Stack from "./sections/Stack/Stack";
import Projects from "./sections/Projects/Projects";
import Certifications from "./sections/Certifications/Certifications";
import Contact from "./sections/Contact/Contact";

export default function App() {
  return (
    <div className="min-h-screen">

      <main className="flex flex-col gap-24">

        <Hero />
        <Profile />
        <Experience />
        <Stack />
        <Projects />
        <Certifications />
        <Contact />

      </main>

    </div>
  );
}

