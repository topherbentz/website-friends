const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        proxy: {
<<<<<<< HEAD
            '/get_matchups*': 'http://localhost:5000'
=======
            '/get_matchups': 'http://localhost:5000'
>>>>>>> master
        }
    }
});
