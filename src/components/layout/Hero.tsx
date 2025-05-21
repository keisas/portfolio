import { useState } from 'react';
import avatarDevImg from '../assets/images/avatar_dev.png';
import avatarSchoolImg from '../assets/images/avatar_school.png';
import avatarFormalImg from '../assets/images/avatar_formal.png';
import avatarNormalImg from '../assets/images/avatar_normal.png';
import avatarNormal2Img from '../assets/images/avatar_normal2.png';

import './Hero.css';

export default function WelcomeSection() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "ようこそ！！！米山のポートフォリオへ！\n私はYoneyamaGPTです。このページや米山の基本情報についてお答えできます。\n下の入力欄に質問を入力してください。\n例えば、「出身の大学は？」「趣味は？」などです。\n質問内容によって私の衣装も変わります。（全5パターン）",
    },
  ]);
  const [question, setQuestion] = useState({ role: "user", content: "" });
  const [avatarImage, setAvatarImage] = useState(avatarNormalImg);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="welcome-container">
      <CharacterWithBubble
        text={messages[messages.length - 1].content}
        question={question.content}
        avatar={avatarImage}
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
        />
        <button
          onClick={handleSend}
          className="send-button"
          disabled={loading}
        >
          送信
        </button>
      </div>
    </div>
  );
}

function CharacterWithBubble({ question, text, avatar }: { question: string | null; text: string; avatar: string }) {
  return (
    <div className="character-container">
      <img src={avatar} className="avatar-svg" alt="avatar" />
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
