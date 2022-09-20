<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="userInfo" ref="formRef">
      <el-form-item label="账号" prop="emp_name">
        <el-input v-model="userInfo.emp_name" />
      </el-form-item>
      <el-form-item label="密码" prop="emp_password">
        <el-input v-model="userInfo.emp_password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import LocalCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const userInfo = reactive({
      emp_name: LocalCache.getCache('name') ?? '',
      emp_password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      // 这里是对form表单的内容是否符合规则，如果符合为true
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            LocalCache.setCache('name', userInfo.emp_name)
            LocalCache.setCache('password', userInfo.emp_password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }

          // 2.开始登录验证
          // login模块下的accountLoginAction
          store.dispatch('login/accountLoginAction', { ...userInfo })
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
