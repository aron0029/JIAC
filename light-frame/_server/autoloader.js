// Copyright: Thomas Frank, Node Hill 2020
// MIT-licensed

const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const www = process.argv[2] || 'www';
const path = require('path');

// clientside code
function load() {
  let scripts = 'rfiles'.map(x => {
    let s = document.createElement('script');
    s.src = x;
    s.onload = () => {
      scripts.length && document.body.append(scripts.shift());
    };
    return s;
  });
  document.body.append(scripts.shift());
}

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

module.exports = async function scripts() {
  let files = (await getFiles(path.resolve('./',www,'js'))).filter(x => x.slice(-3) === '.js');
  let content = files.map(x => fs.readFileSync(x, 'utf-8'));
  let error, tries = 0;
  do {
    error = null;
    for (let i = 1; i <= files.length; i++) {
      try {
        eval('class Base{}\n' + content.slice(0, i).join(''));
      }
      catch (e) {
        error = e;
        content.push(content.splice(i - 1, 1)[0]);
        files.push(files.splice(i - 1, 1)[0]);
        break;
      }
    }
    tries++;
  } while (tries < 100 && error && (error + '').includes('is not defined'));
  files.unshift(
    path.sep + www + path.sep + 'js/diffDom.js',
    path.sep + www + path.sep + 'js/displayErrors.js',
    path.sep + www + path.sep + 'js/libs/jquery.js',
    path.sep + www + path.sep + 'js/libs/popper.js',
    path.sep + www + path.sep + 'js/libs/bootstrap.js',
    path.sep + www + path.sep + 'js/Base.js'
  );
  files.push(path.sep + www + path.sep + 'js/init.js');
  files = files.map(x => '/' + x.split(path.sep + www + path.sep)[1]);
  let loadFunc = load + '';
  loadFunc = loadFunc.split("'rfiles'").join(JSON.stringify(files), '', '  ');
  loadFunc = '(()=> {' + loadFunc + ';load()})();';
  return loadFunc;
}