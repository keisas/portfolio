import { useState, useEffect } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import './InfoPopup.css';

export default function InfoPopup() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  useEffect(() => {
    const closeOnClick = () => setOpen(false);
    if (open) document.addEventListener('click', closeOnClick);
    return () => document.removeEventListener('click', closeOnClick);
  }, [open]);

  return (
    <div className="info-popup-wrapper">
      <FiHelpCircle className="help-icon" onClick={(e) => {
        e.stopPropagation();
        handleToggle();
      }} />
      {open && (
        <>
        <div className="info-popup-backdrop" onClick={() => setOpen(false)}></div>
        <div className="info-popup">

          <div className="info-popup-content">
            <h4>このページの記号・色の意味</h4>

            <div className="info-section">
              <h5>🕒 タイムラインの色</h5>
              <ul>
                <li><span className="dot blue" /> 学歴・研究室配属</li>
                <li><span className="dot orange" /> アルバイト経験</li>
                <li><span className="dot pink" /> インターンシップ</li>
                <li><span className="dot green" /> 研究発表や学会登壇</li>
                <li><span className="dot red" /> 資格試験合格</li>
                <li><span className="dot yellow" /> 自己学習や技術習得</li>
              </ul>
            </div>

            <div className="info-section">
              <h5>🛠️ スキルカードの色</h5>
              <ul>
                <li><span className="dot backend" /> Backend（例: FastAPI, PostgreSQL）</li>
                <li><span className="dot frontend" /> Frontend（例: React, Tailwind）</li>
                <li><span className="dot database" /> Database（例: PostgreSQL, Firestore）</li>
                <li><span className="dot infra" /> Infra（例: Docker, AWSなど）</li>
                <li><span className="dot ml" /> ML/AI（例: ベクトル検索・生成AIなど）</li>
                <li><span className="dot automation" /> Automation（例: ローコード、ノーコードツール）</li>
              </ul>
            </div>

            <div className="info-section">
              <h5>💼 経歴セクションのマーク</h5>
              <ul>
                <li><strong>🎓</strong> 学校関連</li>
                <li><strong>💼</strong> アルバイト</li>
                <li><strong>🧪</strong> インターン</li>
              </ul>
            </div>

            <hr />
            <p>情報の意味を明示し、視覚的な整理を意識しています。色の分別やセクションの内容についてはYoneyamaGPTでも質問できます！</p>
          </div>
        </div>
        </>
      )}
    </div>
  );
}