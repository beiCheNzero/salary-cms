import { ref } from 'vue'
import PageModel from '@/components/page-model'

type CallBackFn = (item?: any) => void

export function usePageModel(newCallBack?: CallBackFn, editCallBack?: CallBackFn) {
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  const defaultInfo = ref({})

  // 新建用户
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModelRef.value) pageModelRef.value.dialogVisible = true
    newCallBack && newCallBack()
  }

  // 编辑用户
  const handleEditData = (payload: any) => {
    defaultInfo.value = { ...payload }
    if (pageModelRef.value) pageModelRef.value.dialogVisible = true
    editCallBack && editCallBack(payload)
  }

  return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}
