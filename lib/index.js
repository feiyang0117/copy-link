// 一个 JavaScript 命名函数。
var fs = require("fs");
function CopyLinkWebpackPlugin(options) {
  this.options = options || {};
}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
CopyLinkWebpackPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin('webpacksEventHook', function(
    compilation /* 处理 webpack 内部实例的特定数据。*/,
    callback
  ) {
    console.log('This is CopyLinkWebpackPlugin!!!');
    if(typeof options.arrLinks == 'array' && options.arrLinks.length>0) {
      options.arrLinks.forEach(element => {
        var data = fs.readFileSync(element)
        fs.writeFileSync(data, options.name);
        console.log("=== CopyLinkWebpackPlugin dirname ===", options.name)
      });
    }
  
    callback();
  });
};
module.exports = CopyLinkWebpackPlugin;
