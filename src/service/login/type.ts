export interface IAccount {
  account: string
  password: string
}

export interface ILoginType {
  token: string
  userInfo: any
}

/*
 * json to ts  快捷键ctrl+shift+alt+v
 */
export interface IUserInfo {
  code: number
  msg: string
  data: Datum[]
}
interface Datum {
  emp_id: string
  emp_name: string
  emp_password: string
  emp_sex: string
  emp_age: string
  emp_post: string
  emp_atatar?: any
  emp_phone: string
  emp_insurance: string
  dep_id: string
  authority?: string
}
export interface IDataType<T = any> {
  code: number
  data: T
  msg: string
}
