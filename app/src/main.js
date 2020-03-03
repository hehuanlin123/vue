import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import vueAxios from 'vue-axios'
import './assets/css/base.css'
import './assets/css/index.css'

// Vue.use(axios);
// Vue.use(vueAxios);

// Vue.prototype.axios = axios;//全局引入axioss

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
