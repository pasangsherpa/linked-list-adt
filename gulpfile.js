var gulp = require('gulp'),
    pkg = require('./package.json'),
    plugins = require('gulp-load-plugins')(),
    config = pkg,
    banner = [
        '/*!',
        ' * <%= config.name %> - <%= config.description %>',
        ' * @version v<%= config.version %> - <%= config.today %>',
        ' * @link <%= config.homepage %>',
        ' * @author <%= config.author %>',
        ' * @license <%= config.license %>',
        ' */',
        ''
    ].join('\n');
config.today = (new Date()).toDateString();

gulp.task('default', function() {
    return gulp.src('src/' + pkg.name + '.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.header(banner, {
            config: config
        }))
        .pipe(gulp.dest('dist'))
        .pipe(plugins.uglify())
        .pipe(plugins.concat(pkg.name + '.min.js'))
        .pipe(plugins.header(banner, {
            config: config
        }))
        .pipe(gulp.dest('dist'));
});
