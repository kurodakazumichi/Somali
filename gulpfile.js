//-----------------------------------------------------------------------------
// 必要なライブラリを読み込む
//-----------------------------------------------------------------------------
const { src, dest, watch, series, parallel } = require('gulp');
const rename = require('gulp-rename');
const del = require('gulp-clean');
const frontMatter = require('gulp-front-matter');
const layout = require('layout1');
const connect = require('gulp-connect');
const sass = require('gulp-sass');

//-----------------------------------------------------------------------------
// example以下にあるejsをhtmlに変換する
//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
// publicディレクトリをクリアする
//-----------------------------------------------------------------------------
const clean = (done) => {
  src("public/**/*")
  .pipe(del())
  done();
}

//-----------------------------------------------------------------------------
// browser以下にあるjsをpublic/jsにコピー
//-----------------------------------------------------------------------------
const copy = (done) => {
  src("browser/**/*.js")
    .pipe(dest("public/js"));
  done();
}

const js = (done) => {
  src("example/**/*.js")
    .pipe(dest("public"));
  done();
}

const css = (done) => {
  src("example/**/*.css")
    .pipe(dest("public"));
  done();
}

const scss = (done) => {
  src("example/**/*.scss")
    .pipe(sass())
    .pipe(dest("public"));
  done();
}

//-----------------------------------------------------------------------------
// 開発サーバーを起動する
//-----------------------------------------------------------------------------
const server = (done) => {
  connect.server({
    root: "./",
    livereload: true
  });
  done();
}

//-----------------------------------------------------------------------------
// public以下のファイルに変更があったらブラウザをリロードする
//-----------------------------------------------------------------------------
const reload = (done) => {
  src("public/**/*")
    .pipe(connect.reload());
  done();
}

exports.default = (done) => {
  server(done);
  watch("example/**/*.ejs", page);
  watch("browser/**/*.js", copy);
  watch("example/**/*.js", js);
  watch("example/**/*.css", css);
  watch("example/**/*.scss", scss);
  watch("public/**/*", reload);
}

exports.build = series(
  clean,
  parallel(page, copy, js, css, scss)
);