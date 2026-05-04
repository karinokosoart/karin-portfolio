# Karin Okoso — Portfolio Site Handoff

このファイルは、大社カリンさんのポートフォリオサイトを Claude Code（または Claude.ai）で引き続き編集するための**引き継ぎ書**です。Karin さんが今後ご自身で編集する際の地図として使ってください。

---

## 1. プロジェクト概要

- **目的**: アーティスト 大社カリン（Karin Okoso）さんの作品ポートフォリオサイト
- **本番URL**: https://karin-okoso.vercel.app
- **管理画面**: https://vercel.com/junsaso2022-3792s-projects/karin-okoso
- **デプロイ先**: Vercel（静的サイト・ビルドステップなし）
- **アカウント**: junsaso2022@gmail.com（CLI上は `junsaso2022-3792`）

---

## 2. デザインコンセプト

> **"ROOM" — A room for one painting.**
> 大社カリンのキャンバスに、ひとつずつ部屋を与える。

- 参照リファレンス: **Mark Rothko / Fondation Louis Vuitton 展（2023）**
  - https://www.fondationlouisvuitton.fr/en/events/mark-rothko
- 思想: 「美術館の一室を独り占めする体験」をWebに翻訳
- 5つの設計原則
  1. **One work per screen**（1画面＝1作品）
  2. **Off-white, not pure white**（背景は漆喰の色 `#F4F1EC`）
  3. **Light, not decoration**（動きは光の揺らぎのみ）
  4. **Silence between works**（作品と作品の間に余白の呼吸）
  5. **Chronology is the narrative**（カテゴリではなく時系列）

---

## 3. 技術構成（あえてシンプル）

- **ランタイム**: なし（純粋な HTML / CSS / JS）
- **フレームワーク**: なし
- **ビルドツール**: なし
- **デプロイ**: Vercel CLI（静的ファイルをそのままアップロード）
- **フォント**: Google Fonts（Cormorant Garamond + Noto Serif JP）
- **動画**: YouTube iframe 埋め込み

→ **誰でも HTML/CSS をテキストエディタで編集できる**シンプル構成です。

---

## 4. ファイル構成

```
Karin/
├── index.html              ← 全ページ構造（シングルページ）
├── style.css               ← 全スタイル（1ファイルにまとめてある）
├── script.js               ← カルーセル + リビールアニメ
├── CLAUDE.md               ← ★この引き継ぎ書
├── 大社カリン.md             ← Karin さんのプロフィール参考メモ
├── .vercelignore           ← デプロイ時の除外設定
│
├── hero-1.png 〜 hero-5.png ← ヒーローカルーセル（5枚）
├── profile-1.JPG           ← Profile セクションのポートレート
├── profile-2.JPG           ← Profile 内のスタジオ写真（breather）
│
└── work-*.jpg              ← Works セクションの27枚
    ├── work-newoman-*.jpg  (3) … NEWoMan ART Window
    ├── work-toi-*.jpg      (2) … KIRIN 問い篇（toi-1 は使用停止中）
    ├── work-onegai-*.jpg   (6) … KIRIN お願い篇
    ├── work-light.jpg          … 銀座三越「LIGHT」
    ├── work-iki.jpg            … 銀座三越「息をする」
    ├── work-water002.jpg       … 銀座三越「water 002」
    ├── work-lily-*.jpg     (2) … Traditional salon「Lily」
    ├── work-em-*.jpg       (3) … EM(em) 絵画
    ├── work-em-fashion-*.jpg (3) … EM(em) ファッション
    ├── work-sun-*.jpg      (2) … Anly「sun」
    ├── work-rolf.jpg           … ROLF BENZ TOKYO
    ├── work-hi.jpg             … 個人作品「日」
    └── work-portrait.jpg       … 予備のポートレート
```

---

## 5. ページ構造

```
01  ROOM       ← ヒーロー（カルーセル5枚）
02  PROLOGUE   ← 「見てもらって初めて、絵は完成する。」
03  PROFILE    ← 略歴・ステートメント・Selected CV
04  WORKS      ← Selected Clients + 10プロジェクト
05  CONTACT    ← メール + フォーム + Instagram
```

### 03 PROFILE の中身
1. ポートレート + リード文 + Instagram リンク
2. Artist Statement（日英バイリンガル）
3. profile-2.JPG（スタジオの写真）
4. Selected CV（個展 / グループ展 / コマーシャル&イベント）

### 04 WORKS の中身
1. Selected Clients & Venues バンド（NEWoMan / 銀座三越 / KIRIN ほか）
2. Project 01: NEWoMan Yokohama「Echo」
3. Project 02: KIRIN「問い篇」
4. Project 03: KIRIN「お願い篇」
5. Project 04: 銀座三越「光に揺れる」
6. Project 05: Traditional salon「Lily」
7. Project 06: 絵夢 EM(em)
8. Project 07: Anly「sun」
9. Project 08: ROLF BENZ TOKYO（DESIGNART 2023）
10. Project 09: 個人作品「日」
11. Project 10: hotel norm. fuji「Artists at norm.」（YouTube動画）

---

## 6. デプロイ手順

### 初回セットアップ（既に完了済み）
```bash
npm i -g vercel       # Vercel CLI インストール
vercel login          # junsaso2022@gmail.com でログイン
```

### 通常の更新
```bash
cd /Users/lease-emp-mac-jun-saso/Desktop/Private/Karin
vercel --prod --yes   # 本番に即反映（数秒で完了）
```

### プレビューだけ確認したい場合
```bash
vercel                # プレビューURL発行（本番には影響しない）
```

---

## 7. よくある編集パターン

### A. テキストを変える
- **コピー文・キャプション**: `index.html` を直接編集
- **Profile の経歴**: `index.html` の `<section class="profile">` 内
- **CV 追加**: `<div class="cv__group">` 内の `<ul class="cv__list">` に `<li>` を追加

### B. 作品（Works）を追加する
1. 画像を `work-XXXX.jpg` で配置
2. `index.html` の `<!-- Project N: ... -->` ブロックを既存からコピーして編集
3. プロジェクト番号 `<span class="work__number">11</span>` をインクリメント

### C. 画像を差し替える
- ファイル名を**そのまま上書き保存**するだけで反映される
- 画像サイズの目安: 横 1600〜2000px、JPEG 70〜85% 程度

### D. ヒーローカルーセル枚数を変える
- `index.html` の `<div class="carousel">` 内の `<div class="carousel__slide">` を増減
- `<div class="carousel__dots">` 内の `<span class="carousel__dot">` も同数に揃える
- 自動切替の間隔は `script.js` の `INTERVAL_MS = 4000`（ミリ秒）

### E. 色・フォントを変える
- `style.css` の冒頭 `:root { --wall: #f4f1ec; ... }` を編集

---

## 8. デザイン Tokens（変更時の参考）

```css
--wall:      #F4F1EC   /* 漆喰のオフホワイト */
--wall-deep: #ECE7DF   /* 影色（少し濃い）*/
--ink:       #1A1A1A   /* 墨色（テキスト）*/
--ink-soft:  #4A453F   /* 薄い墨色 */
--shadow:    #D9D3C7   /* 影 */

--serif-en: "Cormorant Garamond"  /* 英文セリフ */
--serif-jp: "Noto Serif JP"        /* 和文セリフ */
```

---

## 9. レスポンシブ対応

- ブレイクポイント: **`max-width: 720px`**（それ以下が SP 扱い）
- 主な切り替え:
  - ヒーロー: ブランドタグライン非表示、ナビ縮小、safe-area 対応
  - Works: 3列グリッド → 1列縦積み
  - Profile: 2カラム → 1カラム
  - 余白: `vh` 単位を mobile では半分程度に

### モバイルでの操作
- **カルーセル**: 左右スワイプで切替（タップでも次へ）
- **PC**: クリックで次へ
- ドットを直接タップ/クリックで任意の画像に飛べる

---

## 10. コンテンツの出典

サイトに掲載されている文章・作品情報は、Karin さん本人提供の以下から抽出:

- **公式プロフィール**:
  https://docs.google.com/presentation/d/127u9ofp6hNReaYH_z4eLjCnIANtERzyNPbhjOll_eIQ/
  - プロフィール本文（日英）
  - Artist Statement（日英）
  - CV
  - 作品データ（タイトル、年、サイズ、素材）
  - 作品画像 27枚

- **動画**:
  https://www.youtube.com/watch?v=yjxaqgB_57w
  「Artists at norm.」by hotel norm.

- **Instagram**: https://www.instagram.com/karin_okoso/
- **連絡先**: karinokosoart@gmail.com

---

## 11. 今後の改善候補（Nice to have）

- [ ] **独自ドメイン**を設定（例: karinokoso.com）→ Vercel管理画面の Settings → Domains
- [ ] OGP（SNSシェア時のサムネイル）を設定
- [ ] お問い合わせフォームを実際に動くものにする（現状は `action="#"` でダミー。Formspree, Resend, Vercel Functions 等を導入）
- [ ] 画像を WebP / AVIF に変換して軽量化
- [ ] アクセシビリティの再点検（コントラスト、スクリーンリーダー）
- [ ] アクセス解析（Google Analytics, Plausible 等）
- [ ] 多言語化（英語版ページ）

---

## 12. Claude で続きを編集するときのコツ

### Claude Code（CLI / IDE 連携）の場合
- このフォルダを開いて「CLAUDE.md を読んで」と最初に伝える
- 例: 「Works セクションに新しい作品を1つ追加して」
- 例: 「Hero の3枚目の画像を新しい hero-3.png に差し替えて、デプロイして」

### Claude.ai（Web）の場合
- `index.html`, `style.css`, `script.js`, `CLAUDE.md` の4ファイルをアップロード
- 「Karinのポートフォリオです。CLAUDE.md を見て構造を理解してから、〇〇を直して」と依頼
- 編集後のコードを受け取って、ローカルで上書き → `vercel --prod --yes` でデプロイ

---

## 13. 緊急時のロールバック

万が一デプロイに失敗 / 内容が壊れたとき：

```bash
vercel rollback   # 1つ前のデプロイに即戻る
```

または Vercel ダッシュボードの **Deployments** から、過去の任意のバージョンの右側「⋯」→ **Promote to Production** で戻せます。

---

**最終更新**: 2026-05-01
**作成者**: junsaso2022 (Goodpatch) — Claude Code を用いて構築

カリンさん、引き続きどうぞよろしくお願いします 🎨
