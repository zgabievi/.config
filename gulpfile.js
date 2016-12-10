const gulp = require('gulp');
const sassdoc = require('sassdoc');
const mocha = require('gulp-mocha');

gulp.task('default', () =>
	gulp.src('./test/test_sass.js')
		.pipe(mocha())
		.once('error', () => {
			process.exit(1);
		})
		.once('end', () => {
			process.exit();
		})
);

gulp.task('sassdoc', () => {
	return gulp.src(['_config.scss', './mixins/**.scss', './functions/*.scss'])
		.pipe(sassdoc({
			dest: 'gh-pages',
			verbose: true,
			display: {
				access: ['public', 'private'],
				alias: true,
				watermark: true,
			},
			groups: {
				'undefined': 'sass-config'
			},
			basePath: 'http://zgabievi.me/sass-config/',
		}))
});
