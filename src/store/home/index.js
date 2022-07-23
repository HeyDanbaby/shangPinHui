// home模块的小仓库
// 引入三级联动、轮播图的请求函数
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
}
const mutations = {
  CATEGORYLIST(state, resCategoryList) {
    // state.categoryList：初始的数据 为空数组
    // resCategoryList：服务器请求到的数据
    state.categoryList = resCategoryList
  },
  BANNERLIST(state, resBannerList) {
    console.log('修改bannerList数据');
    state.bannerList = resBannerList
  },
  FLOORLIST(state, resFloorList) {
    state.floorList = resFloorList
  }
}
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList({ commit }) {
    // reqCategoryList().then((res) => {console.log(res);});
    // async、await结合使用简化Promise：async异步操作 await当前这一行代码执行完成
    // await reqCategoryList() = reqCategoryList().then((res) => {console.log(res)}  
    let res = await reqCategoryList();
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
    }
  },
  // 轮播图数据
  async getBannerList({ commit }) {
    console.log('向服务器 获取轮播图数据');

    let res = await reqGetBannerList()
    if (res.code === 200) {
      commit('BANNERLIST', res.data)
    }
  },
  // Floor数据
  async getFloorList({ commit }) {
    let res = await reqGetFloorList()
    if (res.code === 200) {
      commit('FLOORLIST', res.data)
    }
  }
}

const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}

// store state里面的数据的第一个参数
// state mutations里面的函数的第一个参数
// commit actions第一个参数里的commit方法