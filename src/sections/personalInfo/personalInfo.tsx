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
            Información
          </h2>

          <div className="profile-grid">

            <div className="profile-item">
              <FaUser />
              <span>{personal.name}</span>
            </div>

            <div className="profile-item">
              <FaMapMarkerAlt />
              <span>{personal.location}</span>
            </div>

            <div className="profile-item">
              <FaEnvelope />
              <span>{personal.email}</span>
            </div>

            <div className="profile-item">
              <FaPhone />
              <span>{personal.phone}</span>
            </div>

            <a
              className="profile-item profile-link"
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              className="profile-item profile-link"
              href={personal.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
