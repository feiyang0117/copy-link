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
