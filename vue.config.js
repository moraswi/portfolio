module.exports = {
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

