import Vue from 'vue'
import App from './App.vue'
import store from './config/store/index'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$ELEMENT = {size:'small'}
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
