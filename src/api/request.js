import axios from 'axios'
// 对axios进行二次封装
// 1、利用axios对象的方法create，创建一个axios实例
// 2、把创建的axios实例 赋值 给requests
const requests = axios.create({
  // 配置对象
  // ① 基础路径：发请求的时候，路径当中会出现/api
  baseURL: "/api",
  // ② 请求超时的时间5s 
  timeout: 5000,
})


// 请求拦截器：再发请求之前，请求拦截器可以监测到。可以在服务器发出去之前做一些事情
requests.interceptors.request.use((config) => {
  // config：配置对象 对象里面有个属性很重要：headers请求头
  return config
})

// 响应拦截器
requests.interceptors.response.use(() => {
  // 请求成功的回调函数，服务器响应数据回来以后，响应拦截器可以监测到，可以做一些事情
  return res.data;
},(err) => {
  // 请求失败的回调函数
  return Promise.reject(new Error('faile'))  
})  

// 对外暴露
export default requests;

