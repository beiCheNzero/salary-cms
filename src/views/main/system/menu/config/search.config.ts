import { IFormStyle } from '@/base-ui/form'

export const searchFormConfig: IFormStyle = {
  formItems: [
    {
      field: 'dep_id',
      type: 'input',
      label: '部门id',
      placeholder: '请输入部门id'
    },
    {
      field: 'dep_name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 }
}
