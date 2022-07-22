import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from './home'
import search from './search'


Vue.use(Vuex)

// // state: 仓库存储数据的地方
// const state = {
//   // count: 1
// }
// // mutations：修改state的唯一手段
// const mutations = {
//   // updateCount(state, newCount) {
//   //   state.count += newCount
//   // }
// }
// // actions：处理action，可以书写业务逻辑、处理异步
// const actions = {
//   // actions方法里的第一个参数里有很多方法：commit、gettres、state等等，通过对象的解构可以拿到一个或者几个
//   // {commit}：获取actions方法里的第一个参数里的commit函数
//   // commit()可以执行mutations里面的方法；     dispatch()执行actions里面的方法
//   // add({ commit }, counts) {
//   //   commit('updateCount', counts)
//   // },
// }
// // getters：理解为计算属性，用于简化仓库数据，让组件会获取仓库的数据更加方便
// const getters = {}
// // modules：模块
// const modules = {}



export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters,
  modules: {
    home,
    search
  }
})
