import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/buildWebpack';
import { BuildMode, BuildPaths, BuildPlatfrom } from './config/types/types';

interface EnvVariables{
  mode: BuildMode,
  port: number,
  platform: BuildPlatfrom
}

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'bundle'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    platform: env.platform ?? 'desktop'
  })
  return config
};