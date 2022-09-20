import { ILoginState } from './login/types'

export interface IRootState {
  token: string
  // entirDepartment: any[]
  // entirRole: any[]
  // entirMenu: any[]
}

export interface IRootAndLogin {
  login: ILoginState
  // system: ISystemState
  // dashboard: IDashboardState
}

export type IStore = IRootState & IRootAndLogin
