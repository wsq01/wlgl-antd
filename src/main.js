import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { VueAxios } from './utils/request'

import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import Antd from 'ant-design-vue'
import BaiduMap from 'vue-baidu-map'
import './permission'
import 'ant-design-vue/dist/antd.css'
import './global.less'
import themePluginConfig from './config/themePluginConfig'

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
// Vue.use(VueAxios)
Vue.use(Antd)
Vue.use(BaiduMap, { ak: 'XP1alssWsEscC3NfYAhj6YfqKvgQgUXF' })
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
