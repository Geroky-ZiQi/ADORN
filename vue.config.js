const path = require('path')
const resolve = dir => path.join(__dirname, dir);
const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
            // 将一些对象注册成全局的
            // $: 'jquery',
            // jQuery: 'jquery',
          })
        ]
    },
	chainWebpack: config => {
        // 添加别名,根据自己实际需要设置
      config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets/images/'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'));
	}
}
