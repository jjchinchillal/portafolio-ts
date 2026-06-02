import profile from "../../data/personal.json";
import "./profile.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function Profile() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="profile section reveal">
      <div className="container-main">
        <div className="profile-inner">

          <h2 className="profile-title">{profile.title}</h2>

          <div className="profile-bubble">

            {/* Párrafos del summary */}
            <div className="profile-content">
              {profile.summary.map((paragraph, index) => (
                <p key={index} className="profile-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="profile-divider" />

            {/* Highlights */}
            <ul className="profile-highlights">
              {profile.highlights.map((item, index) => (
                <li key={index} className="profile-highlight-item">
                  <span className="profile-highlight-dot" />
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}