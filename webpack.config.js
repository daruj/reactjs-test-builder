/**
 * Created by damianaruj on 3/26/16.
 */

var path = require("path");
var grunt = require("grunt");
var webpack = require("webpack");

var pagesBase = './modules';

module.exports = {
    entry: grunt.file.expand({ cwd: pagesBase }, "*").reduce(function(map, page) {
        map[path.basename(page)] = './' + path.join(pagesBase, page) + '/main.jsx';
        return map;
    }, {}),
    output: {
        path: __dirname,
        filename: "./modules/[name]/app.js"
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader'}
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin()
    ]
};

