<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="userInfo">
      <el-form-item label="账号" prop="account">
        <el-input v-model="userInfo.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const userInfo = reactive({
      account: '',
      password: ''
    })

    return {
      userInfo,
      rules
    }
  }
})
</script>

<style scoped lang="less"></style>
