import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token:"",
    user_id:"",
    name:""
  },
  // 同步执行
  mutations: {
    getUserName:(state,name) => {
      state.name = name;
      localStorage.setItem("name",name)
    }
  },
  // 异步执行
  actions: {
    // 设置 token
    setToken: (state,token) => {
      state.token = token;
      localStorage.setItem("mytoken",token)
    },
    // 取消 token
    logout:state => {
      state.token = null;
      localStorage.removeItem("mytoken")
    },
    
    getUserId:(state,user_id) => {
      state.user_id = user_id;
      localStorage.setItem("user_id",user_id)
    }
  },
  modules: {}
})
