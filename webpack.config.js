const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');
// const CleanWebpackPlugin=require('clean-webpack-plugin');
// const UgfilyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
module.exports={
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'js/bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        // new CleanWebpackPlugin(['build']),
        // new UgfilyjsWebpackPlugin()
        new webpack.ProvidePlugin({
            React:'react',
            ReactDOM:'react-dom'
        })


    ],
    module:{
        loaders:[
            {
               test:/\.less/,
               loader:'style-loader!css-loader!less-loader' 
            },
            {
                test:/\.css/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,//表示要编译的文件的类型，这里要编译的是js文件
                loader: 'babel-loader',//装载的哪些模块
                exclude: /node_modules/,//标识不编译node_modules文件夹下面的内容
                query: {//具体的编译的类型，
                    compact: false,//表示不压缩
                    presets: [ 'react']//我们需要编译的是react
                }
            },
            // {
            //     test:/\.(jpg|png|gif)$/,
            //     loader:'file-loader'
    
            // },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:12000,
                    name:'img/[name]_[hash].[ext]'
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'file-loader'
            }
    
        ]
    },
    resolve:{
        extensions:['.jsx','.less','.js','.css']
    }
}