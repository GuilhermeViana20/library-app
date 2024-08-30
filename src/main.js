import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import axios from './plugins/axios';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  timeout: 3000,
  closeOnClick: true
};

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(Toast, options);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')