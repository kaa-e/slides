# slides

## 🚀 始め方

### 0. 下準備
1. vscode cursorのExtension(拡張機能)から[Marp for VS Code](https://marketplace.cursorapi.com/items?itemName=marp-team.marp-vscode)をダウンロード
  - これでエディター上でもスライドのプレビューを確認できる

2. homebrewのinstall 
[公式homebrew]を参照してください

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

[【参考】install手順](https://qiita.com/yu_uk/items/73654985fb1caeab4cec)

3. pnpmのinstall
先ほどいれたbrew経由でpnpmをinstallしてください
```bash
brew install pnpm
```

### 1. セットアップ

```bash
# リポジトリのクローン
git clone [repository-url]
cd marp-slide-template

# 依存関係のインストール
pnpm install
```

### 2. 新しいスライドの作成

```bash
# 先にコピー先のディレクトリを作成しておく
mkdir -p slides/{作成者の名前}

# exampleディレクトリをコピーして新しいスライドを作成
cp -r slides/example/. slides/{作成者の名前}/{スライド名}

# 例: 輪読会開始日を含めた名前にすると管理しやすい
cp -r slides/example slides/kazu/20250618
```

### 3. スライドの編集と実行

```bash
# 作成したスライドディレクトリに移動
cd slides/{作成者の名前}/{スライド名}

# 依存関係のインストール
pnpm install

# 開発サーバーの起動（ライブプレビュー）
pnpm run dev

# ローカルファイルを含める場合
pnpm run dev -- --allow-local-files
```

## 📝 使用方法

### 基本的なコマンド

各スライドディレクトリで以下のコマンドが使用できます：

```bash
# HTMLファイルの生成
pnpm run build

# PDFファイルの生成
pnpm run build:pdf

# PowerPointファイルの生成
pnpm run build:pptx

# ファイル監視モード（自動ビルド）
pnpm run watch

# 開発サーバー（ライブプレビュー）
pnpm run serve
```

### スライドの書き方

`slides.md`ファイルを編集してスライドを作成します：

```markdown
---
marp: true
theme: default
paginate: true
---

# タイトルスライド

発表者名

---

## 2枚目のスライド

- 箇条書き
- **太字**や*斜体*も使えます

---

## コードの挿入

\```javascript
function hello() {
  console.log("Hello, Marp!");
}
\```
```

### カスタマイズ

#### テーマのカスタマイズ

`slide.css`ファイルを編集して、独自のスタイルを適用できます：

```css
/* カスタムカラーの定義 */
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e293b;
}
```

#### 設定のカスタマイズ

`marp.config.js`ファイルで出力形式などを調整できます：

```javascript
module.exports = {
  // PDF出力の設定
  pdf: {
    format: "A4",
    printBackground: true,
  },
  // その他の設定...
};
```

## 📁 ディレクトリ構造

```
marp-slide-template/
├── README.md
└── slides/
    ├── example/           # テンプレートスライド
    │   ├── package.json   # 依存関係
    │   ├── slides.md      # スライドコンテンツ
    │   ├── marp.config.js # Marp設定
    │   └── slide.css      # カスタムスタイル
    └── {作成者}/
        └── {スライド名}/  # 各自のスライド
```

## 🎨 便利な機能

### 画像の挿入

```markdown
# 通常の画像
![alt text](image.png)

# 背景画像
![bg](background.png)

# 右側に配置
![bg right:50%](image.png)
```

### ページ番号

`paginate: true`をフロントマターに追加すると、自動的にページ番号が挿入されます。

### テーマの切り替え

フロントマターでテーマを指定できます：
- `theme: default`
- `theme: gaia`
- `theme: uncover`

### クラスの適用

特定のスライドにクラスを適用：

```markdown
<!-- _class: invert -->

# 背景が暗いスライド
```

## 🔧 トラブルシューティング

### ローカル画像が表示されない場合

```bash
npm run serve -- --allow-local-files
```

### PDFの日本語が文字化けする場合

システムに日本語フォントがインストールされていることを確認してください。

## 📚 参考リンク

- [Marp公式ドキュメント](https://marp.app/)
- [Markdownガイド](https://www.markdownguide.org/)
- [Marp CLI](https://github.com/marp-team/marp-cli)
