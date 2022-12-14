<template>
  <div class="ljl-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option v-for="opt in item.options" :key="opt.value" :value="opt.value">
                    {{ opt.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'detepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => {}
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      /*
       * ???vue3???TS???????????????
       * ????????????????????????????????????????????????????????????????????????????????????????????????????????????
       */
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '20px 40px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ???1920px
        lg: 8, // ???1200px
        md: 12, // ???992px
        sm: 24, // ???768px
        xs: 24 // <768px
      })
    }
  },
  /*
   * ??????????????????????????????????????????????????????????????????
   */
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // ?????????????????????????????????
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.ljl-form {
  padding-top: 22px;
  background: rgb(255, 255, 255);
}
</style>
