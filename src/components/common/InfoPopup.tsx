import { useState, useEffect } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import './InfoPopup.css';
import { FaGithub, FaExternalLinkAlt, FaFileAlt, FaYoutube } from 'react-icons/fa';

type InfoPopupProps = {
  children: React.ReactNode;
};

export function InfoPopup({ children }: InfoPopupProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const onClose = () => setOpen(false);

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
        <div className="info-popup-backdrop"></div>
        <div className="info-popup" onClick={(e) => e.stopPropagation()}>
          <div className="info-popup-content">
            {children}
          </div>
          <button className="close-button" onClick={onClose}>
            閉じる
          </button>
        </div>
        </>
      )}
    </div>
  );
}

export function TimelineInfo() {
  return (
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
  );
}

export function SkillColorInfo() {
  return (
    <div className="info-section">
      <h5>🛠️ スキルカードの色</h5>
      <ul>
        <li><span className="dot backend" /> Backend</li>
        <li><span className="dot frontend" /> Frontend</li>
        <li><span className="dot database" /> Database</li>
        <li><span className="dot infra" /> Infra</li>
        <li><span className="dot ml" /> ML/AI</li>
        <li><span className="dot automation" /> Automation</li>
      </ul>
    </div>
  );
}

export function CareerMarkInfo() {
  return (
    <div className="info-section">
      <h5>💼 経歴セクションのマーク</h5>
      <ul>
        <li><strong>🎓</strong> 学校関連</li>
        <li><strong>💼</strong> アルバイト</li>
        <li><strong>🧪</strong> インターン</li>
      </ul>
    </div>
  );
}

export function LinkIconInfo() {
  return (
    <div className="info-section">
      <h5>🔗 制作物セクションのリンク</h5>
      <ul>
        <li><FaGithub /> GitHub</li>
        <li><FaYoutube /> YouTube</li>
        <li><FaExternalLinkAlt /> デモ・外部リンク</li>
        <li><FaFileAlt /> 論文・資料</li>
      </ul>
    </div>
  );
}