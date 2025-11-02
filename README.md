# JIGUMA – Vercel デプロイスターター

## 1. GitHubに上げる
1) 新規Publicリポ作成（例: `jiguma-site`）  
2) このフォルダの中身をコミット

```bash
git init && git add . && git commit -m "init JIGUMA"
git branch -M main
git remote add origin https://github.com/your-github-username/jiguma-site.git
git push -u origin main
```

## 2. Vercelで公開
1) vercel.com → **New Project** → GitHub連携 → リポ `jiguma-site` を選択  
2) Framework: **Other**（静的サイト） / Build Command: **なし** / Output: **/**（root）  
3) **Deploy** を押す → `https://<project>.vercel.app` が発行  
4) 独自ドメインを使うなら Vercel の **Domains** に追加（A/CNAME設定 or NS移管）

## 3. 触る場所
- 会社情報：`index.html`（住所/TEL/メール、事業文）
- 色：`style.css` の `--primary` / `--primary2`
- SEO：`robots.txt` / `sitemap.xml` のURL（`example.com`→独自ドメイン）
- 404：`404.html`（Vercelは自動で拾う）
- セキュリティ/キャッシュ：`vercel.json` で管理

## 4. そのままでも速い理由
- 画像はSVG中心、CSS1枚・JS最小
- VercelのエッジCDNで自動キャッシュ
