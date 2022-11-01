import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  token: string
  entirDepartment: any[]
  entirRole: any[]
  entirMenu: any[]
  entirUser: any[]
  menuList: any[]
}

export interface IRootAndLogin {
  login: ILoginState
  system: ISystemState
  // dashboard: IDashboardState
}

export type IStore = IRootState & IRootAndLogin
