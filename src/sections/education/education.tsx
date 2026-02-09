import React from "react";
import educations from "../../data/educations.json";
import { FaGraduationCap } from "react-icons/fa";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

import "./education.css";

export default function Education() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={revealRef}
      id="education"
      className="edu-section reveal"
    >
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
                  <h3>{e.degree}</h3>

                  <p className="edu-institution">
                    {e.institution}
                  </p>

                  {e.status && (
                    <p className="edu-note">
                      Estado: {e.status}
                    </p>
                  )}

                  {e.internships && (
                    <p className="edu-note">
                      Pasantías: {e.internships}
                    </p>
                  )}

                  {e.currentState && (
                    <p className="edu-note">
                      Estado actual: {e.currentState}
                    </p>
                  )}

                  {e.note && (
                    <p className="edu-note">
                      {e.note}
                    </p>
                  )}

                  {e.period && (
                    <span className="edu-period">
                      {e.period}
                    </span>
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
