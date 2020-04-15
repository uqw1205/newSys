import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(Pagination)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
