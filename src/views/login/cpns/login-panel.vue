<template>
  <div class="login-panel">
    <h2 class="title">工资管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><phone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginAccount from './login-account.vue'

export default defineComponent({
  components: {
    loginAccount
  },
  setup() {
    return
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }
}
</style>
