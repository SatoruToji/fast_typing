import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
    port: number
}

export default (env: any) => {
    const isDev = env.mode === 'development'

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: '[name].[contenthash:8].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.jsx', '.ts', '.js'],
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev
            ? {
                  port: env.port ?? 666,
                  open: true,
              }
            : undefined,
    }

    return config
}
