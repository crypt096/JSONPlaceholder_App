const path = require("path");

console.log(path.resolve(__dirname, 'dist'));

module.exports = {
    entry: "./public/js/index.js",
    devtool: "cheap-module-eval-source-map",
    output:
        {
            filename: "bundle.js",
            publicPath: "dist/"
        },
    watch: true,

    module: {
        rules: [
            {test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}]},
            {test: /\.(jpg|png|gif)$/, use: [{loader: 'file-loader?name=[name].[ext]'}]}
        ]
    }
};