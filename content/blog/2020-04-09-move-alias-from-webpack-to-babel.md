---
templateKey: blog-post
title: 使用Babel的来代替webpack别名
date: 2020-04-09T00:00:00.000Z
description:
author: Gao
---
昨天给项目添加单元测试，发现`import`有大量的missing

检查返现问题：

1. webpack中有大量的`alias`导致
2. webpack中有`define plugin`，导致全局变量丢失
3. webpack中有`provide plugin`，导致一些没有被引入的变量出错

进过一番调研，决定使用如下解决方式：

使用Babel的module resolver plugin来处理这个问题

所以，对整个项目做了一些调整

将原先的`.babelrc`文件更换为`babel.config.js`

添加babel插件`babel-plugin-module-resolver`,并将原先的webpack别名修改过来

删除了webpack的alias，添加了如下内容到babel.config.js，由于路径会和webpack相互交互，为了方便处理，所以使用了绝对路径

```js
    plugins: [
        [
            'module-resolver',
            {
                root: [rootPath, path.join(rootPath, '/assets/javascripts')],
                alias: {
                    plugins: path.join(zddiRoot, 'zddi/common/plugins'),
                    eve: path.join(zddiRoot, 'zddi/common/plugins/eve-raphael'),
                    raphael: path.join(zddiRoot, 'zddi/common/plugins/raphael/raphael.amd'),
                    i18n: `${zddiRoot}/i18n/i18n-data`,
                    common: path.join(zddiRoot, 'zddi/common'),
                    models: path.join(zddiRoot, 'zddi/common/models'),
                    views: path.join(zddiRoot, 'zddi/common/views'),
                    controller: path.join(zddiRoot, 'zddi/common/controller'),
                    utils: path.join(zddiRoot, 'zddi/common/utils'),
                    dashboard: path.join(zddiRoot, 'zddi/dashboard'),
                    address: path.join(zddiRoot, 'zddi/address'),
                    cloud: path.join(zddiRoot, 'zddi/cloud'),
                    am: path.join(zddiRoot, 'zddi/am'),
                    dns: path.join(zddiRoot, 'zddi/dns'),
                    secure: path.join(zddiRoot, 'zddi/secure'),
                    system: path.join(zddiRoot, 'zddi/system'),
                    jquery: path.join(zddiRoot, 'zddi/common/plugins/jquery'),
                    cell: path.join(zddiRoot, 'zddi/common/components/table/index'),
                },
            },
        ],
      ]
```

修改完成后发现问题，原先的define plugin的导入出了错误。
原因是由于template loader没有用babel处理导致的，为了方便，我改了provide plugin的引入点，做了路径指向

提交时发现问题，eslint无法通过

于是做了修改，增加了两个插件

- `eslint-plugin-jest`
- `eslint-import-resolver-babel-module`

修改配置后支持jest全局变量和使用babel module resolver来检查当前的包含关系







