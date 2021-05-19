const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const jsAndTsRules = {
  test: /\.(js|jsx|tsx|ts)$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/env", "@babel/react", "@babel/preset-typescript"],
    compact: false,
  },
};

const scssRules = {
  test: /\.scss$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const cssRules = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

module.exports = {
  entry: "./src/index.ts",
  /* output: {
    publicPath: "https://dreamy-darwin-f3d2b8.netlify.app/",
    //change the url to the production url.
  }, */
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    //si existen varios archivos con el mismo nombre
    //resuelve con la primera extencion en el orden
    //de la matriz
  },
  mode: "production",
  module: {
    rules: [jsAndTsRules, scssRules, cssRules],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
