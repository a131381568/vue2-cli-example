import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { whitelistMeta: true },
    component: () =>
      import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'User_Management',
    meta: { whitelistMeta: false },
    component: () =>
      import('../views/User_Management.vue')
  },
  {
    path: '/user_management',
    name: 'User_Management',
    meta: { whitelistMeta: false },
    component: () =>
      import('../views/User_Management.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: { whitelistMeta: true },
    component: () =>
      import('../views/Registration.vue')
  },
  {
    path: '/api_list',
    name: 'Api_List',
    meta: { whitelistMeta: false },
    component: () =>
      import('../views/Api_List.vue')
  },
  {
    path: '/demo_datepicker',
    name: 'Demo_datepicker',
    meta: { whitelistMeta: false },
    component: () =>
      import('../views/Demo_datepicker.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  let checkRole = "visitor"
  let whitelistBoolean = false
  // 藉由路由 whitelistMeta 判斷白名單
  if (to.matched.some(item => item.meta.whitelistMeta)) {
    whitelistBoolean = true
  }
  if (from.matched.length === 0) {
    // 如果是重啟頁面 (重新整理/直接key網址/關掉重開), 從 localstorge 抓資料
    if (JSON.parse(localStorage.getItem("store"))) {
      checkRole = JSON.parse(localStorage.getItem("store")).role
    }
  } else {
    // 如果正常換頁, 從 store 抓資料 (一開始無法拿到資料)
    checkRole = store.getters["get_role"]
  }
  // =========================== 判斷是否為訪客可以查看頁面 ===========================
  if (whitelistBoolean === true) {
    // console.log("訪客可以查看頁面");
    // 正常換頁
  } else {
    if (checkRole === "visitor") {
      // console.log("訪客不可查看, 強制跳頁");
      if (to.name !== 'Login') {
        router.push({ name: "Login" });
      }
    } else {
      // 不是訪客, 但可以正常換頁
      // console.log("不是訪客, 所以正常換頁");
    }
  }

  next();
})

export default router
