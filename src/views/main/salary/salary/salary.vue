<template>
  <div class="salary">
    <page-content ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="salary">
      <template #selectUserToSalary v-if="userInfo.authority === '1'">
        <el-select v-model="selectUser" placeholder="Select" style="width: 155px">
          <el-option
            v-for="item in selectInfo"
            :key="item.emp_id"
            :value="item.emp_id"
            :label="item.emp_name"
          />
        </el-select>
        <el-button @click="handleSelectUser">
          <el-icon><Search /></el-icon>
          <span>查询</span>
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'

import { usePageSearch } from '@/hooks/usePageSearch'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'salary',
  components: {
    PageContent
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch() as any

    const selectUser = ref('')
    const store = useStore()
    const userInfo = computed(() => store.state.login.userInfo)
    const selectInfo = computed(() => store.state.entirUser)
    const handleSelectUser = () => {
      // console.log(pageContentRef.value.pageName)
      // console.log(selectUser.value)
      store.dispatch('salary/getSalaryDataAction', {
        pageName: pageContentRef.value.pageName,
        id: selectUser.value
      })
      pageContentRef.value.getUserSalary
    }

    return {
      contentTableConfig,
      pageContentRef,
      handleQueryClick,
      handleResetClick,
      selectInfo,
      selectUser,
      handleSelectUser,
      userInfo
    }
  }
})
</script>

<style scoped></style>
