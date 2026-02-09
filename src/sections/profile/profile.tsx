import profile from "../../data/personal.json";
import "./profile.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function Profile() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="profile section reveal">
      <div className="container-main">

        {/* Wrapper que controla el ancho real */}
        <div className="profile-inner">

          <h2 className="profile-title">{profile.title}</h2>

          <div className="profile-bubble">
            <div className="profile-content">
              {profile.summary.map((paragraph, index) => (
                <p key={index} className="profile-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
