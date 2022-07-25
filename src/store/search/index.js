// Search模块的小仓库
import { reqGetSearchInfo } from '@/api'
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, resSearchList) {
    state.searchList = resSearchList
  }
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    let res = await reqGetSearchInfo(params)
    console.log(res);
    if(res.code === 200) {
      commit('GETSEARCHLIST', res.data)
    }
  }
}
// 计算属性 作用：简化数据
const getters = {
  pageGoodsList(state) {
    console.log(state);
    return state.searchList.goodsList || [];
  },
  pageTrademarkList(state) {
    return state.searchList.trademarkList;
  },
  pageAttrsList(state) {
    return state.searchList.attrsList;
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}