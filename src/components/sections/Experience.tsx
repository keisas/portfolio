import './Experience.css';
import type { TechItem } from '../../data/projects';
import SkillCard from '../common/SkillCard';
import InfoPopup from '../common/InfoPopup';
import { useState } from "react";

export interface ExperienceItem {
    title: string;
    period: string;
    techStack: TechItem[];
    description: string;
}


const experiences: ExperienceItem[] = [
    {
      title: '🎓 東京工業大学 情報理工学院',
      period: '2021年4月 〜 2025年3月',
        techStack: [
            { label: 'Python', category: 'backend' },
            { label: 'C', category: 'backend' },
            // { label: 'C++', category: 'backend' },
            { label: 'Scala', category: 'backend' },
            { label: 'Java', category: 'backend' },
            { label: 'Java (並列)', category: 'backend' },
            { label: 'MATLAB', category: 'backend' },
            { label: 'Verilog HDL', category: 'backend' },
            { label: 'SQL', category: 'database' },
            { label: 'sklearn', category: 'ml' },
            { label: 'Pytorch', category: 'ml' },
        ],
      description: 
      '情報工学を専攻し、手続き、関数、オブジェクト指向、並列プログラミングを学習。データベースやネットワーク、機械学習の基礎だけでなく、Verilog HDLを用いたハードウェア設計やMATLABを用いた数値解析、Cを用いたコンパイラの実装なども経験。'
    },
    {
      title: '🎓 東京科学大学大学院 情報理工学院',
      period: '2025年4月 〜 現在',
        techStack: [
            { label: 'Python', category: 'backend' },
            { label: 'C++', category: 'backend' },
            { label: 'TSUBAME 4.0', category: 'backend' },
            { label: 'PBS', category: 'backend' },
            { label: 'Slurm', category: 'backend' },
            { label: 'Linux', category: 'backend' },
            { label: 'Docker', category: 'infra' },
            { label: 'Github', category: 'infra' },
        ],
      description: 'バイオインフォマティクスを専攻。大学のスーパーコンピュータであるTSUBAME 4.0や研究室の計算機を用いて、PythonやC++でのプログラミングを行い、PBSやSlurmを用いたジョブ管理を経験。また、専攻において注目されているDiffusionモデルやTransformerについても動作原理を中心に理解。'
    },
    {
      title: '💼 キャディ株式会社（アルバイト）',
      period: '2022年7月 〜 2025年3月',
        techStack: [
            { label: 'Python', category: 'backend' },
            { label: 'GAS', category: 'backend' },
            { label: 'TypeScript', category: 'frontend' },
            { label: 'SQL', category: 'database' },
            { label: 'BigQuery (GCP)', category: 'database' },
            { label: 'Docker', category: 'infra' },
            { label: 'Cloud Functions (GCP)', category: 'infra' },
            { label: 'Cloud Scheduler (GCP)', category: 'infra' },
            { label: 'Cloud Run (GCP)', category: 'infra' },
            { label: 'Cloud Storage (GCP)', category: 'infra' },
            { label: 'Github', category: 'infra' },
            { label: 'GitHub Actions', category: 'infra' },
            { label: 'Vertex AI (GCP)', category: 'ml' },
            { label: 'App Sheet (GCP)', category: 'automation' },
            { label: 'Zapier', category: 'automation' },
            { label: 'Power Automate', category: 'automation' },
        ],
      description: '入社後2年に渡り、GCPの各種サービスを用いたPython、SQLの自動実行による製造業におけるデータ処理の自動化を中心に、GASを用いた顧客向けの業務改善システムの開発や、Python、ノーコードツールを用いた社内向けの業務改善システムの開発を経験。その後はVertex AIを絡めた図面データの構造化処理におけるロジック作成を担当。'
    },
    {
      title: '💼 ウト株式会社（アルバイト）',
      period: '2025年4月 〜 現在',
        techStack: [
            { label: 'Python', category: 'backend' },
            { label: 'Django', category: 'backend' },
            { label: 'GAS', category: 'backend' },
            { label: 'React (TS)', category: 'frontend' },
            { label: 'Firestore (GCP)', category: 'database' },
            { label: 'Docker', category: 'infra' },
            { label: 'GitHub', category: 'infra' },
        ],
      description: '顧客向けCRMツールの開発や、現場の業務に必要な機械の台数や構成要素の算出支援ツールの開発を担当。CRMツールではGASを使用。算出支援ツールのバックエンドではDjangoを、フロントエンドではReactを使用しており、主にバックエンド、フロントエンド、データベースの連携部分の実装を担当。'
    },
    {
      title: '🧪 CyberAgent（短期インターン）',
      period: '2023年8月（2週間）',
      techStack: [
        { label: 'Go', category: 'backend' },
        { label: 'Redis', category: 'database' },
        { label: 'MySQL', category: 'database' },
        { label: 'Github', category: 'infra' },
      ],
      description: 'Go CollegeにてGo言語の基本的な文法や、NoSQLの基本的な操作方法を学習し、簡単なRESTful APIを実装。また挑戦としてpprofやApache Benchを用いたプロファイリングや、スタックトレース付きのログ出力の実装を経験。'
    }
  ];


export default function Experience() {
  const [openStates, setOpenStates] = useState<boolean[]>(experiences.map(() => true));

  const toggle = (index: number) => {
    setOpenStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div >
      <div className='profile-header'>
        <h3 className="profile-heading">経歴</h3>
        <InfoPopup />
      </div>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item" onClick={() => toggle(index)}>
            <div className="experience-item-header">
                <div className="experience-item-description">
                    <h3 className="experience-item-title">{exp.title}</h3>
                    <p className="experience-item-period">{exp.period}</p>
                </div>
                <button className="toggle-button" 
                onClick={(e) => {
                    e.stopPropagation(); // ボタンだけのクリックではイベントを親に伝播させない
                    toggle(index);
                  }}>
                    {openStates[index] ? "−" : "+"}
              </button>
            </div>
            {openStates[index] && 
            <div>
            <div className="experience-item-techstack">
              {exp.techStack.map((tech, techIndex) => (
                <SkillCard key={techIndex} label={tech.label} category={tech.category} />
              ))}
            </div>
            <p className="experience-item-description">{exp.description}</p>
            </div>}
            </div>
        ))}
      </div>
    </div>
  );
}