
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
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}