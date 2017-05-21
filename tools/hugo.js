const fs = require('fs');
const path = require('path');
const mkdirp = require('@fibjs/mkdirp');

const contentDir = path.join(__dirname, '../content');
const modulesDir = path.join(contentDir, 'module');
const objectsDir = path.join(contentDir, 'object');

if (!fs.exists(modulesDir)) {
  mkdirp(modulesDir);
}

if (!fs.exists(objectsDir)) {
  mkdirp(objectsDir);
}

const srcDir = path.join(__dirname, './.tmp');
const srcModulesDir = path.join(srcDir, 'module');
const srcObjectsDir = path.join(srcDir, 'object');

function copy(src, target, processor) {
  let files = fs.readdir(src);

  files = Array.from(files);
  for (const file of files) {
    console.log(file);
    let content = fs.readTextFile(path.join(src, file));
    if (processor) {
      content = processor(content);
    }
    fs.writeFile(path.join(target, file), content);
  }
}

copy(srcModulesDir, modulesDir);
copy(srcObjectsDir, objectsDir);
