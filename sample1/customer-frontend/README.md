# 釣蝦王顧客端演示

Vite + React + TypeScript 製作的移動端優先純前端網站，預設端口 `3000`。包含觀塘店與荔枝角店、活動、影片、電郵註冊／登入、會員積分及優惠券頁面。

## 啟動

```powershell
npm install
npm run dev
```

開啟 <http://localhost:3000>。演示帳號：`member@demo.hk` / `demo1234`。

## 路由

- `/`：品牌首頁
- `/venues`：分店資料
- `/promotions`：活動及消息
- `/videos`：影片列表與演示播放器
- `/register`、`/login`：電郵註冊及登入
- `/member`：會員中心
- `/member/points`：積分記錄
- `/member/coupons`：優惠券

## 構建

```powershell
npm run build
npm run preview
```

`npm run build` 會生成可部署的 `dist/` 靜態文件。部署時須設定所有前端路由回退到 `/index.html`。網站不發起業務 API 請求，會員狀態只保存在當前網站的 `localStorage`。

## 驗證

```powershell
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

目前界面為繁體中文 `zh-HK`；日後新增多語言時可接入適合 React SPA 的國際化方案。
