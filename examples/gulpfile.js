const { src, dest } = require('gulp');
const dockerNotify = require('../');

function exampleTask() {
  return src('test/*.txt')
    .pipe(dockerNotify("Build completed", "<%= file.relative %>"))
    .pipe(dest('dest/'));
}

exports.default = exampleTask;
