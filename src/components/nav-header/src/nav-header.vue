<template>
  <div class="nav-header">
    <div class="nav-menu">
      <el-icon class="fold-menu" @click="handleFoldClick">
        <component :is="isFlod ? 'Expand' : 'Fold'"></component>
      </el-icon>
      <div class="content">
        <div>
          <ljl-breadcrumb :breadcrumbs="breadcrumbs" />
        </div>
        <div>
          <user-info />
        </div>
      </div>
    </div>
    <div class="nav-tab">
      <el-tabs
        :v-model="editableTabsValue"
        type="card"
        closable
        class="demo-tabs"
        @tab-click="handleNavTabChange"
        @tab-remove="handleTabRemove"
      >
        <el-tab-pane
          type="seccess"
          lazy
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import UserInfo from './cpns/user-info.vue'
import LjlBreadcrumb from '@/base-ui/breadcrumb'
import { firstMenu, pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import LocalCache from '@/utils/cache'

export default defineComponent({
  components: {
    UserInfo,
    LjlBreadcrumb
  },
  props: {
    isActiveName: {
      type: Number,
      default: 0
    }
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore()

    const isFlod = ref(false)
    const handleFoldClick = () => {
      isFlod.value = !isFlod.value
      emit('foldChange', isFlod.value)
    }

    // 面包屑数据
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currebtPath = route.path
      const userMenus = store.state.login.userMenus
      return pathMapBreadcrumbs(userMenus, currebtPath)
    })
    // console.log(breadcrumbs.value)

    const activeTabsValue = firstMenu.menu_id
    const editableTabsValue = ref(props.isActiveName ?? activeTabsValue)
    const editableTabs = ref(store.state.menuList)

    // 修改navTab
    const router = useRouter()
    const handleNavTabChange = (TabsPaneContext: any) => {
      const menu = editableTabs.value.find((item) => item.name === TabsPaneContext.paneName)
      editableTabsValue.value = menu.name
      router.push(`${menu.content}`)
    }
    // 移除navTab
    const handleTabRemove = (TabsPaneContext: any) => {
      const tabs = editableTabs.value
      let activeName = editableTabsValue.value
      if (activeName === TabsPaneContext) {
        tabs.forEach((item, index) => {
          if (item.name === TabsPaneContext) {
            const nextTab = item[index + 1] || item[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      editableTabsValue.value = activeName
      editableTabs.value = tabs.filter((tab) => tab.name !== TabsPaneContext)
      store.commit('changeMenuList', editableTabs.value)
      LocalCache.setCache('menuList', editableTabs.value)
    }
    watch(editableTabsValue, () => (editableTabsValue.value = props.isActiveName))

    return {
      isFlod,
      handleFoldClick,
      breadcrumbs,
      editableTabsValue,
      editableTabs,
      handleNavTabChange,
      handleTabRemove
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  // display: flex;
  width: 100%;
}
.nav-menu {
  display: flex;
  width: 100%;
  // margin-top: 30px;
  height: 35px;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    align-items: center;
  }

  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
.nav-tab {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  // border-top: 5px solid #f5f5f5;
  // background: rgb(131, 131, 131);

  .demo-tabs {
    margin-top: 20px;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 16px;
  font-weight: 600;
}
</style>
