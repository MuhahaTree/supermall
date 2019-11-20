module.exports = {
  configureWebpack:{
      resolve:{
          alias:{
              'assets':'@/assets',
              'common':'@/commin',
              'components':'@/components',
              'network':'@/network',
              'views':'@/views',
          }
      }
  }
}