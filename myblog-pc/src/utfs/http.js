import axios from "axios";
import store from '../store'
// 配置根路由
const instance = axios.create({
    baseURL: 'http://localhost:3000'
  });
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 1.取出 token 
    let token = localStorage.getItem("mytoken")
    // 2.将 token 放在请求头中
    config.headers["Authorization"] = token
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
// 添加响应拦截器
instance.interceptors.response.use(
  // 相当于 then 
  function (response) {
    // 对响应数据做点什么
    return response;
  }, 
  // 相当于 catch
  function (error) {
    let { status } = error.response
    if(status == 401){
      // 取消 token
      store.dispatch('logout')
      // 回到登录页面
      location.href = "/login"
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default instance;