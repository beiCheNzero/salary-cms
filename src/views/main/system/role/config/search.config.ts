import { IFormStyle } from '@/base-ui/form'

export const searchFormConfig: IFormStyle = {
  formItems: [
    {
      field: 'role_name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'role_info',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    },
    {
      field: 'state',
      type: 'select',
      label: '角色状态',
      placeholder: '请输入选择角色状态',
      options: [
        {
          title: '在线',
          value: '启用'
        },
        {
          title: '离线',
          value: '禁用'
        }
      ]
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 }
}
