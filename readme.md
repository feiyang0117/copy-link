1. webpack 中因为配置额外的打包链接到 dist 目录
2. eg:
   var CopyLink = require('copy-link');

var webpackConfig = {
// ... 这里是其他配置 ...
plugins: [
new CopyLink(['https:www.xxx1.com','https:www.xxx2.com'...])
]
};
