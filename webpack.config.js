const path = require('path');
const fs = require('fs');

const config = {
    mode: "production",
    entry: './src/PriorityQueue.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'PriorityQueue.js',
        library: 'priorityQueue',
        libraryTarget: 'umd'
    },
    target: 'node'
};

module.exports = config;
