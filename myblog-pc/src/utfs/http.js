import axios from "axios";
// 配置根路由
const instance = axios.create({
    baseURL: 'http://localhost:3000'
  });
export default instance;