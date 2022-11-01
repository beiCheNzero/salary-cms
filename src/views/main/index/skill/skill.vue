<template>
  <div class="skill">
    <ljl-card title="项目简介">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Webpack、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </ljl-card>
    <ljl-card title="技术栈">
      <ljl-text-link :text-arrs="technologyStacks"></ljl-text-link>
      <ljl-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" />
      <ljl-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" />
    </ljl-card>
    <ljl-card title="项目结构">
      <div class="c-left">
        <ljl-code language="bash" :code="projectDir" />
      </div>
    </ljl-card>
    <ljl-card title="项目规范">
      <ljl-descriptions
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          { name: '文件(.ts .vue .json .d.ts)', description: '统一小写, 多个单词使用-分割' }
        ]"
      />
      <ljl-descriptions title="编写组件规范" :column="1" :table-datas="rugulate" />
    </ljl-card>

    <ljl-card title="Git提交规范">
      <ljl-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </ljl-card>
  </div>
</template>

<script lang="ts" setup>
import LjlCard from '@/base-ui/card'
import LjlTextLink from '@/base-ui/text-link'
import LjlDescriptions from '@/base-ui/descriptions'
import LjlCode from '@/base-ui/code'

import { technologyStacks, dependencies, devDependencies, projectDir, rugulate } from './config'
</script>

<style scoped lang="less">
.skill {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
