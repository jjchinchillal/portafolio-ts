import React from "react";
import educations from "../../data/educations.json";
import { FaGraduationCap } from "react-icons/fa";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

import "./education.css";

export default function Education() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} id="education" className="edu-section reveal">
      <div className="edu-container">
        <div className="edu-card">

          <h2 className="edu-title">
            <FaGraduationCap />
            Formación Académica
          </h2>

          <div className="edu-timeline">

            {educations.map((e: any, i: number) => (
              <div key={i} className="edu-item">

                <div className="edu-dot" />

                <div className="edu-content">

                  <h3 className="edu-degree">
                    {e.degree}
                  </h3>

                  <p className="edu-institution">
                    {e.institution}
                  </p>

                  <div className="edu-meta">
                    {e.status && (
                      <span className="edu-status">
                        {e.status}
                      </span>
                    )}

                    {e.period && (
                      <span className="edu-period">
                        {e.period}
                      </span>
                    )}
                  </div>

                  {e.note && (
                    <p className="edu-note">
                      {e.note}
                    </p>
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}