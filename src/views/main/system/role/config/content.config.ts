export const contentTableConfig = {
  propList: [
    {
      prop: 'role_name',
      label: '角色名',
      minWidth: '50'
    },
    {
      prop: 'role_info',
      label: '角色介绍',
      minWidth: '40'
    },
    {
      prop: 'state',
      label: '状态',
      minWidth: '40',
      slotName: 'state'
    },
    {
      props: '',
      label: '操作',
      minWidth: '80px',
      slotName: 'handler'
    }
  ],
  // 用户列表
  title: '角色列表',
  // 是否显示序号
  showIndexColumn: true,
  // 是否显示全选功能
  showSelectColumn: true,
  btnTitle: '新建角色'
}
