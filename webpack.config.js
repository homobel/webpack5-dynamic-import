const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/main/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            app: [path.join(__dirname, 'src/main'), path.join(__dirname, 'src/foo')]
        }
    }
};
