import Vue from 'vue'
import Router from "vue-router"
import App from './App.vue'
import "./assets/rem"
import "./assets/css/main.css"
import createRouter from "./router"
//引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
import City from './assets/Bmap'
//定义全局函数获取当前城市名和省份
Vue.prototype.$city=City

Vue.use(Vant)


Vue.use(Router)

const router =createRouter(Router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
