import { createStore, Store, useStore as userVuexStore } from 'vuex'
// 导出是loginModule,在这里命名模块为login,更简洁
import login from './login/login'
import type { IRootState, IStore } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      token: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStore> {
  return userVuexStore()
}

export default store
