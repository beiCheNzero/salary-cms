import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import type { IDataType } from '@/service/login/type'

import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      depList: [],
      depCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUserList(state, list: Array<string>) {
      state.userList = list
    },
    changeUserCount(state, count: number) {
      state.userCount = count
    },
    changeDepList(state, list: Array<string>) {
      state.depList = list
    },
    changeDepCount(state, count: number) {
      state.depCount = count
    },
    changeRoleList(state, list: Array<string>) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeMenuList(state, list: Array<string>) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        //   switch (pageName) {
        //     case 'users':
        //       return state.usersList
        //     case 'role':
        //       return state.roleList
        //   }
        // }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 发送网络请求
    async getPageListAction({ commit }, payload: any) {
      // 1.处理pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // 2.对页面发送请求
      const pageRes: IDataType = await getPageListData(pageUrl, payload.queryInfo)
      const { data, totalCount } = pageRes

      const pageChangeName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${pageChangeName}List`, data)
      commit(`change${pageChangeName}Count`, totalCount)
    },

    // 删除
    async deletePageDataAction({ dispatch }, payload: any) {
      console.log(payload)
      const { id, pageName } = payload
      const pageUrl = `/${pageName}/${id}`

      // 删除数据
      await deletePageData(pageUrl)

      // 更新界面
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          limit: 10
        }
      })
    },

    // 新建
    async createPageDataAction({ dispatch }, payload: any) {
      // 创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}/register`
      await createPageData(pageUrl, newData)
      // 请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          limit: 10
        }
      })
    },

    // 编辑
    async editPageDataAction({ dispatch }, payload: any) {
      // 创建编辑的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          limit: 10
        }
      })
    }
  }
}

export default systemModule
