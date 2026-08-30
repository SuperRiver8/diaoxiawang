# 釣蝦王純前端演示系統

本倉庫交付 `sample1` 內兩個互相獨立的 Vite + React + TypeScript 前端專案。兩端均使用瀏覽器本機模擬資料，不包含後端 API、資料庫或真實郵件／上傳服務。

## 專案目錄

```text
sample1/
├─ customer-frontend/  # 顧客移動端優先網站，預設端口 3000
└─ admin-frontend/     # 管理人員後台，預設端口 3001
```

`client_source/` 是客戶原始素材，`sample2/` 不屬於本次交付，兩者不會提交到此倉庫。

## 啟動顧客端

```bash
cd sample1/customer-frontend
npm install
npm run dev
```

演示會員：`member@demo.hk / demo1234`

## 啟動管理端

```bash
cd sample1/admin-frontend
npm install
npm run dev
```

演示管理員：`admin@demo.hk / admin1234`

## 生產建置

在各自專案目錄執行：

```bash
npm run build
```

靜態部署檔案會產生在各專案的 `dist/` 目錄。部署為 SPA 時，伺服器需將未知路由回退到 `index.html`。

更多說明請參閱：

- `sample1/customer-frontend/README.md`
- `sample1/admin-frontend/README.md`
