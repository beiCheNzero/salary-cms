import ljlRequest from '../index'
import type { IAccount, IDataType, ILoginType, IUserInfo } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/user/',
  LoginUserInfo = '/role/'
}

export function accountLoginRequest(userInfo: IAccount) {
  return ljlRequest.post<IDataType<ILoginType>>({
    url: LoginAPI.AccountLogin,
    data: userInfo
  })
}

export function getUserInfoRequest(id: number) {
  return ljlRequest.get<IDataType>({
    url: LoginAPI.UserInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return ljlRequest.get<IDataType<IUserInfo>>({
    url: LoginAPI.LoginUserInfo + id + '/menu'
  })
}
