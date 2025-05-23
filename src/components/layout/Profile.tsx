import SkillCard from "../common/SkillCard";
import CertBadge from "../common/CertBadge";
import InfoPopup from "../common/InfoPopup";
import Experience from "../sections/Experience";
import Timeline from "../sections/Timeline";
import Projects from "../sections/Projects";
import Presentation from "../sections/Presentation";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="card">
      <div className="profile-box cert full">
        <div className="profile-header">
          <h3 className="profile-heading">タイムライン</h3>
          <InfoPopup />
        </div>
        <Timeline />
      </div>

      <div className="profile-grid">
        <div className="profile-box full">
          <div className="profile-header">
            <h3 className="profile-heading-small">自信のあるスキル</h3>
            <InfoPopup />
          </div>
         
          <div className="skill-list">
            <SkillCard label="Rust" category="backend" />
            <SkillCard label="Python" category="backend" />
            <SkillCard label="C++" category="backend" />
            <SkillCard label="SQL" category="database" />
            <SkillCard label="Docker" category="infra" />
          </div>
        </div>

        <div className="profile-box full">
          <div className="profile-header">
            <h3 className="profile-heading-small">重点的に学習中</h3>
            <InfoPopup />
          </div>
            <div className="skill-list">
              <SkillCard label="AWS" category="infra" />
              <SkillCard label="Kubernetes" category="infra" />
            </div>
          </div>

          <div className="profile-box cert full" id="certification">
          <div className="profile-header">
            <h3 className="profile-heading-small">資格</h3>
            <InfoPopup />
          </div>
          <div className="badge-list">
            <CertBadge label="応用情報技術者 (2023秋)" level="basic" />
            <CertBadge label="DBスペシャリスト (2024秋)" level="advanced" />
          </div>
        </div>
      </div>

      <div className="profile-box" id="experience">
        <Experience />
      </div>

      <div className="profile-box" id="presentation">
        <Presentation />
        </div>

      <div className="profile-box" id="projects">
        <Projects />
      </div>
    </section>
  );
}