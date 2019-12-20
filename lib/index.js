const fs = require('fs');
const path = require('path');

// 一个 JavaScript 命名函数。
function CopyLinkWebpackPlugin(options) {
  this.options = options || {};
}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
CopyLinkWebpackPlugin.prototype.apply = function(compiler) {
  var me = this;
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin('done', function() {
    console.log('我被调用了哦～～');
  });
  compiler.plugin('emit', function(
    compilation /* 处理 webpack 内部实例的特定数据。*/,
    callback
  ) {
    if (me.options) {
      console.log(me.options, '-=-=-=-=-=-');
      copyFolder(me.options.from, me.options.to);
      callback();
    }
  });
};

function copyFolder(from, to) {
  // 复制文件夹到指定目录
  let files = [];
  if (fs.existsSync(to)) {
    // 文件是否存在 如果不存在则创建
    files = fs.readdirSync(from);

    files.forEach(function(file, index) {
      var targetPath = from + '/' + file;
      var toPath = to + '/' + file;
      if (fs.statSync(targetPath).isDirectory()) {
        // 复制文件夹
        copyFolder(targetPath, toPath);
      } else {
        // 拷贝文件
        fs.copyFileSync(targetPath, toPath);
      }
    });
  } else {
    fs.mkdirSync(to);
    copyFolder(from, to);
  }
}

module.exports = CopyLinkWebpackPlugin;
