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
    <section id="contact" className="contact">
      {/* 👇 ESTA es la clave */}
      <div className="container-main contact-content reveal-active">

        <h2 className="contact-title fade-in">
          Contacto
        </h2>

        <p
          className="contact-subtitle fade-in"
          style={{ animationDelay: "120ms" }}
        >
          ¿Tienes un proyecto o una vacante? Hablemos.
        </p>

        <div
          className="contact-icons fade-in"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={`mailto:${personal.email}`}
            aria-label="Enviar correo"
          >
            <FaEnvelope />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p
          className="contact-footer fade-in"
          style={{ animationDelay: "360ms" }}
        >
          {personal.email} · {personal.phone}
        </p>

      </div>
    </section>
  );
}
