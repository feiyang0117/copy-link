<<<<<<< HEAD
1. webpack中因为配置额外的打包链接到dist目录
2. eg: 
var CopyLink = require('copy-link');

var webpackConfig = {
  // ... 这里是其他配置 ...
  plugins: [
    new CopyLink(['https:www.xxx1.com','https:www.xxx2.com'...])
  ]
};
=======
1. copy-link,webpack插件
2. 使用

const CopyLink = require('copy-links')

plugins: [
    new CopyLink({
      arrLinks:['./package-lock.json'],
      name: "/dist"
    })
]
>>>>>>> 656f6dc6646562e6cdd44a17780d1e9405dcb97c
