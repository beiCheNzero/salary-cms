export const contentTableConfig = {
  propList: [
    {
      prop: 'dep_id',
      label: '部门id',
      minWidth: '50'
    },
    {
      prop: 'dep_name',
      label: '部门名称',
      minWidth: '40'
    },
    {
      prop: 'emp_id',
      label: '部门领导',
      minWidth: '40'
    },
    {
      prop: 'dep_intr',
      label: '部门介绍',
      minWidth: '80'
    },
    {
      prop: 'dep_jb_salary',
      label: '加班工资/天',
      minWidth: '40'
    },
    {
      prop: 'dep_absent_salary',
      label: '缺勤扣除工资/天',
      minWidth: '60'
    },
    {
      props: '',
      label: '操作',
      minWidth: '80px',
      slotName: 'handler'
    }
  ],
  // 用户列表
  title: '部门列表',
  // 是否显示序号
  showIndexColumn: true,
  // 是否显示全选功能
  showSelectColumn: true,
  btnTitle: '新建部门'
}
