1. copy-link,webpack插件
2. 使用

const CopyLink = require('copy-links')

plugins: [
    new CopyLink({
      arrLinks:['./package-lock.json'],
      name: "/dist"
    })
]