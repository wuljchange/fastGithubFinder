// 让你可以动态插入 bundle 好的 .js 档到 .index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

// entry 为进入点，output 为进行完 eslint、babel loader 转译后的档案位置
module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: 'eslint-loader',
                include: `${__dirname}/src`,
                exclude: /bundle\.js$/
            }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
            },
        }],
    },
    // 启动开发测试用 server 设定（不能用在 production）
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [HTMLWebpackPluginConfig],
};