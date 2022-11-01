import { IFormStyle } from '@/base-ui/form'

export const modelConfig: IFormStyle = {
  formItems: [
    {
      field: 'dep_name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'emp_id',
      type: 'select',
      label: '部门领导',
      placeholder: '请选择部门领导',
      options: []
    },
    {
      field: 'dep_intr',
      type: 'input',
      label: '部门介绍',
      placeholder: '请输入部门介绍'
    },
    {
      field: 'dep_jb_salary',
      type: 'input',
      label: '加班工资',
      placeholder: '请输入加班工资/天'
    },
    {
      field: 'dep_absent_salary',
      type: 'input',
      label: '缺勤工资',
      placeholder: '请输入缺勤工资/天'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: '0px 0px'
  }
}
