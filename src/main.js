import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入模拟数据mock文件
import '@/mock/mockServe.js'

// 引入swiper样式
import 'swiper/css/swiper.css'


// 引入三级联动组件-----全局组件
import TypeNav from '@/components/TypeNav'
// 引入Carousel-------全局组件
import Carousel from '@/components/Carousel'

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
// 测试三级联动接口发送请求是否成功
// import {reqCategoryList} from '@/api/index.js'
// reqCategoryList()


Vue.config.productionTip = false
new Vue({
  router,
  // 注册仓库：组件实例的身上会多一个$store属性
  store,
  render: h => h(App),
  beforeCreate() {
    // 配置全局事件总线 $bus
    Vue.prototype.$bus = this;
  },
}).$mount('#app')
