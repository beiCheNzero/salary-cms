<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      :title="modelConfig.modelTitle"
      width="30%"
      center
      destroy-on-close
    >
      <ljl-form v-bind="modelConfig" v-model="formData"></ljl-form>
      <!-- 默认插槽 -->
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import ljlForm from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    modelConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    ljlForm
  },
  emits: ['currentPageChange'],
  setup(props, { emit }) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modelConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 点击确定按钮提交数据
    const store = useStore()
    // 在一次请求用户的最新数据
    store.dispatch('requestInitUserData')

    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 有值就是编辑
        console.log('编辑')
        emit('currentPageChange', { currentPage: 0, pageSize: 10 })
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.emp_id || props.defaultInfo.role_id || props.defaultInfo.dep_id
        })
      } else {
        // 新建
        console.log('新建')
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
