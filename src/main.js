import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import BreatheLamp from './components/BreatheLamp'
import http from './utils/http.js'
import global from './utils/global.js'
import 'babel-polyfill';
import echarts from 'echarts'
require('echarts/theme/macarons')


Vue.use(ElementUI);
Vue.component('breathe-lamp', BreatheLamp)
Vue.prototype.$http = http
Vue.prototype.$echarts = echarts
Vue.prototype.GLOBAL = global;

Vue.config.productionTip = false

require('./mock.js')

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
