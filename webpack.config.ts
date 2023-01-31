import path from "path";
import { Configuration } from "webpack";
import { BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
  build: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev,
});

export default config;