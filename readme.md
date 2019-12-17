1.  webpack 中因为配置额外的打包链接到 dist 目录
2.  eg:
    var CopyLinkWebpackPlugin = require('copy-links');

3.  
>> var webpackConfig = {
>>>> // ... 这里是其他配置 ...
>>>> plugins: [
>>>>>>>> new CopyLinkWebpackPlugin({
>>>>>>>>>>> to: __dirname + '/dist',
>>>>>>>>>>> from: __dirname + '/copy'
>>>>>>>> })
>>>> ]
>> };
