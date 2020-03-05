const path = require('path');

module.exports = {
    entry: './src/hooks.ts',
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                use: ['babel-loader'],
                include: path.resolve(__dirname, 'src'),
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    watchOptions: {
        poll: true
    }
};
