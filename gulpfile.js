var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('watch', function(){
  gulp.watch('./react/**/*', ['build']);
  gulp.watch('./public/css/**/*', ['sass']);
});

gulp.task('build', function(){
  var b = browserify({
    entries: 'react/app.jsx',
    debug: true,
    transform: [["babelify", { "presets": ["react"] }]]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      // We'll uncomment these later
      //.pipe(uglify())
      //.on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function(){
  return gulp.src('./public/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('dev-env', function(){
  return process.env.NODE_ENV = 'development';
});

gulp.task('prod-env', function(){
  return process.env.NODE_ENV = 'production';
});

gulp.task('run', function(){
  const forbidden = ['react', 'node_modules', 'public'];
  nodemon({
    script: './bin/www',
    ext: 'js',
    ignore: forbidden
  })
})

gulp.task('default', ['build', 'watch', 'dev-env', 'run']);
