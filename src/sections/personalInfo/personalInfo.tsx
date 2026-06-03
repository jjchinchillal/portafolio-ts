import React from "react";
import personal from "../../data/personal.json";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import "./personalInfo.css";

export default function PersonalInfo() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={revealRef}
      id="profile"
      className="profile-section reveal"
    >
      <div className="profile-container">
        <div className="profile-card">

          <h2 className="profile-title">
            <FaUser />
            Información Personal
          </h2>

          <div className="profile-grid">

            <div className="profile-item">
              <FaMapMarkerAlt />
              <div className="profile-content">
                <span className="profile-label">
                  Ubicación
                </span>

                <p>{personal.location}</p>
              </div>
            </div>

            <div className="profile-item">
              <FaEnvelope />
              <div className="profile-content">
                <span className="profile-label">
                  Correo Electrónico
                </span>

                <p>{personal.email}</p>
              </div>
            </div>

            <div className="profile-item">
              <FaPhone />
              <div className="profile-content">
                <span className="profile-label">
                  Teléfono
                </span>

                <p>{personal.phone}</p>
              </div>
            </div>

            <a
              className="profile-item profile-link linkedin"
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />

              <div className="profile-content">
                <span className="profile-label">
                  LinkedIn
                </span>

                <p>Ver perfil profesional</p>
              </div>
            </a>

            <a
              className="profile-item profile-link github"
              href={personal.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />

              <div className="profile-content">
                <span className="profile-label">
                  GitHub
                </span>

                <p>Ver repositorios</p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}