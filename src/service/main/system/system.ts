import ljlRequest from '@/service'

import type { IDataType } from '@/service/login/type'

export function getPageListData(url: string, queryInfo: any) {
  return ljlRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return ljlRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return ljlRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return ljlRequest.patch<IDataType>({
    url,
    data: editData
  })
}
