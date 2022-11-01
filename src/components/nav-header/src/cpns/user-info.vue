<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :src="avatar" size="small"></el-avatar>
        <span class="user-name">
          {{ name }}
        </span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="close" @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item divided icon="user">用户信息</el-dropdown-item>
          <el-dropdown-item icon="setting">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.emp_name).value
    const avatar = computed(() => store.state.login.userInfo.emp_avatar).value

    // 退出登录
    const router = useRouter()
    const handleExitClick = () => {
      store.state.menuList = []
      LocalCache.deleteCache('token')
      router.push('/main')
    }
    return {
      name,
      avatar,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;

  .user-name {
    margin-left: 10px;
  }
}
</style>
