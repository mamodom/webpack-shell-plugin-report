var path = require('path');
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    entry: './index.js',
    output:{
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /\/node_modules/ }
        ]
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: [
                'echo "world" > ./hello.txt'
            ]
        })
    ]
};