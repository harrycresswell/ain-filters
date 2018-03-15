var gulp         = require('gulp');
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    del          = require('del');
    shell        = require('gulp-shell')
    //sourcemaps   = require('gulp-sourcemaps');


// Compile SCSS files to CSS
gulp.task('scss', function () {

    // Delete our old css files
    del(['static/css/**/*'])

    // Compile hashed css files
    gulp.src('src/scss/**/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(autoprefixer({browsers : ['last 20 versions']}))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/css')) // Write the renamed files
});

// Pipe JS to static folder
gulp.task('js', function () {
    del(['static/js/**/*'])
    gulp.src('src/js/**/*')
        .pipe(gulp.dest('static/js'))
});

// Watch asset folder for changes
gulp.task('watch', ['scss', 'js'], function () {
    gulp.watch('src/scss/**/*', ['scss']);
    gulp.watch('src/js/**/*', ['js']);
});

// Set watch as default task
gulp.task('default', ['watch']);

// Run all tasks ready for production
gulp.task('prod', ['scss', 'js']);

// Building the site in 'production mode' ready for deployment
gulp.task('build', shell.task([
  'rm -rf public',
  'gulp prod',
  'hugo'
]))
