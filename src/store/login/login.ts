import { Module } from 'vuex'
import type { ILoginState } from './types'
import type { IRootState } from '../types'
import type { IAccount, IUserInfo } from '@/service/login/type'
import {
  accountLoginRequest,
  requestUserMenusById,
  getUserInfoRequest
} from '@/service/login/login'
import LocalCache from '@/utils/cache'

import router from '@/router'

// 这里是需要传入两个泛型的S R
// 第一个是模块中state的类型，第二个是根的state的类型
const loginModule: Module<ILoginState, IRootState> = {
  // 模块的命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userMenus: [],
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: IUserInfo) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录的基本逻辑
      // accountLoginRequest返回的是一个Promise, 所以可以用async/await
      const loginResult = await accountLoginRequest(payload)
      // console.log('res', loginResult)
      const { token } = loginResult.data
      // token本地缓存
      LocalCache.setCache('token', token)
      const { emp_id } = loginResult.data.userInfo
      // 通过commit提交到mutations中进行修改token
      commit('changeToken', token)

      // 2.请求用户信息
      const userInfoRes = await getUserInfoRequest(emp_id)
      // console.log(userInfoRes)
      const userInfo = userInfoRes.data[0]
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 3.获取角色的菜单
      const userMenusRes = await requestUserMenusById(emp_id)
      // console.log(userMenusRes)
      const userMenus = userMenusRes.data
      // console.log(userMenus)
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      // 4.跳到首页
      router.push('/main')
    },
    /*
     * 解决在登录之后跳转到main界面，出现刷新后vuex中的数据丢失的问题
     */
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
