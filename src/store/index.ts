import { createStore, Store, useStore as userVuexStore } from 'vuex'
// 导出是loginModule,在这里命名模块为login,更简洁
import login from './login/login'
import system from './main/system/system'
import salary from './main/salary/salary'

import { getPageListData } from '@/service/main/system/system'

import type { IRootState, IStore } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      token: '',
      entirDepartment: [],
      entirRole: [],
      entirMenu: [],
      entirUser: [],
      menuList: []
    }
  },
  getters: {
    getMenuList(state) {
      return state.menuList
    }
  },
  mutations: {
    changeEntireDepartment(state, data: any) {
      state.entirDepartment = data
    },
    changeEntireRole(state, data: any) {
      state.entirRole = data
    },
    changeEntireMenu(state, data: any) {
      state.entirMenu = data
    },
    changeEntireUser(state, data: any) {
      state.entirUser = data
    },
    changeMenuList(state, menu: any) {
      state.menuList = menu
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求部门和角色数据
      const depRes = await getPageListData('/dep/list', {
        offset: 0,
        limit: 50
      })
      //? 起别名
      const { data: depData } = depRes
      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        limit: 50
      })
      const { data: roleData } = roleRes
      // 请求菜单数据
      const menuRes = await getPageListData('/menu/list', {
        offset: 0,
        limit: 100
      })
      const { data: menuData } = menuRes
      // 请求用户数据
      const userRes = await getPageListData('/user/list', {
        offset: 0,
        limit: 100
      })
      const { data: userData } = userRes

      // 保存数据
      commit('changeEntireDepartment', depData)
      commit('changeEntireRole', roleData)
      commit('changeEntireMenu', menuData)
      commit('changeEntireUser', userData)
    },
    // 请求用户数据
    async requestInitUserData({ commit }) {
      const userRes = await getPageListData('/user/list', {
        offset: 0,
        limit: 100
      })
      const { data: userData } = userRes
      commit('changeEntireUser', userData)
    },
    // 获取当前的nav-tabs
    async getCurrentNavTab({ commit }, payload: any) {
      commit('changeMenuList', payload)
    }
  },
  modules: {
    login,
    system,
    salary
  }
})

// 在创建之前就拿到数据
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStore> {
  return userVuexStore()
}

export default store
