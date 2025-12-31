import { useEffect, useState } from 'react';
import avatarDevImg from '../../assets/images/avatar_dev.png';
import avatarSchoolImg from '../../assets/images/avatar_school.png';
import avatarFormalImg from '../../assets/images/avatar_formal.png';
import avatarNormalImg from '../../assets/images/avatar_normal.png';
import avatarNormal2Img from '../../assets/images/avatar_normal2.png';
import OutfitsPopUp from '../common/OutfitsPopUp';
import { FaTshirt } from 'react-icons/fa';

import './Hero.css';

const SEEN_OUTFITS_KEY = "seenOutfits";
const SEEN_ONCE_OUTFITS_KEY = "seenOnceOutfits";

export default function WelcomeSection() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "ようこそ！！！米山のポートフォリオへ！\n私はYoneyamaGPTです。このページや米山の基本情報についてお答えできます。\n下の入力欄に質問を入力してください。\n例えば、「出身の大学は？」「最近見た映画は？」などです。\n質問内容によって私の衣装も変わります。（全5パターン）",
    },
  ]);
  const [question, setQuestion] = useState({ role: "user", content: "" });
  const [avatarImage, setAvatarImage] = useState(avatarNormalImg);
  const [loading, setLoading] = useState(false);
  const [showOutfits, setShowOutfits] = useState(false);
  const [newOutfitAvailable, setNewOutfitAvailable] = useState(false);
  const [seenOutfits, setSeenOutfits] = useState<Record<OutfitCategory, boolean>>(() => {
    const stored = localStorage.getItem(SEEN_OUTFITS_KEY);
    return stored
      ? JSON.parse(stored)
      : {
          自己紹介: true,
          技術: false,
          キャリア: false,
          "研究・学業": false,
          雑談: false,
        };
  });
  
  const [seenOnceOutfits, setSeenOnceOutfits] = useState<Record<OutfitCategory, boolean>>(() => {
    const stored = localStorage.getItem(SEEN_ONCE_OUTFITS_KEY);
    return stored
      ? JSON.parse(stored)
      : {
          自己紹介: true,
          技術: false,
          キャリア: false,
          "研究・学業": false,
          雑談: false,
        };
  });
  

  type OutfitCategory =
  | "自己紹介"
  | "技術"
  | "キャリア"
  | "研究・学業"
  | "雑談";

  
  const handleSeenOnce = (key: OutfitCategory) => {
    setSeenOnceOutfits(prev => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setQuestion(() => userMessage);
    setInput("");
    setLoading(true);
    setMessages(() => [{ role: "system", content: "..." }]); 

    try {
      const res = await fetch("https://api.yonecoding.com/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      let categoryParsed = false;
      let accumulatedText = "";

      if (reader) {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          accumulatedText += chunk;
          console.log("Chunk:", chunk); 

          if (!categoryParsed && accumulatedText.includes("]]")) {
            const match = accumulatedText.match(/\[\[CATEGORY:(.*?)\]\]/);
            if (match) {
              const category = match[1];
              categoryParsed = true;

              // もともと見たことがない衣装なら、新しい衣装がアンロックされたことを示す
              if (!seenOutfits[category as OutfitCategory]) {
                setNewOutfitAvailable(true);
                setSeenOutfits((prev) => ({
                  ...prev,
                  [category]: true,
                }));
              }

              switch (category) {
                case "自己紹介": setAvatarImage(avatarNormalImg); break;
                case "技術": setAvatarImage(avatarDevImg); break;
                case "キャリア": setAvatarImage(avatarFormalImg); break;
                case "研究・学業": setAvatarImage(avatarSchoolImg); break;
                case "雑談": setAvatarImage(avatarNormal2Img); break;
                default: setAvatarImage(avatarNormal2Img); break;
              }

              accumulatedText = accumulatedText.replace(/\[\[CATEGORY:.*?\]\]/, "");
            }
          }

          setMessages(() => [
            { role: "system", content: accumulatedText },
          ]);
        }
      }
    } catch (err) {
      console.error("APIエラー:", err);
      setMessages(() => [
        { role: "system", content: "エラーが発生しました。もう一度お試しください。" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem(SEEN_OUTFITS_KEY, JSON.stringify(seenOutfits));
  }, [seenOutfits]);
  
  useEffect(() => {
    localStorage.setItem(SEEN_ONCE_OUTFITS_KEY, JSON.stringify(seenOnceOutfits));
  }, [seenOnceOutfits]);

  //　未読の衣装が一つでもあればhasNewOutfitはtrue
  useEffect(() => {
    const hasNew = Object.entries(seenOutfits).some(([key, unlocked]) => {
      return unlocked && !seenOnceOutfits[key as OutfitCategory];
    });
    setNewOutfitAvailable(hasNew);
  }, [seenOutfits, seenOnceOutfits]);

  return (
    <div className="welcome-container">
      <CharacterWithBubble
        text={messages[messages.length - 1].content}
        question={question.content}
        avatar={avatarImage}
        hasNewOutfit={newOutfitAvailable}
        onClickInfo={() => {
          setShowOutfits(true);
        }}
      />

      <div className="chat-log">
        {messages.slice(1, -1).map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>

      <div className="chat-input-bar">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="質問内容を入力して下さい..."
          onKeyDown={(e) => {
            // 日本語変換中（IME確定Enter）は無視
            if (e.key === "Enter" && !e.nativeEvent.isComposing) {
              e.preventDefault(); // 改行などを防ぐ
              if (!loading && input.trim() !== "") {
                handleSend();
              }
            }
          }}
        />
        <button
          onClick={handleSend}
          className="send-button"
          disabled={loading}
        >
          送信
        </button>
      </div>
      <OutfitsPopUp
        open={showOutfits}
        seenOutfits={seenOutfits}
        seenOnceOutfits={seenOnceOutfits}
        onSeenOnce={handleSeenOnce}
        onClose={() => setShowOutfits(false)}
      />
    </div>
  );
}

function CharacterWithBubble({ question, text, avatar, onClickInfo, hasNewOutfit }: { question: string | null; text: string; avatar: string, onClickInfo?: () => void; hasNewOutfit: boolean }) {
  return (
    <div className="character-container">
      <div className="avatar-wrapper">
        <img src={avatar} className="avatar-svg" alt="avatar" />
        <button
          className={`avatar-info-button ${hasNewOutfit ? "has-new" : "no-new"}`}
          onClick={onClickInfo}
        >
          <FaTshirt className="outfit-icon" />

{hasNewOutfit && (
  <span className="outfit-new-badge">New</span>
)}
        </button>
      </div>
      <div className="bubble-container">
        {question && (
          <div className="question-bubble">
            <p>Q: {question}</p>
          </div>
        )}
        <div className="bubble answer-bubble">
          {text.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
