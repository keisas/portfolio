import "./Timeline.css";

interface Event {
  date: string;
  title: string;
  color: string;
}

const events: Event[] = [
  { date: "2021年4月", title: "大学入学\n（東京工業大学 情報理工学院）", color: "#3B82F6" },
  { date: "2022年4月", title: "プログラミング勉強開始", color: "#FBBF24" },
  { date: "2022年4月", title: "C++でAtcoderに取り組む\n(最高値1197)", color: "#FBBF24" },
  { date: "2022年7月", title: "開発バイト開始\n（キャディ株式会社）", color: "#F59E0B" },
  { date: "2023年8月", title: "短期インターン\n（株式会社サイバーエージェント）", color: "#E879F9" },
  { date: "2023年10月", title: "応用情報技術者試験\n（合格）", color: "#F43F5E" },
  { date: "2024年4月", title: "研究室所属\n（東京工業大学 情報理工学院 秋山研究室）", color: "#3B82F6" },
  { date: "2024年8月", title: "RustでAtcoderに取り組む\n(最高値1080)", color: "#FBBF24" },
  { date: "2024年10月", title: "Tokyo Bioinformatics Meeting\n口頭発表", color: "#10B981" },
  { date: "2024年10月", title: "DBスペシャリスト試験\n（合格）", color: "#F43F5E" },
  { date: "2025年2月", title: "学士特定課題研究発表会\n口頭発表", color: "#10B981" },
  { date: "2025年3月", title: "学士課程修了", color: "#3B82F6" },
  { date: "2025年3月", title: "開発バイト退職\n（キャディ株式会社）", color: "#F59E0B" },
  { date: "2025年4月", title: "大学院入学\n（東京科学大学 情報理工学院）", color: "#3B82F6" },
  { date: "2025年4月", title: "開発バイト開始\n（ウト株式会社）", color: "#F59E0B" },
  { date: "2025年6月", title: "情報処理学会第82回バイオ情報学研究会\n口頭発表予定", color: "#10B981" },
  { date: "2027年3月", title: "修士課程修了予定", color: "#3B82F6" },
];

const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-scroll">
        <div className="timeline-bar" />
        {events.map((event, idx) => (
          <div className="timeline-node" key={idx}>
            <div className="event-dot" style={{ backgroundColor: event.color }}></div>
            <div className="event-info">
              <div className="event-date">{event.date}</div>
              <div className="event-title">
              {event.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Timeline;