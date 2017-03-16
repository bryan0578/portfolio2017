/*
Gulp Workflow
* Make sure Node is installed or install Node
* Run npm init to create pakage.json
* Install Gulp npm install --save-dev gulp
* Install plugins for workflow
* browser-sync, gulp-sass, cssnano
*/
// Install gulp plugins
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache');

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  })
})
 
// Optimize Images
gulp.task('images', function() {
  gulp.src('development/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      	progressive: true, optimizationlevel: 7
      })))
    .pipe(gulp.dest('images'))
});

// Watch Files for changes
gulp.task('watch', function() {
  gulp.watch('/*.html', browserSync.reload);
	gulp.watch('/css/*.css', browserSync.reload);
	gulp.watch('/images/**/*.+(png|jpg|jpeg|gif|svg)');
});

gulp.task('default', ['watch', 'images', 'browserSync']);