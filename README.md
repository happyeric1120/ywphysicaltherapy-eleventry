# YW Physical Therapy - Eleventy 轉換專案

這是將原始 HTML/CSS 網站轉換為 Eleventy 靜態網站生成器架構的專案，並添加了完整的部落格功能。

## 專案結構

```
ywphysicaltherapy-eleventy/
├── _includes/
│   ├── layout.njk          # 基礎佈局模板
│   ├── navbar.njk          # 導航欄組件
│   └── blog-post.njk       # 部落格文章模板
├── _site/                  # 建置輸出目錄
├── assets/                 # 靜態資源（圖片等）
├── blog/                   # 部落格文章目錄
│   ├── 5-signs-you-need-physical-therapy.md
│   ├── ai-revolutionizing-physical-therapy.md
│   └── shockwave-vs-traditional-pt.md
├── node_modules/           # Node.js 依賴
├── .eleventy.js           # Eleventy 配置檔案
├── package.json           # 專案配置
├── style.css              # 主要樣式檔案
├── main.js                # JavaScript 檔案
├── index.njk              # 首頁模板
├── blog.njk               # 部落格首頁模板
├── ai-pt.njk              # AI PT 頁面模板
├── booking.njk            # 預約頁面模板
├── insurance-and-price.njk # 保險價格頁面模板
├── my-ai-approach.njk     # AI 方法頁面模板
├── class-4-laser.njk      # Class 4 雷射頁面模板
├── compex.njk             # Compex EMS 頁面模板
├── rapid-release.njk      # Rapid Release 頁面模板
├── shockwave.njk          # 震波治療頁面模板
├── theragun.njk           # Theragun 頁面模板
└── what-i-treat.njk       # 治療項目頁面模板
```

## ✅ 已完成的轉換

### 1. 基礎架構設置
- ✅ 安裝並配置 Eleventy 3.1.1
- ✅ 設置 Nunjucks 模板引擎
- ✅ 配置靜態資源處理（CSS、JS、圖片）

### 2. 模板系統建立
- ✅ 創建基礎佈局模板 (`layout.njk`)
- ✅ 提取導航欄為可重用組件 (`navbar.njk`)
- ✅ 實現響應式設計和移動端支援

### 3. 所有頁面轉換完成
- ✅ 首頁 (`index.njk`)
- ✅ AI PT 頁面 (`ai-pt.njk`)
- ✅ 預約頁面 (`booking.njk`)
- ✅ 保險價格頁面 (`insurance-and-price.njk`)
- ✅ AI 方法頁面 (`my-ai-approach.njk`)
- ✅ Class 4 雷射頁面 (`class-4-laser.njk`)
- ✅ Compex EMS 頁面 (`compex.njk`)
- ✅ Rapid Release 頁面 (`rapid-release.njk`)
- ✅ 震波治療頁面 (`shockwave.njk`)
- ✅ Theragun 頁面 (`theragun.njk`)
- ✅ 治療項目頁面 (`what-i-treat.njk`)

### 4. 部落格功能實作
- ✅ 部落格首頁模板 (`blog.njk`)
- ✅ 部落格文章模板 (`blog-post.njk`)
- ✅ 部落格集合配置
- ✅ 日期格式化過濾器
- ✅ 標籤系統
- ✅ 3 篇示例文章
- ✅ 導航欄部落格連結

### 5. URL 結構優化
- ✅ 使用乾淨的 URL（如 `/ai-pt/` 而非 `/ai-pt.html`）
- ✅ 配置 permalink 功能
- ✅ 部落格文章 URL 結構

## 🚀 使用方法

### 開發模式（熱重載）
```bash
npm run serve
# 或
npm start
```
這會啟動開發伺服器在 http://localhost:8080

### 建置生產版本
```bash
npm run build
```
建置後的檔案會在 `_site/` 目錄中

## 📝 部落格功能

### 新增文章
1. 在 `blog/` 目錄中創建新的 `.md` 檔案
2. 使用以下 front matter 格式：
```yaml
---
layout: blog-post.njk
title: "文章標題"
date: 2024-12-15
tags: ["blog", "標籤1", "標籤2"]
excerpt: "文章摘要"
---
```
3. 使用 Markdown 撰寫文章內容
4. 重新建置網站

### 已包含的示例文章
1. **5 Signs You Need Physical Therapy** - 關於何時需要物理治療的指南
2. **How AI is Revolutionizing Physical Therapy** - AI 在物理治療中的應用
3. **Shockwave vs. Traditional Physical Therapy** - 震波治療與傳統物理治療的比較

## 🎨 技術特點

- **模板引擎**: Nunjucks
- **樣式**: Tailwind CSS + 自定義 CSS
- **JavaScript**: 原生 JavaScript
- **建置工具**: Eleventy
- **開發伺服器**: 內建熱重載
- **部落格**: 完整的 Markdown 支援
- **SEO**: 靜態生成的 HTML

## 💡 優勢

1. **更好的維護性**: 模板化減少重複代碼
2. **更快的開發**: 熱重載和組件化開發
3. **SEO 友好**: 靜態生成的 HTML
4. **部署簡單**: 純靜態檔案，可部署到任何靜態主機
5. **內容管理**: 簡單的 Markdown 部落格系統
6. **響應式設計**: 支援桌面和移動設備

## 🔧 自定義配置

### 修改導航欄
編輯 `_includes/navbar.njk` 檔案

### 修改佈局
編輯 `_includes/layout.njk` 檔案

### 添加新頁面
1. 創建新的 `.njk` 檔案
2. 使用 `layout: layout.njk` front matter
3. 重新建置

### 自定義樣式
編輯 `style.css` 檔案或使用 Tailwind CSS 類別

## 📦 部署建議

1. **Netlify**: 連接 Git 倉庫，自動部署
2. **Vercel**: 零配置部署
3. **GitHub Pages**: 使用 GitHub Actions
4. **任何靜態主機**: 上傳 `_site/` 目錄內容

這個轉換後的專案提供了現代化的開發體驗，同時保持了原始網站的所有功能和設計。

# ywphysicaltherapy-eleventry
