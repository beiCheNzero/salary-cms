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
      field: 'dep_salary',
      type: 'input',
      label: '基本工资',
      placeholder: '请输入基本工资'
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
