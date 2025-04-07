// Node.js module
const path = require("path");
// Generates HTML files injecting bundles
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Cleans the output directory before every build
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // App
  entry: "./app.ts",
  // Output bundle
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    // File extensions
    extensions: [".ts", ".js"],
    // Aliases
    alias: {
      "@controllers": path.resolve(__dirname, "controllers"),
      "@models": path.resolve(__dirname, "models"),
      "@services": path.resolve(__dirname, "services"),
      "@views": path.resolve(__dirname, "views"),
    },
  },
  module: {
    rules: [
      // Use of ts-loader to transpile .ts files
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // Use of style.loader and css-loader to process .css files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // Removes dist/ files before every build
    new CleanWebpackPlugin(),
    // Uses index.html as a template and injects the scripts and the end (bundle.js)
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  // Developer server
  devServer: {
    // Files from dist directory
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // Enables compression gzip (Useful for JS, CSS, JSON and HTML)
    compress: true,
    // Localhost port
    port: 8080,
    // Opens navigator automatically
    open: true,
    // Enables HMR (Hot Module Replacement)
    hot: true,
    // Shows errors
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    // Useful for SPA (Single Page Applications)
    historyApiFallback: true,
  },
};
