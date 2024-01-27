// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  publicPath: process.env.NODE_ENV === 'production' ? '/vue/dist/' : '/',
  lintOnSave: true,

  transpileDependencies: ["vuetify"],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/styles.scss";`,
      },
    },
  },


};

