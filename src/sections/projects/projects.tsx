import React, { JSX } from "react";
import projects from "../../data/projects.json";
import * as SiIcons from "react-icons/si";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./Projects.css";

export default function Projects(): JSX.Element {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={revealRef}
      id="projects"
      className="projects-section reveal"
    >
      <div className="projects-container">
        <h2 className="projects-title">Proyectos</h2>

        <div className="projects-grid">
          {projects.map((p: any, i: number) => (
            <article key={i} className="project-card">

              {/* Logo */}
              <div className="project-logo-wrapper">
                <img
                  src={p.image}
                  alt={p.name}
                  className="project-logo"
                />
              </div>

              {/* Contenido */}
              <div className="project-content">
                <h3 className="project-name">{p.name}</h3>

                <p className="project-description">
                  {p.description}
                </p>

                {/* Highlights */}
                <ul className="project-highlights">
                  {p.highlights.map((h: string, idx: number) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="project-tech-section">
                  <span className="project-subtitle">
                    Tecnologías utilizadas
                  </span>

                  <div className="project-stack">
                    {p.stack.map((tech: any, idx: number) => {
                      const IconComponent = (SiIcons as any)[tech.icon];

                      return (
                        <a
                          key={idx}
                          href={tech.url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-tech"
                          style={{ "--tech-color": tech.color } as React.CSSProperties}
                          aria-label={tech.name}
                        >
                          <IconComponent />
                          <span className="tooltip">{tech.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="project-divider" />

                {/* Actions */}
                <div className="project-actions-section">
                  <span className="project-subtitle">Explorar proyecto</span>

                  <div className="project-actions">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn primary"
                        aria-label="Ver sitio"
                      >
                        <FiExternalLink />
                        <span className="tooltip">Ver sitio</span>
                      </a>
                    )}

                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                        aria-label="Ver código"
                      >
                        <FiGithub />
                        <span className="tooltip">Ver código</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
