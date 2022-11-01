<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/gold.png" alt="logo" />
      <span class="title" v-if="!isCollapse">工资管理系统</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#0c2135"
      active-text-color="#ffd04b"
      text-color="#fff"
    >
      <template v-for="item in userMenus" :key="item.menu_id">
        <!-- 一级菜单 -->
        <template v-if="item.type === 1 && item.children.length === 0">
          <el-menu-item :index="item.menu_id + ''" @click="handleMenuItemClick(item)">
            <el-icon v-if="item.icon">
              <component :is="item.icon"> </component>
            </el-icon>
            <span>{{ item.menu_name }}</span>
          </el-menu-item>
        </template>
        <!-- 二级菜单 -->
        <template v-if="item.type === 1 && item.children.length !== 0">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.menu_id + ''">
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.menu_name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.menu_id">
              <el-menu-item :index="subitem.menu_id + ''" @click="handleMenuItemClick(subitem)">
                <el-icon v-if="subitem.icon">
                  <component :is="subitem.icon"></component>
                </el-icon>
                <span>{{ subitem.menu_name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { IMenuTypes } from '@/utils/types'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
import LocalCache from '@/utils/cache'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  emits: ['activeNameChange'],
  setup(props, { emit }) {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.menu_id + '')

    // 导航面包屑
    const handleMenuItemClick = (item: IMenuTypes) => {
      const navMenuList = ref(store.state.menuList)
      const menuRes = !!navMenuList.value.find((menu: any) => menu.name === item.menu_id)
      console.log(menuRes)
      if (!menuRes) {
        emit('activeNameChange', item.menu_id)
        navMenuList.value.push({ title: item.menu_name, name: item.menu_id, content: item.url })
        store.commit('changeMenuList', navMenuList.value)
        LocalCache.setCache('menuList', navMenuList.value)
      }
      router.push({
        path: item.url ?? '/notFound'
      })
    }

    return {
      userMenus,
      handleMenuItemClick,
      defaultValue
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001b35;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #002f5b !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #002242 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
