<template>
  <div class="steps">
    <el-container>
      <el-header class="steps-header">
        <el-steps class="el-steps" :active="active" finish-status="success" align-center>
          <template v-for="item in stepsConfig" :key="item.name">
            <el-step class="step" :title="item.title" :description="item.description" />
          </template>
        </el-steps>
        <el-button :plain="true" class="nextBtn" @click="next">下一步</el-button>
      </el-header>
      <el-main class="steps-main" v-if="active === 3">
        <el-descriptions class="steps-desc" title="用户详细信息" :column="2" border>
          <template v-for="item in userList" :key="item.label">
            <el-descriptions-item
              :label="item.label"
              label-align="center"
              align="center"
              label-class-name="my-label"
              class-name="my-content"
              width="150px"
            >
              <template v-if="item.label !== '头像'">
                {{ item.value ?? '' }}
              </template>
              <template v-else-if="item.label === '头像'">
                <el-avatar :src="item.value"></el-avatar>
              </template>
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import LocalCache from '@/utils/cache'

export default defineComponent({
  props: {
    stepsConfig: {
      type: Object,
      default: () => {}
    },
    space: {
      type: String,
      default: '50px'
    }
  },
  setup() {
    const active = ref(0)
    const next = () => {
      // console.log(active.value)
      if (active.value++ > 2) active.value = 0
      if (active.value) {
        ElMessage({
          showClose: true,
          message: `第${active.value}步完成，请继续完成后续步骤`,
          type: 'success',
          center: true,
          duration: 2000
        })
      }
    }

    // 获取用户数据
    const user: any = LocalCache.getCache('userInfo')
    for (const item in user) {
      switch (item) {
        case 'emp_id':
          delete user[item]
          break
        case 'dep_id':
          delete user[item]
          break
        case 'role_id':
          delete user[item]
          break
        case 'emp_password':
          delete user[item]
          break
        case 'create_time':
          delete user[item]
          break
        case 'update_time':
          delete user[item]
          break
        default:
          break
      }
    }
    const userList: any[] = []
    for (const item in user) {
      userList.push({ label: item, value: user[item] })
    }
    for (const item of userList) {
      switch (item.label) {
        case 'emp_name':
          item.label = '姓名'
          break
        case 'emp_sex':
          item.label = '性别'
          break
        case 'emp_age':
          item.label = '年龄'
          break
        case 'emp_post':
          item.label = '职位'
          break
        case 'emp_avatar':
          item.label = '头像'
          break
        case 'emp_phone':
          item.label = '电话'
          break
        case 'emp_insurance':
          item.label = '保险费用'
          break
        case 'authority':
          item.label = '权限等级'
          break
      }
    }
    return {
      active,
      next,
      userList
    }
  }
})
</script>

<style scoped lang="less">
.steps-header {
  width: 100%;
  height: 150px;
}
.steps-main {
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  padding: 20px 0 0 0;

  .steps-desc {
    background: #fff;
    padding: 10px;
  }
}
.my-label {
  background: var(--el-color-success-light-9);
}
.my-content {
  background: var(--el-color-danger-light-9);
}
.steps {
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding-top: 10px;

  .steps-header {
    flex: 1;
    .step {
      flex: 1;
      align-items: center;
    }
  }
}
.nextBtn {
  margin-top: 20px;
}
// 正在进行的进度条
/deep/
  .el-steps.el-steps--horizontal
  > .el-step.is-horizontal.is-center
  > .el-step__head.is-process {
  font-weight: 600;
  color: rgb(206, 54, 54);
  .el-step__icon {
    z-index: 1;
    border-color: rgb(206, 54, 54);
  }
}
// 正在进行的进度条
/deep/
  .el-steps.el-steps--horizontal
  .el-step.is-horizontal.is-center
  .el-step__description.is-process {
  font-weight: 600;
  color: rgb(206, 54, 54);
  .el-step__icon {
    z-index: 1;
    border-color: rgb(206, 54, 54);
  }
}
// 未完成的进度条
/deep/
  .el-steps.el-steps--horizontal
  .el-step.is-horizontal.is-center
  .el-step__head.is-wait
  .el-step__icon {
  z-index: 1;
  color: gray;
  border-color: gray;
}
// 进行中的文字颜色

/deep/ .el-steps.el-steps--horizontal .el-step.is-horizontal.is-center .el-step__title.is-process {
  font-weight: 700;
  color: rgb(206, 54, 54);
}
/deep/ .el-steps.el-steps--horizontal .el-step.is-horizontal.is-center .el-step__title.is-finish {
  font-weight: 700;
  color: rgb(0, 110, 255);
}
</style>
