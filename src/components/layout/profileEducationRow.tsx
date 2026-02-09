import PersonalInfo from "../../sections/personalInfo/personalInfo";
import Education from "../../sections/education/education";

import "./profile-education-row.css";

export default function ProfileEducationRow() {
  return (
    <section className="profile-education-row">
      <div className="profile-education-grid">
        <PersonalInfo />
        <Education />
      </div>
    </section>
  );
}
