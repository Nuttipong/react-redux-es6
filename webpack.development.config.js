const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', //source-map
    resolve: {
        extensions: ['.js', '.map', '.jpg', '.png', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader?name=images/[name]-[hash:base64:5].[ext]",
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                }
                            }
                        }
                    }
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader?name=fonts/[name].[ext]',
                exclude: /(node_modules)/
            },
        ]
    }
});