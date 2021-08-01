#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  const content = fs.readFileSync(src);
  fs.writeFileSync(dest, content);
}

function copyDirToDest(srcDir, destDir) {
  try {
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
    });
  }
  catch {
    console.log(srcDir, " : dir error");
  }
}

// Init Project
let workingDest = path.resolve(process.cwd(), process.argv[2]);

fs.mkdirSync(workingDest);

// Copy Dirs
const copyDirs = ["app", "public", "resource", "src"];
const copyFiles = ["package.json", "webpack.config.js", "index.js"];

copyFiles.forEach((file) => {
  try {
    copyFile(path.resolve(__dirname, file), path.resolve(workingDest, file));
  }
  catch {
    console.log(file, " : file error");
  }
});

copyDirs.forEach((dir) => {
  fs.mkdirSync(path.resolve(workingDest, dir));
  copyDirToDest(path.resolve(__dirname, dir), path.resolve(workingDest, dir));
});
