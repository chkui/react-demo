/**
 * Created by chkui on 2016/11/17.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        './dev/js/index/index':'./dev/js/index/comps/main.jsx',
        common:['react']
    },//定义要引入的js文件
    output: {
        path: __dirname,
        filename: '[name].js', //定义要输出的js文件
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },

    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common',  './dev/js/common/common.js')//单独打包组件库
        ,
        /*new webpack.optimize.UglifyJsPlugin({//压缩打包
            compress: {
                warnings: false
            }
        })*/
    ]
};
