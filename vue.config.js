module.exports = {
  lintOnSave: false,
  devServer: {
    // 代理配置
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 我们要代理的地址
        changeOrigin: true, // 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求
        pathRewrite: {
          // 重新路由  localhost:8888/api/login  => www.baidu.com/api/login
          "^/api": "", // 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做
        },
      },
    },
  },
};
