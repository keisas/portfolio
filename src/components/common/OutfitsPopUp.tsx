// OutfitsPopUp.tsx
import './OutfitsPopUp.css';

import avatarDevImg from '../../assets/images/avatar_dev.png';
import avatarSchoolImg from '../../assets/images/avatar_school.png';
import avatarFormalImg from '../../assets/images/avatar_formal.png';
import avatarNormalImg from '../../assets/images/avatar_normal.png';
import avatarNormal2Img from '../../assets/images/avatar_normal2.png';

type OutfitCategory =
  | "自己紹介"
  | "技術"
  | "キャリア"
  | "研究・学業"
  | "雑談";

  type Props = {
    open: boolean;
    seenOutfits: Record<OutfitCategory, boolean>;       // 解放済みか
    seenOnceOutfits: Record<OutfitCategory, boolean>;  // 一度見たか
    onClose: () => void;
    onSeenOnce: (key: OutfitCategory) => void;         // 既読にする
  };

type Outfit = {
  key: OutfitCategory;
  label: string;
  image: string;
  hint: string;
};

const OUTFITS: Outfit[] = [
    {
      key: "自己紹介",
      label: "普段着（自己紹介）",
      image: avatarNormalImg,
      hint: "自己紹介を聞いてみてください",
    },
    {
      key: "技術",
      label: "パーカー（技術）",
      image: avatarDevImg,
      hint: "技術について質問してみてください",
    },
    {
      key: "キャリア",
      label: "スーツ（仕事観）",
      image: avatarFormalImg,
      hint: "将来や仕事観について聞いてみてください",
    },
    {
      key: "研究・学業",
      label: "研究着（学業）",
      image: avatarSchoolImg,
      hint: "研究内容や大学での活動を聞いてみてください",
    },
    {
      key: "雑談",
      label: "ラフ（私生活）",
      image: avatarNormal2Img,
      hint: "趣味や最近の出来事を聞いてみてください",
    },
  ];
export default function OutfitsPopUp({ open, seenOutfits, onClose, seenOnceOutfits, onSeenOnce }: Props) {
  if (!open) return null;

  const unlockedCount = Object.values(seenOutfits).filter(Boolean).length;

  return (
    <div className="outfits-overlay" onClick={onClose}>
      <div className="outfits-modal" onClick={(e) => e.stopPropagation()}>
        <h3>衣装コレクション</h3>
        {/* 平文を追加 */}
        <p className="outfits-subtitle">
            質問内容によって衣装が解放されます
        </p>


        <ul className="outfits-grid">
        {OUTFITS.map((outfit) => {
  const unlocked = seenOutfits[outfit.key];
  const seenOnce = seenOnceOutfits[outfit.key];
  const isNew = unlocked && !seenOnce;

  return (
    <li
      key={outfit.key}
      className={`outfit-card ${unlocked ? "unlocked" : "locked"}`}
      onMouseEnter={() => {
        if (isNew) {
          onSeenOnce(outfit.key);
        }
      }}
    >
      <div className="outfit-image-wrapper">
        <img
          src={outfit.image}
          alt={outfit.label}
          className="outfit-image"
        />

        {!unlocked && (
          <div className="outfit-hint">
            {outfit.hint}
          </div>
        )}
      </div>

      <div className="outfit-label">
        {isNew && <span className="new-badge">New</span>}
        {unlocked ? outfit.label : "???"}
      </div>
    </li>
  );
})}
        </ul>

        <p className="outfits-progress">
          {unlockedCount} / {OUTFITS.length} 解放
        </p>

        <button className="close-button" onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  );
}