import { JSX } from "react";
import data from "../../data/competencies.json";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./softSkills.css";

interface SkillItem {
  name: string;
  level: string;
  levelColor: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export default function SoftSkills(): JSX.Element {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={revealRef}
      id="softskills"
      className="competencias section-spacing reveal"
    >
      <div className="container-main">

        {/* TITULO FUERA DEL CONTENEDOR */}
        <div className="competencias-header">
          <h2 className="competencias-title">Competencias</h2>
          <p className="competencias-subtitle">
            Habilidades técnicas y profesionales aplicadas en desarrollo de software moderno.
          </p>
        </div>

        {/* GRID */}
        <div className="competencias-grid">
          {(data as SkillCategory[]).map((group, index) => (
            <div key={index} className="competencias-card">

              <h3 className="competencias-category">
                {group.category}
              </h3>

              <div className="competencias-list">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="competencia-badge"
                    style={{ "--level-color": item.levelColor } as React.CSSProperties}
                  >
                    {item.name}
                    <span className="competencia-level">{item.level}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}