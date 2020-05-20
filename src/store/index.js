import Vue from 'vue'
import Vuex from 'vuex'

// 模块化思维 => 与用户相关存储写到这里
import user from './module/user'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    // 你要保存的数据
  },
  mutations: {
    // 设置数据的方法
  },
  actions: {
    // 登录行为，退出……
  },
  modules: {
    // 加载的模块
    user
  }
})