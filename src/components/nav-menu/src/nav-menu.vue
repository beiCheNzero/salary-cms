<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">工资管理系统</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <template v-for="item in userMenus" :key="item.menu_id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu>
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.menu_name }}</span>
            </template>
          </el-sub-menu>
          <template v-for="subitem in item.children" :key="subitem.menu_id">
            <!-- 遍历里面的item -->
            <el-menu-item>
              <el-icon v-if="subitem.icon">
                <component :is="subitem.icon"></component>
              </el-icon>
              <span>{{ subitem.menu_name }}</span>
            </el-menu-item>
          </template>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <el-icon v-if="item.icon">
              <component :is="item.icon"> </component>
            </el-icon>
            <span>{{ item.menu_name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

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
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
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