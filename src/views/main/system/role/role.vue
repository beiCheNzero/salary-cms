<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    ></page-content>
    <page-model
      ref="pageModelRef"
      :modelConfig="modelConfig"
      :otherInfo="otherInfo"
      :default-info="defaultInfo"
      pageName="role"
    >
      <!-- 插入菜单树 -->
      <div class="menu_tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="menu_id"
          :props="{ children: 'children', label: 'menu_name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { getMenuLeafKeys } from '@/utils/map-menus'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModel } from '@/hooks/userPageModel'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModel from '@/components/page-model'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modelConfig } from './config/model.config'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModel
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallBack = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList)
      // console.log({ ...item.menuList })
      //? 如果不在nextTick中添加，在点击编辑的时候，会出现还没有将数据绑定到elTree组件上，数据就展示不出来
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch() as any

    // 传入回调函数
    const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
      undefined,
      editCallBack
    ) as any

    const store = useStore()
    const menus = computed(() => store.state.entirMenu)
    const otherInfo = ref({})

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      pageContentRef,
      searchFormConfig,
      contentTableConfig,
      modelConfig,
      handleResetClick,
      handleQueryClick,
      pageModelRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.menu_tree {
  margin-left: 30px;
}
</style>
