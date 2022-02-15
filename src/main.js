import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// LocalStorage
import './custom/local-storage'

// 開啟 vue 開發者工具
Vue.config.productionTip = false

// 引入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 引入 SVGInjector
import SVGInjectorVue from 'svginjector-vue'
Vue.use(SVGInjectorVue)

// 引入 vue easytable
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";
Vue.use(VueEasytable);

// 引入 vue2-perfect-scrollbar
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
Vue.use(PerfectScrollbar)

// 引入 bootstrap js, css 則是在 app.vue
import "bootstrap";

// 讓瀏覽器的全域環境可以使用到 $
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
