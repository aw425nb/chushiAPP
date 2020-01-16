import Vue from 'vue'
import Router from "vue-router"
import App from './App.vue'
import "./assets/rem"
import "./assets/css/main.styl"
import createRouter from "./router"
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);





Vue.use(Router)

const router =createRouter(Router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
