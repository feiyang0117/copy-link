1. webpack 中因为配置额外的打包链接到 dist 目录
2. eg:
   var CopyLinkWebpackPlugin = require('copy-links');

var webpackConfig = {
// ... 这里是其他配置 ...
plugins: [
new CopyLinkWebpackPlugin({
to: **dirname + '/dist',
from: **dirname + '/copy'
})
};
