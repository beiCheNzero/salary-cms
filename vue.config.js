const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
// 引入自动引入插件
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  // lintOnSave: false,
  // transpileDependencies: true,
  // outputDir: './build',
  /*
   * 配置浏览器跨域问题
   */
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://159.75.136.33:3333',
        // target: 'http://127.0.0.1:3223',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true //虚拟的站点需要更管origin
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, 'src'), // 这个应该是自动配好的
        components: '@/components'
      }
    },
    // 配置webpack自动按需引入element-plus，
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'css',
            exclude: new RegExp(/^(?!.*submenu).*$/)
          })
        ]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
