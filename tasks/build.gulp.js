module.exports = function (gulp) {

    var webpack = require('webpack-stream');
    var fs = require('fs');
    var path = require('path');
    var manifest = path.join(__dirname, '..', 'manifest.appcache');

    gulp.task('build:js', function(done) {
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
    
    gulp.task('build', ['build:js'], function(done) {
        fs.readFile(manifest, function(error, data){
            if (error) {
                return done(error);
            }
            data = data.toString().replace(/^\# Update:.+$/m, `# Update: ${new Date().toISOString()}`);
            fs.writeFile(manifest, data, 'utf-8', function(error){
                done(error);
            });
        });
    });

};
