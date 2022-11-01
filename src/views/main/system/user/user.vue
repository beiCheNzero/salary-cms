<template>
  <div class="user">
    <!-- search模块 -->
    <page-search
      :search-form-config="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    />
    <!-- table展示内容 -->
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      pageName="user"
      @edit-btn-click="handleEditData"
      @new-btn-click="handleNewData"
    >
      <template #avatar="scope">
        <el-avatar :src="scope.row.emp_avatar"></el-avatar>
      </template>
      <template #age="scope">
        {{ scope.row.emp_age + '岁' }}
      </template>
    </page-content>
    <!-- 新建模块 -->
    <page-model
      ref="pageModelRef"
      :defaultInfo="defaultInfo"
      :modelConfig="modelConfigRef"
      pageName="user"
    ></page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
// hooks
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModel } from '@/hooks/userPageModel'

// 组件
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'

// 配置
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    /*
     * pageModel相关的hook逻辑
     * 1.处理是否显示密码的相关逻辑
     */
    const newCallback = () => {
      const passwordItem = modelConfig.formItems.find((item) => item.field === 'emp_password')
      // 这里使用非空断言是确定了passwordItem是有值的
      // 并且排除null和undefined的类型，这里是排除了undefined的类型
      // 将鼠标放到passwordItem上时看到时 string | undefined 两种可选类型
      // 在新建的时候显示密码框
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modelConfig.formItems.find((item) => item.field === 'emp_password')
      passwordItem!.isHidden = true
    }

    // 2.动态添加部门列表和角色
    /*
     * 在界面中可能会发生数据没有请求到，但是我们点击了新建用户，导致部门和角色列表为空
     */
    const store = useStore()
    // 解决办法
    const modelConfigRef = computed(() => {
      const depItem = modelConfig.formItems.find((item) => item.field === 'dep_id')
      depItem!.options = store.state.entirDepartment.map((item) => {
        return { title: item.dep_name, value: item.dep_id }
      })
      const roleItem = modelConfig.formItems.find((item) => item.field === 'role_id')
      roleItem!.options = store.state.entirRole.map((item) => {
        return { title: item.role_name, value: item.role_id }
      })
      return modelConfig
    })

    // 3.调用hooks获取公共变量和函数
    // 解决监听子组件传过来的事件的警告
    // @reset-btn-click="handleResetClick"
    // @query-btn-click="handleQueryClick"
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch() as any

    const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
      newCallback,
      editCallback
    ) as any

    // 修改当前界面的currentPage
    // const handleCurrentPage = (pageInfo: any) => {
    //   const { currentPage, pageSize } = pageInfo
    //   pageContentRef.currentPageChange
    // }

    return {
      pageContentRef,
      searchFormConfig,
      contentTableConfig,
      modelConfigRef,
      handleResetClick,
      handleQueryClick,
      handleNewData,
      handleEditData,
      pageModelRef,
      defaultInfo,
      newCallback,
      editCallback
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  border-top: 20px solid #f5f5f5;
}
</style>
