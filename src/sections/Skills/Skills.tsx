import * as Icons from "react-icons/si";
import skills from "../../data/skills.json";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills section-spacing">
      <div className="container-main skills-wrapper">

        <h2 className="skills-title">Skills Técnicos</h2>
        <p className="skills-subtitle">
          Tecnologías base utilizadas en mis proyectos.
        </p>

        <div className="skills-list">
          {skills.map((skill: any, index: number) => {
            const IconComponent = (Icons as any)[skill.icon];

            return (
              <div key={index} className="skill-card">

                <div className="skill-header">
                  <div className="skill-info">
                    {IconComponent && (
                      <IconComponent
                        className="skill-icon"
                        style={{ color: skill.color }}
                      />
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
