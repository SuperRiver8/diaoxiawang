# 釣蝦王雙方案純前端演示系統

本倉庫提供兩套可供客戶比較的 Vite + React + TypeScript 前端設計。每套均包含顧客端與管理端，所有資料使用瀏覽器本機模擬，不包含 API、資料庫或真實郵件／上傳服務。

## 方案與端口

| 方案 | 顧客端 | 管理端 | 視覺方向 |
| --- | --- | --- | --- |
| `sample1` | 3000 | 3001 | 香港城市海浪潮玩、照片主視覺、暖白卡片 |
| `sample2` | 3002 | 3003 | 霓虹潮玩票券、深紫控制台、亮橙票根 |

## 啟動方式

進入需要預覽的專案後執行：

```bash
npm install
npm run dev
```

例如啟動方案二：

```bash
cd sample2/customer-frontend
npm install
npm run dev

cd sample2/admin-frontend
npm install
npm run dev
```

## 演示帳號

- 顧客端：`member@demo.hk / demo1234`
- 管理端：`admin@demo.hk / admin1234`

## 生產建置

在各專案目錄執行 `npm run build`，靜態部署檔案會輸出至該專案的 `dist/`。部署為 SPA 時，伺服器需將未知路由回退到 `index.html`。

四個前端互相沒有源碼依賴，localStorage 亦使用不同鍵名，因此可同時啟動及獨立演示。
