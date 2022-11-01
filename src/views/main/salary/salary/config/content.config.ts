export const contentTableConfig = {
  propList: [
    {
      prop: 'emp_name',
      label: '用户名',
      minWidth: '30'
    },
    {
      prop: 'work_day',
      label: '工作时间/天',
      minWidth: '40'
    },
    {
      prop: 'absent_day',
      label: '缺勤/天',
      minWidth: '40'
    },
    {
      prop: 'leave_day',
      label: '休假时间/天',
      minWidth: '40'
    },
    {
      prop: 'ill_day',
      label: '病假/天',
      minWidth: '40'
    },
    {
      prop: 'kq_salary',
      label: '考勤工资/月',
      minWidth: '30'
    },
    {
      prop: 'ach_salary',
      label: '津贴',
      minWidth: '30'
    },
    {
      prop: 'traffic',
      label: '通勤/月',
      minWidth: '30'
    },
    {
      prop: 'meal',
      label: '餐补/月',
      minWidth: '30'
    },
    {
      prop: 'high_temp',
      label: '高温补贴',
      minWidth: '40'
    },
    {
      prop: 'total_salary',
      label: '应发工资',
      minWidth: '40'
    },
    {
      prop: 'sub_salary',
      label: '社保',
      minWidth: '30'
    },
    {
      prop: 'net_salary',
      label: '实发工资',
      minWidth: '40'
    }
    // {
    //   props: '',
    //   label: '操作',
    //   minWidth: '60px',
    //   slotName: 'handler'
    // }
  ],
  // 用户列表
  title: '工资条',
  // 是否显示序号
  showIndexColumn: false,
  // 是否显示全选功能
  showSelectColumn: false,
  // 是否显示分页器
  showPagination: false,
  btnTitle: '',
  userSalaryList: true
}
