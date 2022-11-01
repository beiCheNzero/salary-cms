<template>
  <div class="ljl-table">
    <!-- 头部内容 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
      </slot>
      <div class="handler">
        <!-- 头部插槽 -->
        <slot name="headerHandler"></slot>
        <slot name="selectUserToSalary"></slot>
      </div>
    </div>
    <!-- 中间展示内容 -->
    <el-table
      :data="listData"
      border
      style="100%"
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
    >
      <!-- 是否显示选项框 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="50"
      ></el-table-column>
      <!-- 是否显示序号 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <!-- 显示主体内容 -->
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          v-bind="item"
          align="center"
          show-overflow-tooltip
          v-if="!(item.prop === 'handle' && !isDelete && !isUpdate)"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 底部展示内容 -->
    <div class="footer">
      <slot name="footer" v-if="showPagination">
        <div class="footer">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :page-sizes="[5, 10, 20, 40]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listCount"
          ></el-pagination>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPropList } from '../types'

export default defineComponent({
  props: {
    listData: {
      type: Array as PropType<any[]>,
      required: true
    },
    propList: {
      // 这里自己定义了IpropList属性，哪里就不会报错了
      // 这里type修改成[],在上面数据的引用中 `item` 就不会报unknown的类型
      type: Array as PropType<IPropList[]>,
      default: () => []
    },
    listCount: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    childrenProps: {
      type: Object,
      default: () => {}
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    isDelete: {
      type: Boolean,
      default: false
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      console.log(value)
      emit('selectionChange', value)
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    return {
      handleSelectChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;

  .title {
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }

  .handler {
    align-items: center;
    margin-right: 20px;
  }
}

.footer {
  display: flex;
  padding: 10px 0 10px 0;
  justify-content: center;
  background: #ffffff;
}
</style>
