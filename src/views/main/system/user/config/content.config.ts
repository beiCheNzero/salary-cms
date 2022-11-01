export const contentTableConfig = {
  propList: [
    {
      prop: 'emp_name',
      label: '用户名',
      minWidth: '50'
    },
    {
      props: 'emp_avatar',
      label: '用户头像',
      minWidth: '40',
      slotName: 'avatar'
    },
    {
      prop: 'emp_sex',
      label: '性别',
      minWidth: '50',
      slotName: 'sex'
    },
    {
      prop: 'emp_age',
      label: '年龄',
      minWidth: '40',
      slotName: 'age'
    },
    {
      prop: 'emp_post',
      label: '职位',
      minWidth: '40'
    },
    {
      prop: 'emp_phone',
      label: '电话号码',
      minWidth: '60'
    },
    {
      prop: 'create_time',
      label: '创建时间',
      minWidth: '80',
      slotName: 'create_time'
    },
    {
      prop: 'update_time',
      label: '更新时间',
      minWidth: '80',
      slotName: 'update_time'
    },
    {
      props: '',
      label: '操作',
      minWidth: '80px',
      slotName: 'handler'
    }
  ],
  // 用户列表
  title: '用户列表',
  // 是否显示序号
  showIndexColumn: true,
  // 是否显示全选功能
  showSelectColumn: true,
  btnTitle: '新建用户'
}
