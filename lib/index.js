const fs = require('fs');
const path = require('path');

// 一个 JavaScript 命名函数。
var fs = require('fs');
function CopyLinkWebpackPlugin(options) {
  this.options = options || {};
}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
CopyLinkWebpackPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin('done', function() {
    console.log('我被调用了哦～～');
  });
  compiler.plugin('emit', function(
    compilation /* 处理 webpack 内部实例的特定数据。*/,
    callback
  ) {
    console.log('This is CopyLinkWebpackPlugin!!!');
    if (typeof options.arrLinks == 'array' && options.arrLinks.length > 0) {
      options.arrLinks.forEach(element => {
        var data = fs.readFileSync(element);
        console.log('=== CopyLinkWebpackPlugin dirname ===', options.name);
        fs.writeFileSync(data, options.name);
      });
    }

    callback();
  });
};
module.exports = CopyLinkWebpackPlugin;
