import { JSX } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa";

import personal from "../../data/personal.json";
import "./contact.css";

export default function Contact(): JSX.Element {
  return (
    <footer id="contact" className="footer-contact">

      <div className="container-main footer-inner">

        {/* LEFT */}
        <div className="footer-left">
          <h2 className="footer-title">
            Conectemos
          </h2>

          <p className="footer-text">
            ¿Tienes una idea, proyecto o vacante? Estoy disponible para colaborar
            en productos digitales modernos.
          </p>

          <span className="footer-email">
            {personal.email}
          </span>
        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <a href={`mailto:${personal.email}`} aria-label="Email">
            <FaEnvelope />
          </a>

          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href={personal.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={personal.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>

        </div>

      </div>

      {/* BOTTOM CENTER TEXT */}
      <div className="footer-bottom">
        Ingeniero de Sistemas © 2026 Juan José Chinchilla Lanziano
      </div>

    </footer>
  );
}