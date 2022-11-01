import { IFormStyle } from '@/base-ui/form'

export const modelConfig: IFormStyle = {
  formItems: [
    {
      field: 'emp_name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'emp_password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      field: 'emp_sex',
      type: 'input',
      label: '性别',
      placeholder: '请输入性别'
    },
    {
      field: 'emp_age',
      type: 'input',
      label: '年龄',
      placeholder: '请输入年龄'
    },
    {
      field: 'emp_post',
      type: 'input',
      label: '职位',
      placeholder: '请输入职位'
    },
    {
      field: 'emp_phone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'dep_id',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'role_id',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: '0px 0px'
  },
  labelWidth: '80px'
}
