import rustySearchImg from '../assets/images/rustysearch.png';
import libcoffeeImg from '../assets/images/libcoffee.png';
import portfolioImg from '../assets/images/portfolio.png';
import repFragImg from '../assets/images/repfrag.png';
import selfyGPTImg from '../assets/images/selfyGPT.png';

export type TechCategory = 'backend' | 'frontend' | 'infra' | 'database' | 'ml' | 'automation' | 'basic';

export interface TechItem {
  label: string;
  category: TechCategory;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: TechItem[]; 
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'RustySearch',
    description: 'Rust × PostgreSQL × Docker を用いた検索エンジン',
    imageUrl: rustySearchImg,
    techStack: [
      { label: 'Rust', category: 'backend' },
      { label: 'PostgreSQL', category: 'database' },
      { label: 'React', category: 'frontend' },
      { label: 'Docker', category: 'infra' },
      { label: 'EC2 (AWS)', category: 'infra' },
    ],
    githubUrl: 'https://github.com/keisas/rustysearch',
    demoUrl: 'https://youtu.be/Tkg7qqwnWqk'
  },
  
  {
    title: '（非公開）SelectReps',
    description: 'FBVSのための代表フラグメント選出ツール',
    imageUrl: repFragImg,
    techStack: [
      { label: 'Python', category: 'backend' },
      { label: 'RDKit', category: 'backend' },
      { label: 'Docker', category: 'infra' },
    ],
    githubUrl: undefined,
    demoUrl: undefined
  },
  
  {
    title: 'selfyGPT',
    description: '自己紹介・説明を行うためのRAGシステム。ソースとなる質問-回答データ作成の補助からFast APIの起動までを実行',
    imageUrl: selfyGPTImg,
    techStack: [
      { label: 'Python', category: 'backend' },
      { label: 'FastAPI', category: 'backend' },
      { label: 'OpenAI API', category: 'infra' },
      { label: 'Docker', category: 'infra' },
      { label: 'GitHub Actions', category: 'infra' },
      { label: 'EC2 (AWS)', category: 'infra' },
    ],
    githubUrl: 'https://github.com/keisas/selfyGPT',
    demoUrl: undefined
  },
  
  {
    title: 'ポートフォリオ',
    description: 'このサイト自体。React により構築されており、Vite によるビルド',
    imageUrl: portfolioImg,
    techStack: [
      { label: 'React', category: 'frontend' },
      { label: 'GitHub Actions', category: 'infra' },
      { label: 'S3 (AWS)', category: 'infra' },
      { label: 'CloudFront (AWS)', category: 'infra' },
    ],
    githubUrl: 'https://github.com/keisas/portfolio',
    demoUrl: 'https://yonecoding.com'
  },
  
  {
    title: '(Contribute) libcoffee',
    description: 'FBVSを支援する Python ライブラリへのコントリビュート',
    imageUrl: libcoffeeImg,
    techStack: [
      { label: 'Python', category: 'backend' },
      { label: 'RDKit', category: 'backend' },
      { label: 'GitHub Actions', category: 'infra' },
    ],
    githubUrl: 'https://github.com/akiyamalab/libcoffee',
    demoUrl: undefined
  },

];