module.exports = {
  publicPath: '/',
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `
  //          @import "@/css/fontello.scss";
  //       `
  //     }
  //   }
  // },
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // plugin omitted
}