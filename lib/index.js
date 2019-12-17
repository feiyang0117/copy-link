const fs = require('fs');
const path = require('path');

function readDirAllFile(filePath) {
  let allFile = {};
  // 读取当前目录下的所有文件
  //readdirSync 同步处理文件 返回一个路径下边的文件数组
  let files = fs.readdirSync(filePath);
  for (const file of files) {
    let fileTruePath = path.join(filePath, file);
    //statSync 同步处理获取文件的信息 返回的是一个数组，参数是一个路径
    let stats = fs.statSync(fileTruePath);
    if (stats.isDirectory()) {
      allFile[file] = readDirAllFile(fileTruePath);
    } else {
      allFile[file] = null;
    }
  }
  return allFile;
}

// 一个 JavaScript 命名函数。
function CopyLinkWebpackPlugin(options) {}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
CopyLinkWebpackPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin('webpacksEventHook', function(
    compilation /* 处理 webpack 内部实例的特定数据。*/,
    callback
  ) {
    console.log('This is an example plugin!!!');

    // 功能完成后调用 webpack 提供的回调。
    callback();
  });
};
module.exports = CopyLinkWebpackPlugin;
