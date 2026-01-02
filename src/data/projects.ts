import rustySearchImg from '../assets/images/rustysearch.png';
import libcoffeeImg from '../assets/images/libcoffee.png';
import portfolioImg from '../assets/images/portfolio.png';
import repFragImg from '../assets/images/repfrag.png';
import FBDBv2Img from '../assets/images/FBDBv2.png';
import coffeeprescImg from '../assets/images/coffeepresc.png';
import selfyGPTImg from '../assets/images/selfyGPT.png';
import atcoderImg from '../assets/images/atcoder.png';
import adaptourImg from '../assets/images/adaptour.png';

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
  youtubeUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
}

export const projects: Project[] = [

  {
    title: 'Adaptour',
    description: '学内ハッカソンにて作成した位置情報に基づく観光AI音声ガイドWebアプリ。提案者兼インフラ担当としてPoCの作成から、ハッカソン当日に実際に利用されたtest/prod環境の構築・運用、CI/CDパイプライン整備、監視基盤の導入を担当した。',
    imageUrl: adaptourImg,
    techStack: [
      { label: 'React', category: 'frontend' },
      { label: 'Django', category: 'backend' },
      { label: 'Cloud Run (GCP)', category: 'infra' },
      { label: 'Terraform', category: 'infra' },
      { label: 'Grafana', category: 'infra' },
      { label: 'GitHub Actions', category: 'infra' },
      { label: 'k6', category: 'infra' },
    ],
    demoUrl: 'https://yonecoding.com/adaptour_demo/',
    youtubeUrl: 'https://youtu.be/wO31UFOBK5M',
    paperUrl: 'https://drive.google.com/file/d/1A8LlGyr0NpI9-ra451t0uwlK79f56fQf/view?usp=sharing'
  },

  {
    title: '(Contribute) FBDBv2',
    description: '研究室開発の化合物DB（FBDBv2）にて、データベースライクなプロダクト構造と安定したインターフェース提供を目的に中核構成の設計と実装を担当。ログ設計と処理時間の可視化を通じて、実測に基づいた性能ボトルネックの特定と改善を行った。',
    imageUrl: FBDBv2Img,
    techStack: [
      { label: 'Python', category: 'backend' },
      { label: 'RDKit', category: 'backend' },
      { label: 'HDF5', category: 'database' },
      { label: 'Docker', category: 'infra' },
      { label: 'Logging', category: 'infra' },
    ],
    githubUrl: 'https://github.com/akiyamalab/FBDBv2'
  },

  {
    title: '(Contribute) COFFEE-PRESC',
    description: '研究室開発のFBVS支援ツール（COFFEE-PRESC）に対するコントリビュート。第二著者として、自研究成果に対応する事前処理パイプラインの実装を担当。',
    imageUrl: coffeeprescImg,
    techStack: [
      { label: 'Python', category: 'backend' },
      { label: 'RDKit', category: 'backend' },
      { label: 'Docker', category: 'infra' },
    ],
    githubUrl: 'https://github.com/akiyamalab/coffee-presc',
    paperUrl: 'https://doi.org/10.64898/2025.12.07.692874'
  },

  {
    title: '(Contribute) libcoffee',
    description: '研究室開発のFBVS支援ライブラリに対するコントリビュート。Python + RDKitでのフラグメント処理・構造変換の改善に貢献',
    imageUrl: libcoffeeImg,
    techStack: [
      { label: 'Python', category: 'backend' },
      { label: 'RDKit', category: 'backend' },
      { label: 'GitHub Actions', category: 'infra' },
    ],
    githubUrl: 'https://github.com/akiyamalab/libcoffee',
    demoUrl: undefined
  },

  {
    title: '（非公開）select-repfrags',
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
    title: 'Adaptour',
    description: '学内ハッカソンにて作成した位置情報に基づく観光AI音声ガイドWebアプリ。提案者兼インフラ担当としてPoCの作成から、ハッカソン当日に実際に利用されたtest/prod環境の構築・運用、CI/CDパイプライン整備、監視基盤の導入を担当した。',
    imageUrl: adaptourImg,
    techStack: [
      { label: 'React', category: 'frontend' },
      { label: 'Django', category: 'backend' },
      { label: 'Cloud Run (GCP)', category: 'infra' },
      { label: 'Terraform', category: 'infra' },
      { label: 'Grafana', category: 'infra' },
      { label: 'GitHub Actions', category: 'infra' },
      { label: 'k6', category: 'infra' },
    ],
    demoUrl: 'https://yonecoding.com/adaptour_demo/',
    youtubeUrl: 'https://youtu.be/1YQn6t0n8r8',
    paperUrl: 'https://adaptour.github.io/'
  },

  {
    title: 'RustySearch',
    description: 'RustとPostgreSQLを用いた全文・意味ベース検索切替可能な検索エンジン。Docker構成でEC2上にデプロイし、ReactフロントからAPI連携',
    imageUrl: rustySearchImg,
    techStack: [
      { label: 'Rust', category: 'backend' },
      { label: 'PostgreSQL', category: 'database' },
      { label: 'React', category: 'frontend' },
      { label: 'Docker', category: 'infra' },
      { label: 'EC2 (AWS)', category: 'infra' },
    ],
    githubUrl: 'https://github.com/keisas/rustysearch',
    youtubeUrl: 'https://youtu.be/Tkg7qqwnWqk'
  },
  
  {
    title: 'selfyGPT',
    description: '自己紹介用の質問応答システム。独自QAデータに基づくRAG構成をFastAPI+FAISSで実装し、OpenAI APIと連携',
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
    description: 'このサイト自体。React + TypeScript + Tailwindで構築され、GitHub ActionsによりS3/CloudFrontへ自動デプロイ',
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
    title: 'AtCoder-アルゴリズム強化',
    description: 'アルゴリズムとデータ構造の理解を深める目的で参加。C++を用いてレート1200手前（最高1197）まで到達。その後はRust学習時の土台として再活用。',
    imageUrl: atcoderImg,
    techStack: [
      { label: 'C++', category: 'backend' },
      { label: 'Rust', category: 'backend' },
    ],
    githubUrl: undefined,
    demoUrl: 'https://atcoder.jp/users/keisa0'
  },
  


];