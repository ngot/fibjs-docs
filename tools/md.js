const path = require('path');
const fs = require('fs');
const co = require('coroutine');
const rmdirr = require('@fibjs/rmdirr');

const fibjsDir = path.join(__dirname, '../../fibjs');
const tmpDir = path.join(__dirname, '.tmp');
const xmlDir = path.join(fibjsDir, 'xml');
const docDir = path.join(fibjsDir, 'fibjs/include/ifs');

if (fs.exists(tmpDir)) {
  rmdirr(tmpDir);
}

fs.mkdir(tmpDir);

const cwd = process.cwd();

process.chdir(docDir);
process.run('doxygen');

process.chdir(tmpDir);
process.run('moxygen', [xmlDir]);

process.chdir(cwd);

process.run('fibjs', ['tools/hugo.js']);
