// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
// import './themes/vars.scss'
import VueAMap from 'vue-amap';

import store from "./store/store.js";

import App from './App'
Vue.use(ElementUI);
Vue.use(Antd);
import common from './common/common.js'
Vue.use(common);
import globalVariable from './common/globalVariable'
Vue.prototype.globalVariable =globalVariable
import globalObjs from './common/globalObjs'
Vue.prototype.globalObjs=globalObjs





// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: 'ea6310e0c534475e5459b75b0977d322',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
Vue.use(VueAMap);

Vue.config.productionTip = false
//全局过滤器
Vue.filter('toFixed', function (num, n) {
  if (isNaN(num)) {
    return 0
  }
  const p1 = Math.pow(10, n + 1)
  console.log(p1);
  const p2 = Math.pow(10, n)
  return Math.round(num * p1 / 10) / p2

})
//全局自定义指令
//v-focus 为绑定的元素自动获取焦点
Vue.directive('focus', {
  bind: function (el) {
  },
  inserted: function (el) {
    el.focus()
  },
  updated: function (el) {

  }


})






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
