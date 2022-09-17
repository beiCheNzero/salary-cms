<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="userInfo" ref="formRef">
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
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import LocalCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const userInfo = reactive({
      account: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      console.log('account组件的内容')
      // 这里是对form表单的内容是否符合规则，如果符合为true
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            LocalCache.setCache('name', userInfo.account)
            LocalCache.setCache('password', userInfo.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
        }
      })
    }

    return {
      userInfo,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
