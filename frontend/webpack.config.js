const path = require('path');

module.exports = {
    entry: './src/index.tsx', // Your main React entry file
    output: {
        path: path.resolve(__dirname, '../static/js'), // Output to Flask's static folder
        filename: 'main.js', // Generated file name
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Add `.tsx` and `.ts` extensions
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Match `.ts` and `.tsx` files
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    mode: 'production', // Use production mode for optimized builds
};
