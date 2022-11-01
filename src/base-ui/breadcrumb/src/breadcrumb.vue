<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.menu_id">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.menu_name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  emits: ['changeId'],
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {
      ArrowRight
    }
  }
})
</script>

<style scoped></style>
