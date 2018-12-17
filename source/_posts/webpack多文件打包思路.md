---
title: webpack多文件打包思路
date: 2018-01-13T19:12:28
tags: webpack
---

17年的时候做的项目，当时前后端分离的不是很彻底，.net写的控制器，所以我需要单独分离js，以下是我的webpack配置文件：

```javascript
var path = require('path')
var webpack = require('webpack')
const globby = require('globby');
const CleanWebpackPlugin = require('clean-webpack-plugin') //清除dist
//publicpath 根据环境来区分
let proUrl = process.env.NODE_ENV == 'production' ? '/travelbook' : '';
// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = globby.sync(globPath);
    let entries = {};
    console.log(files);
    files.forEach(function (filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        var split = filepath.split('/');
        //文件名统一为 二级目录/main.js
        var name = split[split.length - 2] + '/main';
        entries[name] = './' + filepath;
    });
    return entries;
}

let entries = getEntries(['src/js/**/**.js', 'src/js/**/**/**.js']);

console.log(entries);

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: proUrl + '/dist',
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.css$|\.less$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '/fonts/[name].[ext]'
                    }
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '/assets/[name].[ext]'
                    }
                },
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 5000,
        host: '0.0.0.0'
    },
    externals: {
        //引用全局jquery，外部加载内部不加载
        jquery: 'window.jQuery'
    },
    devtool: 'inline-source-map',
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
        //运行环境，可以为dev或者production，默认dev
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        //压缩，或者直接webpack -p
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true
        // }),
        new CleanWebpackPlugin('dist')
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.vue', '.less'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            js: path.join(__dirname, './dest/js'),
            vue$: 'vue/dist/vue.common.js',
            // jquery: path.resolve(__dirname, "./node_modules/jquery/dist/jquery.min.js")
        }
    }
}
```