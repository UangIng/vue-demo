module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
    lintOnSave: false,//关闭eslint验证
    runtimeCompiler: true,
  
  }