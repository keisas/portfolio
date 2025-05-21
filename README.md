# ポートフォリオ（フロントエンド）

このリポジトリは、米山 慧（Satoshi Yoneyama）の個人ポートフォリオサイトのフロントエンドです。  
React + TypeScript + Tailwind CSS によって構築されており、プロジェクトやスキルを紹介するだけでなく、検索AI「YoneyamaGPT」を通じた体験型の自己紹介が可能です


## 構成

- **React**: UIの構築
- **Vite**: 高速なビルドと開発環境
- **Tailwind CSS**: スタイリング
- **GitHub Actions**: CI/CD (S3 への自動デプロイ)
- **AWS S3 / CloudFront**: 静的ホスティング & CDN配信


## ディレクトリ構成
```
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── icon.png
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   ├── Avatar.svg
│   │   └── images
│   ├── components
│   │   ├── Projects
│   │   ├── common
│   │   ├── layout
│   │   └── sections
│   ├── data
│   │   └── projects.ts
│   ├── index.css
│   ├── main.tsx
│   ├── types
│   │   ├── svg.d.ts
│   │   └── swiper-css.d.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.tsd

```

## 公開リンク

- 🖥️ Webサイト: [https://yonecoding.com](https://yonecoding.com)

※ レスポンシブ対応済み（スマホ・PC）

## YoneyamaGPTとは？

本サイトには、独自に構築した検索AI「YoneyamaGPT」が統合されています。  
自身のQAデータと連携した **Retrieval-Augmented Generation（RAG）構成** により、以下のような質問に答えることができます：

- 「出身大学はどこ？」
- 「Rustの制作物を教えて」
- 「どんな分野に興味があるの？」
- など

　実際のバックエンド実装は [`keisas/selfyGPT`](https://github.com/keisas/selfyGPT) にて公開しています。

## 🛠️ 開発・ビルド

### 開発環境の起動

```bash
npm install
npm run dev