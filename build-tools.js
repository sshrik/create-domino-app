const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  const content = fs.readFileSync(src);
  fs.writeFileSync(dest, content);
}

function copyDirToDest(srcDir, destDir) {
  const src = fs.readdirSync(srcDir);

  src.forEach((str) => {
    const source = srcDir + "/" + str;
    const destination = destDir + "/" + str;

    if(fs.lstatSync(source).isDirectory()) {
      fs.mkdirSync(destination);
      copyDirToDest(source, destination);
    }
    else {
      copyFile(source, destination);
    }
  })
}

// Init Project
let workingDest = path.resolve(__dirname, "../" + process.argv[2]);
fs.mkdirSync(workingDest);

// Copy Dirs
const copyDirs = ["app", "public", "resource", "src"];
const copyFiles = ["package.json", "webpack.config.js", "index.js"];

copyFiles.forEach((file) => {
  copyFile(file, workingDest + "/" + file);
});

copyDirs.forEach((dir) => {
  fs.mkdirSync(path.resolve(workingDest, dir));
  copyDirToDest(path.resolve(__dirname, dir), path.resolve(workingDest, dir));
});
