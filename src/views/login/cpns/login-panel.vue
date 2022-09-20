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
        <loginAccount ref="accountRef" />
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
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="success" class="login-button" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'

export default defineComponent({
  components: {
    loginAccount
  },
  setup() {
    const isKeepPassword = ref(true)
    // 通过ref绑定组件并获取里面的函数进行打印
    const accountRef = ref<InstanceType<typeof loginAccount>>()

    const handleLoginClick = () => {
      // 因为我们在accountRef中没有传入值，所以他推断我们可以是undefined的，所以添加可选链
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
  }

  .login-button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
