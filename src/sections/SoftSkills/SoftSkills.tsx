import { JSX } from "react";
import data from "../../data/competencies.json";
import "./SoftSkills.css";

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
  return (
    <section id="softskills" className="competencias section-spacing">
      <div className="container-main competencias-wrapper">

        <h2 className="competencias-title">Competencias</h2>
        <p className="competencias-subtitle">
          Competencias técnicas y profesionales aplicadas en el desarrollo
          de soluciones digitales.
        </p>

        <div className="competencias-grid">
          {(data as SkillCategory[]).map((group, index) => (
            <div key={index} className="competencias-card">

              <h3 className="competencias-subtitle">
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

                    <span className="competencia-level">
                      {item.level}
                    </span>

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
