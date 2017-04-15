# webpack-shell-plugin-report

Here is my `webpack.config.js`:

```
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
```

By running `npm run build` or `$(npm bin)/webpack`, the expected behaviour should be that the file `hello.txt` is created with the contents `world`.
However the current behaviour is that webpack echoes to the console the string `"world" > ./hello.txt`.
