import { ModuleOptions } from "webpack"
import { BuildOptions } from "./types/types"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import loader from "mini-css-extract-plugin/types/loader"

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development'

    const svgLoader = {
        test: /\.svg$/i,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }], 
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        scssLoader,
        tsLoader,
        assetsLoader,
        svgLoader
    ]
}