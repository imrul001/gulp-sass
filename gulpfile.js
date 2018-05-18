var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src("./app/scss/style.scss")
	.pipe(sass())
	.pipe(gulp.dest("./app/css")).pipe(browserSync.stream())
	.pipe(browserSync.stream());
})

gulp.task("serve", ['sass'], function(){
	browserSync.init({
		server : {
			baseDir: '/home/bs214/gulptest/app'
		},
		port: 3000
	});
	
	gulp.watch("./app/scss/style.scss", ["sass"]);
	gulp.watch("./app/css/style.css").on("change", browserSync.reload);
	// gulp.watch("*.html").on("change", browserSync.reload);
})

gulp.task('default', ['serve'])