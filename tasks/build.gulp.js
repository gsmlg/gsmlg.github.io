module.exports = function (gulp) {

    var webpack = require('webpack-stream');

    gulp.task('build:js', function() {
        return gulp.src('assets/javascripts/application.js')
            .pipe(webpack({
                module: {
                    loaders: [
                        {
                            loader: 'es3ify'
                        },
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: 'babel',
                            query: {
                                presets: ['react', 'es2015', 'stage-0']
                            }
                        }
                    ]
                },
                devtool: 'source-map',
                // context: __dirname + '/assets',
                output: {
                    filename: 'bundle.js'
                }
            }))
            .pipe(gulp.dest('./'));
    });

};
