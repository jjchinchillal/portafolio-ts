import profile from "../../data/personal.json";
import "./Profile.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function Profile() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="profile section-spacing reveal">
      <div className="container-main profile-wrapper">
        <h2 className="profile-title">{profile.title}</h2>

        <div className="profile-content">
          {profile.summary.map((paragraph, index) => (
            <p key={index} className="profile-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
