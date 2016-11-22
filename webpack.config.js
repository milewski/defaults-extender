const webpack = require('webpack');

module.exports = {
    entry: './source/Extender.js',
    output: {
        path: './distribution',
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'extend'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
