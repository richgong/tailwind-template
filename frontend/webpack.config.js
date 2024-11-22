const path = require('path');

module.exports = {
    entry: './src/index.js', // Your main React entry file
    output: {
        path: path.resolve(__dirname, '../app/static/js'), // Output to Flask's static folder
        filename: 'main.js', // Generated file name
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Handle JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpile with Babel
                },
            },
        ],
    },
    mode: 'production', // Use production mode for optimized builds
};
