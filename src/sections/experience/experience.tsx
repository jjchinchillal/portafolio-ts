import experience from "../../data/experience.json";
import BosqueLogo from "../../assets/logos/BosqueNagal.png";
import FunigualdadLogo from "../../assets/logos/Funigualdad.png";
import InstitutoLogo from "../../assets/logos/InstitutoFrances.png";

import { FaGlobe, FaInstagram } from "react-icons/fa";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

import "./Experience.css";

const logos: Record<string, string> = {
  "Grupo Nagal S.A.S": BosqueLogo,
  "Fundación FUNIGUALDADH": FunigualdadLogo,
  "Proyecto Instituto Francés": InstitutoLogo,
};

export default function Experience() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="experience section-spacing reveal">
      <div className="container-main">

        <h2 className="experience-title">Experiencia Profesional</h2>

        <div className="experience-grid">
          {experience.map((job, index) => (
            <article key={index} className="experience-card">

              <div className="experience-logo">
                <img src={logos[job.company]} alt={job.company} />
              </div>

              <div className="experience-info">
                <h3 className="experience-company">{job.company}</h3>
                <p className="experience-role">
                  {job.role} · {job.period}
                </p>

                <ul className="experience-tasks">
                  {job.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>

                <div className="experience-links">
                  <a href={job.website} target="_blank" rel="noreferrer">
                    <FaGlobe /> Sitio web
                  </a>

                  <a href={job.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram /> Instagram
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
