import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import  { Configuration, DefinePlugin } from 'webpack'
import { BuildOptions } from "./types/types"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins(options: BuildOptions): Configuration['plugins']{

    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ 
            template: options.paths.html
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)       
        })
    ]

    if(!isProd){
        plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:5].css'
            })
        )
    }

    return plugins
}