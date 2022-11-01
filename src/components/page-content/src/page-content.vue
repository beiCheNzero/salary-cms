<template>
  <div class="ljl-content">
    <ljl-table
      :listData="dataList ?? salaryData"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      @selectionChange="handleIndexRowList"
      :isUpdate="isUpdate"
      :isDelete="isDelete"
    >
      <!-- 头部新建用户/刷新按钮 -->
      <template #headerHandler>
        <!-- 新建 -->
        <template v-if="isCreate">
          <el-button type="primary" @click="handleNewClick">
            {{ contentTableConfig.btnTitle }}
          </el-button>
        </template>
      </template>
      <!-- 修改创建时间的插槽 -->
      <template #create_time="scope">
        {{ $filters.formatTime(scope.row.create_time) }}
      </template>
      <!-- 修改更新时间的插槽 -->
      <template #update_time="scope">
        {{ $filters.formatStamp(scope.row.update_time) }}
      </template>
      <!-- 修改操作的插槽 -->
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            size="small"
            type="primary"
            plain
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
          >
            <el-icon><Edit /></el-icon>
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            plain
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon><delete /></el-icon>
            删除
          </el-button>
        </div>
      </template>
      <!-- 底部内容 -->
      <template #footer> </template>
      <!-- 修改性别的插槽 -->
      <template #sex="scope">
        <el-button plain type="success">
          {{ scope.row.emp_sex === '男' ? 'male' : 'Female' }}
        </el-button>
      </template>
      <!-- 修改状态的插槽 -->
      <template #state="scope">
        <el-button plain :type="scope.row.state ? 'success' : 'danger'">
          {{ scope.row.state === '启用' ? '在线' : '离线' }}
        </el-button>
      </template>

      <!-- 动态插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>

      <!-- 查询用户的工资条 -->
      <template #selectUserToSalary>
        <slot name="selectUserToSalary"></slot>
      </template>
    </ljl-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

import LjlTable from '@/base-ui/table'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    LjlTable
  },
  emits: ['editBtnClick', 'newBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 获取操作(按钮)权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 双向绑定
    const DEFAULT_VALUE = { currentPage: 1, pageSize: 10 }
    const pageInfo = ref(DEFAULT_VALUE)
    // const currentPageChange = (): IPageInfo => {
    //   console.log(pageInfo.value)
    //   pageInfo.value = DEFAULT_VALUE
    //   return pageInfo.value
    // }
    // pageInfo.value = currentPageChange
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) {
        return (() => {
          console.log('没有查询权限')
        })()
      }
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.pageSize * (pageInfo.value.currentPage - 1),
          limit: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 请求用户工资条的信息
    const getUserSalary = () => {
      store.dispatch('salary/getSalaryDataAction', {
        pageName: props.pageName,
        id: store.state.login.userInfo.emp_id
      })
    }
    if (props.pageName === 'salary') getUserSalary()

    // 获取到数据
    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
    const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName))

    const salaryData = computed(() => store.getters[`salary/salaryData`])
    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    // 获取选中列的数据
    // const handleIndexRowList = (value: any) => {
    //   // console.log(value)
    // }

    // 获取其他动态插槽的名称
    const otherPropSlots = props.contentTableConfig.propList.filter((item: any) => {
      if (item.slotName === 'state') return false
      if (item.slotName === 'create_time') return false
      if (item.slotName === 'update_time') return false
      if (item.slotName === 'sex') return false
      if (item.slotName === 'headerHandler') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 删除按钮
    const handleDeleteClick = (payload: any) => {
      pageInfo.value = DEFAULT_VALUE
      // console.log(pageInfo.value)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: payload.emp_id || payload.role_id || payload.dep_id
      })
    }
    // 编辑按钮
    const handleEditClick = (payload: any) => {
      // console.log(payload)
      emit('editBtnClick', payload)
    }
    // 新建用户
    const handleNewClick = () => {
      emit('newBtnClick')
    }

    return {
      dataList,
      dataCount,
      pageInfo,
      getPageData,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleEditClick,
      handleNewClick,
      salaryData,
      getUserSalary
    }
  }
})
</script>

<style scoped lang="less">
.ljl-content {
  // border-top: 20px solid #f5f5f5;
}
</style>
