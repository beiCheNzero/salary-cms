import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISalaryState } from './types'

import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const salaryModule: Module<ISalaryState, IRootState> = {
  namespaced: true,
  state() {
    return {
      salaryList: [],
      salaryCount: 0,
      salaryData: []
    }
  },
  getters: {
    salaryData(state) {
      return state.salaryData
    }
  },
  mutations: {
    changeSalaryData(state, data: any[]) {
      state.salaryData = data
    }
  },
  actions: {
    // 发送网络请求
    async getSalaryDataAction({ commit }, payload: any) {
      // 1.处理请求路径
      const pageName = payload.pageName
      const userId = payload.id
      const pageUrl = `/${pageName}/${userId}`
      // console.log(pageUrl)
      // 2.对页面发送请求
      const pageRes = await getPageListData(pageUrl, null)
      const { data } = pageRes

      const pageChangeName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${pageChangeName}Data`, data)
    }
  }
}

export default salaryModule
