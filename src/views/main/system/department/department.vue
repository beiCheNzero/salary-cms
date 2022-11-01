<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      pageName="dep"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    ></page-content>
    <page-model
      ref="pageModelRef"
      :modelConfig="modelConfigRef"
      :default-info="defaultInfo"
      pageName="dep"
    ></page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModel } from '@/hooks/userPageModel'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    //? 绑定用户列表到pageModel组件上
    const store = useStore()
    const modelConfigRef = computed(() => {
      const userItem = modelConfig.formItems.find((item) => item.field === 'emp_id')
      userItem!.options = store.state.entirUser.map((item) => {
        return { title: item.emp_name, value: item.emp_id }
      })
      return modelConfig
    })

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch() as any

    // 传入回调函数
    const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel() as any

    return {
      searchFormConfig,
      contentTableConfig,
      modelConfigRef,
      pageContentRef,
      handleQueryClick,
      handleResetClick,
      pageModelRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
