import SkillCard from "../common/SkillCard";
import CertBadge from "../common/CertBadge";
import Experience from "./Experience";
import Timeline from "./Timeline";
import InfoPopup from "../common/InfoPopup";
import Projects from "../Projects/Projects";
import PresentationSection from "./Presentation";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="card">
      {/* <h2 className="card-title">プロフィール</h2>
      <p className="card-text">
        情報工学専攻の大学院生。Rust, Python, SQL, バイオインフォマティクスに興味があります。
      </p> */}
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
            {/* <SkillCard label="Go" category="backend" /> */}
            <SkillCard label="C++" category="backend" />
            {/* <SkillCard label="Java" category="backend" /> */}
            {/* <SkillCard label="React" category="frontend" /> */}
            {/* <SkillCard label="Django" category="frontend" /> */}
            <SkillCard label="SQL" category="database" />
            {/* <SkillCard label="PostgreSQL" category="database"/> */}
            <SkillCard label="Docker" category="infra" />
            {/* <SkillCard label="GCP" category="infra" /> */}
            {/* <SkillCard label="AWS" category="infra" /> */}
          </div>
        </div>

        <div className="profile-box full">
          <div className="profile-header">
            <h3 className="profile-heading-small">重点的に学習中</h3>
            <InfoPopup />
          </div>
            <div className="skill-list">
              {/* <SkillCard label="Rust" category="backend" /> */}
              {/* <SkillCard label="Python" category="backend" /> */}
              {/* <SkillCard label="PostgreSQL" category="database" /> */}
              {/* <SkillCard label="Docker" category="infra" /> */}
              <SkillCard label="AWS" category="infra" />
              <SkillCard label="Kubernetes" category="infra" />
            </div>
          </div>

          <div className="profile-box cert full">
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

      <div className="profile-box">
        <Experience />
      </div>

      <div className="profile-box">
        <PresentationSection />
        </div>

      <div className="profile-box">
        <Projects />
      </div>
    </section>
  );
}