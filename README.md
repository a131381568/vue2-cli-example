# vue2-cli-example

## Node 環境確認
```bash
$ node -v
# v12.8.1
$ npm -v
# 6.10.2
```

## 安裝依賴, 運行 Vue CLI 專案
在專案資料夾 vue2-cli-example 根目錄執行以下指令
```bash
# 本機安裝 NPM 依賴
$ npm i
# 本機開啟開發環境 localhost:8080
$ npm run dev
```

---
## 假資料
- vue2-cli-example
 - public
    - data
	 - left_menu.json (左方選單)
	 - login_account.json (登入後取得的使用者資訊)
	 - user_list.json (取得列表資訊)

---
## 共用組件
/vue2-cli-example/src/App.vue , 為管理目前【共用組件】結構顯示的版型, 以下為各自拆分的組件:
- vue2-cli-example
  + src
    - components
      + Datatable.vue
      目前在【Api_List.vue】- /vue2-cli-example/src/views/User_Management.vue , 有使用到此組件, 目前內部功能和欄位僅針對【Api_List.vue】的表格, 如果需要共用至其它頁面, 需要在另行更改。
      + Header.vue
      上方選單, 目前僅顯示右上角使用者資訊; 未來須規劃在不同頁面會顯示選單連結。
      + LeftSidebar.vue
      左邊的選單, 在使用者登入的時候, 才會請求資料。
      + Modal.vue
      此組件目前的 Model 燈箱只有對應【Api_List.vue】的修改使用者資訊表單 id=modal-userEdit , 未來可以在擴充。
      + DatePicker.vue
      裡面包 vue2-daterange-picker 的套件, 未來日期選擇器可以套用到其他頁, Demo 使用於 /vue2-cli-example/src/views/Demo_datepicker.vue
---
## 共用資料倉庫 (Store)
```javascript
// vue2-cli-example/src/store/index.js
export default new Vuex.Store({
  state: {
    // 左側選單狀態, 藉此判斷狀態-開啟/關閉
    leftSidebarOpen: false,
    // 登入的使用者資訊, 未來可新增存放 token 的欄位
    userName: "",
    userMail: "",
    role: "visitor",
	// 左側選單列表
    leftMenu: [],
    // 修改使用者燈箱資訊, 藉由下方 action 的 act_get_editModalUserInfo()
	// 讓 【User_Management.vue】和【Modal.vue】互相溝通 editModal 相關的欄位
    editModalAccount: "",
    editModalName: "",
    editModalEditName: "",
    editModalRole: "member",
    editModalPhone: "",
    editModalId: "",
    editModalPw: "",
    editModalState: "close",
    editModalPublishDate: "",
    editModalEditDate: "",
  },
```
---
## 路由管理 (Router)
### 路由瀏覽流程圖
下圖的管制使用者是否有身份能夠瀏覽的規則, 都寫在 /router/index.js 管理
![router_des_gif](https://i.imgur.com/dwpgv4y.gif)
```javascript
// vue2-cli-example/src/router/index.js
const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { whitelistMeta: true },  // 藉由標記 whitelistMeta 區分是否為訪客可以查看的頁面
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'User_Management',
    meta: { whitelistMeta: false },
    component: () => import('../views/User_Management.vue')
  }
]

// 藉由路由導航守衛, 在切換路由時, 判斷身份和 whitelistMeta
router.beforeEach(async (to, from, next) => {
	// ...
	next();
})
```
### Localstorage 設定
額外設定一支 JS 管理 localstorage 的存放 - /vue2-cli-example/src/custom/local-storage/index.js
- 在頁面載入時讀取 localStorage 裡的 store 狀態資訊
- 在頁面重新整理/關閉時將 store 裡的資訊儲存到 localStorage

## 使用額外套件
引入額外套件統一在 /vue2-cli-example/src/main.js 做管理

### 官方文件
- bootstrap4.3.1: https://getbootstrap.com/docs/4.3/components/alerts/
- svginjector-vue: https://github.com/regenrek/svginjector-vue
- axios: https://axios-http.com/docs/example
- vue-easytable: https://happy-coding-clans.github.io/vue-easytable/#/en/doc/start
- vue2-perfect-scrollbar: https://github.com/mercs600/vue2-perfect-scrollbar
- vue2-daterange-picker: https://innologica.github.io/vue2-daterange-picker/#installation
