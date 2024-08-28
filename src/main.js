import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import axios from './plugins/axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')