import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import './assets/styles/base/base.styl'
import './common/utils/chart-theme'
Vue.component('chart', ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
