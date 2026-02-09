import "./hero.css";
import profileImg from "../../assets/images/Profile.webp";
import cvPdf from "../../assets/doc/CV.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaDownload
} from "react-icons/fa";

import personal from "../../data/personal.json";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container-main hero-grid">

        {/* IMAGE */}
        <div className="hero-image fade-in">
          <div className="hero-avatar float-y">
            <img src={profileImg} alt={personal.name} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="hero-content">
          <h1 className="hero-name fade-in">
            {personal.name}
          </h1>

          <h2
            className="hero-role fade-in"
            style={{ animationDelay: "120ms" }}
          >
            {personal.role}
          </h2>

          <p
            className="fade-in"
            style={{ animationDelay: "240ms" }}
          >
            {personal.tagline}
          </p>

          <div
            className="hero-icons fade-in"
            style={{ animationDelay: "360ms" }}
          >
            <a href={personal.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Enviar correo"
            >
              <FaEnvelope />
            </a>

            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp />
            </a>

            {/* CV */}
            <a href={cvPdf} download className="cv-icon">
              <FaDownload />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
