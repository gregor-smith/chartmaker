import path from 'path'

import HTMLWebpackPlugin from 'html-webpack-plugin'
import InlineSourceWebpackPlugin from 'inline-source-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ResolveTypeScriptPlugin from 'resolve-typescript-plugin'

import pkg from './package.json' assert { type: 'json' }


export default {
    entry: {
        [pkg.name]: path.join(process.cwd(), 'src', 'app.tsx')
    },
    output: {
        filename: '[name].js',
        path: path.join(process.cwd(), 'bundle'),
        publicPath: '/',
        module: true
    },
    devtool: 'source-map',
    resolve: {
        plugins: [
            new ResolveTypeScriptPlugin.default()
        ]
    },
    module: {
        rules: [
            {
                test: /\.[cm]?tsx?$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true
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
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
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
            template: path.join(process.cwd(), 'src', 'template.html'),
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
    mode: 'development',
    experiments: {
        outputModule: true
    }
}
