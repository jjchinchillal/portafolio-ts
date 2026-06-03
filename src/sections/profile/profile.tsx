import profile from "../../data/personal.json";
import "./profile.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

import {
  FaRocket,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaServer,
  FaLightbulb
} from "react-icons/fa";

export default function Profile() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  const icons = [
    <FaRocket />,
    <FaCode />,
    <FaMobileAlt />,
    <FaDatabase />,
    <FaServer />,
    <FaLightbulb />
  ];

  return (
    <section ref={revealRef} className="profile section reveal">
      <div className="container-main">
        <div className="profile-inner">

          <h2 className="profile-title">
            {profile.title}
          </h2>

          <div className="profile-bubble">

            <div className="profile-intro">
              <div className="profile-role">
                {profile.role}
              </div>

              <p className="profile-tagline">
                {profile.tagline}
              </p>
            </div>

            <div className="profile-divider" />

            <div className="profile-content-layout">

              <div className="profile-content">
                {profile.summary.map((paragraph, index) => (
                  <p key={index} className="profile-text">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="profile-side">

                <div className="profile-avatar">
                  JJCL
                </div>

                <div className="profile-signature">
                  <h3>Juan José Chinchilla Lanziano</h3>
                  <span>Software Developer</span>
                </div>

                <div className="profile-stats">

                  <div className="profile-stat">
                    <strong>2+</strong>
                    <span>Años de experiencia</span>
                  </div>

                  <div className="profile-stat">
                    <strong>10+</strong>
                    <span>Tecnologías</span>
                  </div>



                </div>

              </div>

            </div>

            <div className="profile-divider" />

            <ul className="profile-highlights">
              {profile.highlights.map((item, index) => (
                <li
                  key={index}
                  className="profile-highlight-item"
                >
                  <div className="profile-highlight-icon">
                    {icons[index % icons.length]}
                  </div>

                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}