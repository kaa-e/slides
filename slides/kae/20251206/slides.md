---
marp: true
theme: default
class: invert
paginate: true
---

# Marpスライドテンプレート

シンプルで美しいプレゼンテーション

---

## Marpとは

- **M**arkdown **A**nd **R**eact **P**resentation
- Markdownでスライドを作成
- HTMLやPDFに変換可能
- GitHubで管理しやすい

---

## 基本的な使い方

### 1. Markdownで記述

```markdown
# タイトル
## 見出し
- 箇条書き
- **太字**や*斜体*
```

### 2. ビルド

```bash
npm run build
```

---

## コードブロック

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Marp'));
```

---

## 画像の挿入

![bg right:50%](https://marp.app/assets/marp.svg)

### 背景画像
- `![bg](URL)` で背景に設定
- `![bg right:50%](URL)` で右側50%に配置

---

## テーブル

| 機能 | 説明 |
|------|------|
| Markdown | シンプルな記法 |
| テーマ | カスタマイズ可能 |
| エクスポート | HTML/PDF/PPTX |

---

## カスタムスタイル

<!-- _class: custom -->

カスタムCSSを適用可能

```css
.custom {
  background-color: #1e1e1e;
  color: #ffffff;
}
```

---

## まとめ

- 📝 Markdownで簡単作成
- 🎨 美しいデザイン
- 🚀 高速なビルド
- 📦 バージョン管理可能

---

# ありがとうございました

Happy Presenting with Marp! 🎉
