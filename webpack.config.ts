import path from 'path';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildPaths, EnvVariables} from "./config/build/types/types";

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    return buildWebpack({
        port: env.port ?? 5000,
        mode: env.mode ?? 'development',
        paths
    });
};