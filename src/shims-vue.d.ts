/* eslint-disable */
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
declare let $filters: any
// declare let $store: any
// declare const VUE_APP_BASE_URL: string
