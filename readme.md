1.  webpack 中因为配置额外的打包链接到 dist 目录
2.  eg:
    var CopyLinkWebpackPlugin = require('copy-links');

<<<<<<< HEAD
const CopyLink = require('copy-links')

plugins: [
    new CopyLink({
      arrLinks:['./../xxx.js'],
      name: "/dist"
    })
]
=======
3.  代码片段
```
var webpackConfig = {
    // ... 这里是引用配置 ...
    ...
    plugins: [
        new CopyLinkWebpackPlugin({
            to: __dirname + '/dist',
            from: __dirname + '/copy'
        })
    ]
};
```
>>>>>>> 16ab660749ac762e2cc8c4aaa4f7da1b5d3bf5e4
