import { IFormStyle } from '@/base-ui/form'

export const modelConfig: IFormStyle = {
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
      label: '状态',
      placeholder: '请选择状态',
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
  colLayout: { span: 24 },
  itemStyle: {
    padding: '0px 0px'
  },
  modelTitle: '新建角色'
}
