declare var __dirname: any;

export default {
    entry: './built/src/index.js',
    output: {
        filename: 'mvvm.js',
        path: __dirname + '/output'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}