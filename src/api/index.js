// 所有的API接口进行统一管理
import requests from './ajax'

import mockRequests from './mockAjax'

// 三级联动的接口
// 接口地址：/api/product/getBaseCategoryList  请求方式：get   请求参数：无参数
export const reqCategoryList = () => {
  //发送请求 axios发请求 返回的结果是promise对象
  return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}


export const reqGetBannerList = () => mockRequests.get('/banner')
export const reqGetFloorList = () => mockRequests.get('/floor')

// Search模块数据 请求地址：/api/list   请求方式：post  参数：带参数
// 当前这个接口：这里至少要给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// detail产品详情接口 请求地址：/api/item/{ skuId }    请求方式：GET   参数：带参数
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// Register模块
// 获取验证码接口：地址： /api/user/passport/sendCode/{phone}  请求方式：get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 注册接口地址：/api/user/passport/register  请求方式：post    参数：phone手机号、password密码、code验证码 集合成一个data对象
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, data: data, method: 'post' })

// login模块
// 登录接口地址：/api/user/passport/login   请求方式：post  参数：phone、password
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, data: data, method: 'post' })