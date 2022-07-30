import { reqGoodsInfo } from "@/api"

const state = {
  goodsInfo: {}
}
const mutations = {
  GETGOODSINFO(state, resGoodsInfo) {
    state.goodsInfo = resGoodsInfo
  }
}
const actions = {
  // 获取产品信息
  async getGoodsInfo({ commit }, skuId) {
    let res = await reqGoodsInfo(skuId)
    if (res.code === 200) {
      commit('GETGOODSINFO', res.data)
    }
  }
}
const getters = {
  // 简化数据
  pageCategoryView(state) {
    return state.goodsInfo.categoryView || {} // 一定要或者返回一个空对象 避免里面的属性找不到报错
  },
  pageSkuInfo(state) {
    return state.goodsInfo.skuInfo || {}  // 一定要或者返回一个空对象 避免里面的属性找不到报错
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}