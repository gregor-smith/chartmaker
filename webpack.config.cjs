const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PreCSS = require('precss')
const Autoprefixer = require('autoprefixer')


const sourceDirectory = path.join(__dirname, 'src')
const bundleDirectory = path.join(__dirname, 'bundle')


module.exports = {
    entry: path.join(sourceDirectory, 'app.tsx'),
    output: {
        filename: '[name].js',
        path: bundleDirectory,
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.[cm]?tsx?$/,
                exclude: '/node_modules/',
                use: [
                    { loader: 'ts-loader' },
                    {
                        loader: 'string-replace-loader',
                        options: {
                            // required for ts files to import other ts files
                            // with a .js extension, which is in turn required
                            // to distribute a valid es module
                            search: /from '(.+?)\.js/g,
                            replace: (_, match) => `from '${match}`
                        }
                    }
                ]
            },
            {
                test: /\.[cm]?js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                PreCSS,
                                Autoprefixer
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'string-replace-loader',
                        options: {
                            // remove license comments
                            search: /^\/\*!.+?\*\//s,
                            replace: ''
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.join(sourceDirectory, 'template.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true
            },
            cache: false
        }),
        new InlineSourceWebpackPlugin({
            compress: true,
            noAssetMatch: 'warn'
        })
    ],
    mode: 'development'
}
