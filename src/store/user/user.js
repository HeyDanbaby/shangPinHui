// 登录、注册模块的仓库

import { reqGetCode, reqUserRegister, reqUserLogin } from '@/api'

const state = {
  code: '',
  token: ''
};
const mutations = {
  GETCODE(state, resCode) {
    state.code = resCode
  },
  USERLOGIN(state, resToken) {
    state.token = resToken

  }
};
const actions = {
  // 一、注册业务
  // 获取验证码
  async getCode({ commit }, phone) {
    // 获取验证码的这个接口，把验证码返回；但是，正常情况下，把验证码发送到用户的手机上
    let res = await reqGetCode(phone);
    // console.log(res);
    if (res.code === 200) {
      commit('GETCODE', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 用户注册
  async userRegister({ commit }, user) {
    let res = await reqUserRegister(user)
    // console.log(user);
    // console.log(res);
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('请输入正确的账号或者密码'))
    }
  },
  // 二、登录业务【token：adj.作为标志的】
  async userLogin({ commit }, users) {
    let res = await reqUserLogin(users)
    // console.log(users);
    // console.log(res);
    if(res.code === 200) {
      commit('USERLOGIN', res.data.token)
      return 'ok'
    }
    else  Promise.reject(new Error('请输入正确的账号或者密码'))
  }


};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}

// 去大仓库中引入