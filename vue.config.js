const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/css-structure/settings/var.scss";
          @import "@/assets/css-structure/tools/_sassMagic.scss";
        `
      }
    }
  },
  configureWebpack: {}
})
