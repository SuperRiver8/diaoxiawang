# 釣蝦王管理端演示

Vite + React + TypeScript 製作的獨立純前端管理系統，預設端口 `3001`。桌面使用側欄，平板及手機使用摺疊選單。

## 啟動

```powershell
npm install
npm run dev
```

開啟 <http://localhost:3001>。演示帳號：`admin@demo.hk` / `admin1234`。

## 功能

- 營運總覽、會員搜尋及手動建立會員
- 可搜尋及多選會員的積分發放／扣除與流水
- 可搜尋及多選發送對象的固定金額券與滿額抵扣券
- 包含標題、內容、圖片及圖示的宣傳活動管理
- 影片模擬上載、200MB 大小限制、發布狀態及置頂管理
- 可搜尋及多選收件人的富文本推廣郵件編輯與預覽
- 重置本地演示資料及退出登入

## 構建

```powershell
npm run build
npm run preview
```

`npm run build` 會生成可部署的 `dist/` 靜態文件。部署時須設定所有前端路由回退到 `/index.html`，以支援 `/dashboard`、`/members` 等直接訪問與刷新。

所有資料只保存在本網站的 `localStorage`，不會連接 API、資料庫、顧客端、影片平台或真實電郵服務。

## 驗證

```powershell
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```
