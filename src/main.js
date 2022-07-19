import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 三级联动组件-----全局组件
import TypeNav from '@/pages/Home/TypeNav'
// 第一个参数：全局组件的name属性，哪一个组件
Vue.component(TypeNav.name, TypeNav)
  
// 测试三级联动接口发送请求是否成功
import {reqCategoryList} from '@/api/index.js'
reqCategoryList()



Vue.config.productionTip = false
new Vue({
  router,
  // 注册仓库：组件实例的身上会多一个$store属性
  store,
  render: h => h(App)
}).$mount('#app')
