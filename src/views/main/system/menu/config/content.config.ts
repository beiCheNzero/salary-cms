export const contentTableConfig = {
  propList: [
    {
      prop: 'menu_name',
      label: '菜单名称',
      minWidth: '50'
    },
    {
      prop: 'type',
      label: '菜单等级',
      minWidth: '40'
    },
    {
      prop: 'url',
      label: '菜单路径',
      minWidth: '60'
    },
    {
      prop: 'icon',
      label: '菜单图标',
      minWidth: '50'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '50'
    },
    {
      prop: 'handle',
      label: '操作',
      minWidth: '80px',
      slotName: 'handler'
    }
  ],
  // 用户列表
  title: '菜单列表',
  // 是否显示序号
  showIndexColumn: false,
  // 是否显示全选功能
  showSelectColumn: false,
  // 是否显示分页器
  showPagination: false,
  btnTitle: '新建菜单',
  childrenProps: {
    rowKey: 'menu_id',
    treeProp: {
      children: 'children'
    }
  }
}
