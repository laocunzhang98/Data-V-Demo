import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vcharts'
import Echarts from 'echarts'
import VueECharts from 'vue-echarts'
import './style/index.css'
Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart',VueECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
