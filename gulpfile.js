//-----------------------------------------------------------------------------
// 必要なライブラリを読み込む
//-----------------------------------------------------------------------------
const { src, dest, watch, series, parallel } = require('gulp');
const rename = require('gulp-rename');
const del = require('gulp-clean');
const frontMatter = require('gulp-front-matter');
const layout = require('layout1');

const page = (done) => {

  const registLayout = (file) => {
    return `example/layout/${file.data.layout || 'default'}.ejs`;
  };  

  src(["example/**/*.ejs", "!example/layout/**/*"])
    .pipe(frontMatter({property: 'data'}))
    .pipe(layout.ejs(registLayout))
    .pipe(rename({'extname': ".html"}))
    .pipe(dest("public"));
  done();
}

const clean = (done) => {
  src("public/**/*")
  .pipe(del())
  done();
}

const copy = (done) => {
  src("browser/**/*.js")
    .pipe(dest("public/js"));
  done();
}

exports.build = series(
  clean,
  parallel(page, copy)
);