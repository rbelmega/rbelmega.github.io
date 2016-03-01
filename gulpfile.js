var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var src = [
	"./node_modules/angular2/bundles/angular2-polyfills.js",
	"./node_modules/systemjs/dist/system.src.js",
	"./node_modules/rxjs/bundles/Rx.js",
	"./node_modules/angular2/bundles/angular2.dev.js",
	"./node_modules/markdown/lib/markdown.js",
	"./node_modules/angular2/bundles/router.dev.js"
];

gulp.task('default', ["compress"], function() {
	// place code for your default task here
});

gulp.task('compress', function() {
	return gulp.src(src)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest(""));
});