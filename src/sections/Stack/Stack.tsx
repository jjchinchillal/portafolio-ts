import * as Icons from "react-icons/si";
import stack from "../../data/stack.json";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./Stack.css";

export default function Stack() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="stack section-spacing reveal">
      <div className="container-main">

        <h2 className="stack-title">Stack Tecnológico</h2>

        <div className="stack-grid">
          {stack.map((group, index) => (
            <div key={index} className="stack-card">
              <h3 className="stack-card-title">{group.category}</h3>

              <div className="stack-icons">
                {group.items.map((tech, idx) => {
                  const Icon = (Icons as any)[tech.icon];

                  return (
                    <a
                    key={idx}
                    href={tech.url}
                    target="_blank"
                    rel="noreferrer"
                    className="stack-icon"
                    aria-label={tech.name}
                    style={{ "--icon-color": tech.color } as React.CSSProperties}
                  >
                    <Icon />
                    <span className="tooltip">{tech.name}</span>
                  </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
