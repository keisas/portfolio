import "./Presentation.css";
import InfoPopup from "../common/InfoPopup";

const presentations = [
  {
    date: "2024年10月",
    title: "口頭発表 - 第8回 Tokyo Bioinformatics Meeting",
  },
  {
    date: "2025年3月",
    title: "口頭発表 - 学士特定課題研究発表会",
  },
  {
    date: "2025年6月",
    title: "口頭発表 - 情報処理学会第82回バイオ情報学研究会",
  },
  {
    date: "2025年10月",
    title: "ポスター発表予定 - CBI学会2025年大会",
  },
];

export default function Presentation() {
  return (
    <div>
      <div className="profile-header">
        <h3 className="profile-heading">発表</h3>
        <InfoPopup />
      </div>
      <div className="presentation-list">
        {presentations.map((pres, idx) => (
          <div className="presentation-item" key={idx}>
            <div className="presentation-item-header">
              <div className="presentation-item-title">{pres.title}</div>
              <div className="presentation-item-date">{pres.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}