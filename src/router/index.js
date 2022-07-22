import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'
import Register from '@/pages/Register/index.vue'
import Login from '@/pages/Login/index.vue'

// 1、先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// console.log(originPush);

// 2、重新封装push、replace方法: 解决重复跳转报错的问题
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

Vue.use(VueRouter)

const routes = [
  // 重定向：在项目跑起来的时候，当你访问/的时候，立马让它定向到首页
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home,
    // 路由元信息 决定在哪个路由下显示Footer组件
    meta: { show: true }

  },
  {
    path: '/search/:keyword?',  // params参数占位
    name: "search",
    component: Search,
    meta: { show: true },

    // 路由组件能不能传递props
    // 第一种：布尔值写法： 优点：可以把params参数作为路由组件身上的属性；缺点：只能传递params参数(props里面只能是params参数)
    // props: true

    // 第二种：对象写法：额外的给路由传递一些props
    // props: {
    //   a: 1,
    //   b: 2,
    // }

    // 第三种：函数写法：可以params参数、query参数，通过props传递给路由组件
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k }
    }

  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }

  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
