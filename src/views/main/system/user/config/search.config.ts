import { IFormStyle } from '@/base-ui/form'

export const searchFormConfig: IFormStyle = {
  formItems: [
    {
      field: 'emp_id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'emp_name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'emp_post',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'emp_phone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'emp_sex',
      type: 'select',
      label: '性别',
      placeholder: '请选择用户性别',
      options: [
        {
          title: 'male',
          value: '男'
        },
        {
          title: 'Female',
          value: '女'
        }
      ]
    },
    {
      field: 'createAt',
      type: 'detepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 }
}
