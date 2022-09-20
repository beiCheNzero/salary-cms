/*
 * 添加验证规则
 * el-form-item中的prop要与el-input中v-model绑定的值一致，否则不会校验
 */
export const rules = {
  emp_name: [
    {
      required: true,
      message: '用户名位必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名为5-10位的数字字母',
      trigger: 'blur'
    }
  ],
  emp_password: [
    {
      required: true,
      message: '密码位必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是三位以上的数字字母',
      trigger: 'blur'
    }
  ]
}
