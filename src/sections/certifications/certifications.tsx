import React, { JSX } from "react";
import certifications from "../../data/certifications.json";
import "./Certifications.css";

export default function Certifications(): JSX.Element {
  return (
    <section id="certifications" className="certifications section-spacing">
      <div className="container-main reveal-active">

        <h2 className="certifications-title">Certificaciones</h2>

        <div className="certifications-grid">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="certification-card reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img
                src={c.logo}
                alt={c.institution}
                className="certification-logo"
              />

              <h3 className="certification-title">{c.title}</h3>

              <span className="certification-tooltip">
                {c.institution} · {c.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
