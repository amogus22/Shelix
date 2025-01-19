import webpack, { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {

    const isDev = options.mode === 'development'

    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
          path: options.paths.output,
          filename: 'bundle.[contenthash].js',
          clean: true
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devServer: isDev ? buildDevServer(options) : undefined
      }
}