
## npm的问题

npm 安装包的版本控制可伸缩性的特性带来的依赖不确定性
导致经常出现问题

## 解决方案

### 使用git管理的问题

每次变更支持库都要涉及数千个文件的修改
需要git追踪大量依赖文件


Facebook面对同样的问题：
https://code.facebook.com/posts/1840075619545360

## Yarn

Yarn包管理器是由Facebook，Exponent，Google 以及 Tilde 合作提供的开源包管理器

Yarn是具有革命性的包管理工具，继承自npm，包含了npm的所有功能

- 极速
Yarn 缓存它下载的每个包，所以无需重复下载。它还并行化操作以最大化资源利用，所以安装时间比以往快。

- 超级安全。
Yarn 在每个安装包的代码执行前使用校验码验证包的完整性。

- 超级可靠。
Yarn 使用一个格式详尽但简洁的 lockfile 和一个精确的算法来安装，能够保证在一个系统上的运行的安装过程也会以同样的方式运行在其他系统上。


### 实现原理：

使用yarn.lock 来控制包版本，确定一致
yarn.lock 记录文件签名，以及URL，确定访问


### npm指令对应

yarn add [package]   ==   npm install —save [package]

yarn remove [package]   ==   npm uninstall —save [package]

yarn global add [package]   ==   npm install -g [package]

yarn global remove [package]   ==   npm uninstall -g [package]

















