import {
  login,
  // logout,
  // getUserInfo,
} from '@/api/user'

import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    // userName: '',
    // userId: '',
    // avatarImgPath: '',
    token: getToken(),
  },
  mutations: {
    // setAvatar (state, avatarPath) {
    //   state.avatarImgPath = avatarPath
    // },
    // setUserId (state, id) {
    //   state.userId = id
    // },
    // setUserName (state, name) {
    //   state.userName = name
    // },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    getToken(state){
      console.log(state.token)
    }
  },
  getters: {
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { userName, password }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          // res.data是接口的返回值 => {message:xxx, data:{token:xxxx}}, status_code:xxx}
          const data = res.data
          if(data.status_code==10000){
            console.log(data.data.token)
            // 保存token => mutations => setToken
            commit('setToken', data.data.token)
            resolve()
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    handleGettoken({commit},){
      commit('getToken')
    }
  //   // 退出登录
  //   handleLogOut ({ state, commit }) {
  //     return new Promise((resolve, reject) => {
  //       logout(state.token).then(() => {
  //         commit('setToken', '')
  //         resolve()
  //       }).catch(err => {
  //         reject(err)
  //       })
  //       // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
  //       // commit('setToken', '')
  //       // commit('setAccess', [])
  //       // resolve()
  //     })
  //   },
  //   // 获取用户相关信息
  //   getUserInfo ({ state, commit }) {
  //     return new Promise((resolve, reject) => {
  //       try {
  //         getUserInfo(state.token).then(res => {
  //           const data = res.data
  //           commit('setAvatar', data.avatar)
  //           commit('setUserName', data.name)
  //           commit('setUserId', data.user_id)
  //           resolve(data)
  //         }).catch(err => {
  //           reject(err)
  //         })
  //       } catch (error) {
  //         reject(error)
  //       }
  //     })
  //   },
  }
}
