var path = require('path');
var webpack = require('webpack');
var extracttextplugin = require('extract-text-webpack-plugin');
var htmlwebpackplugin = require('html-webpack-plugin');
var extractplugin = new extracttextplugin({
    filename: 'styles.css'
});




module.exports = {
    entry: './src/main.js',

    output: {

        path: path.resolve(__dirname, 'dist'),

        filename: 'all.js'
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'es2015'
                    }
                }
},
            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: extractplugin.extract({
                    use: ['css-loader', 'sass-loader']
                })

            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]

            }


        ]
    },
    plugins: [extractplugin, new htmlwebpackplugin({
        template: 'src/index.pug'
    }), new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        "window.jQuery": 'jquery',
        PhotoSwipe: 'photoswipe',
        PhotoSwipeUI_Default: 'photoswipe'
    })]




}
