<template>
  <div class="personal">
    <div class="ljl-steps">
      <ljl-steps :stepsConfig="stepsConfig.propsList" :space="stepsConfig.space"></ljl-steps>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LjlSteps from '@/base-ui/steps/type'

import { stepsConfig } from './config/stepsConfig'

export default defineComponent({
  name: 'personal',
  components: {
    LjlSteps
  },
  setup() {
    return {
      stepsConfig
    }
  }
})
</script>

<style scoped lang="less">
.personal {
  width: 100%;
  display: flex;

  .ljl-steps {
    flex: 1;
    width: 100%;
    height: 150px;
  }
}
</style>
