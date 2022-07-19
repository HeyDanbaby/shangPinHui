// 所有的API接口进行统一管理
import requests from './request'

// 三级联动的接口
// 接口地址：/api/product/getBaseCategoryList  请求方式：get   请求参数：无参数
export const reqCategoryList = () => {
  //发送请求 axios发请求 返回的结果是promise对象
  return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}
