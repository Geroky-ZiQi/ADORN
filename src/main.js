import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import config from "./config"
import store from "./store"

// import router from "./router/index.js"

Vue.config.productionTip = false;

//加载模板需要的css文件
import "@/assets/css/animate.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/fontello.css";
import "@/assets/css/fontello-codes.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import "@/assets/css/color.css";

new Vue({
  render: h => h(App),
  router,
  store
  
}).$mount('#app')
