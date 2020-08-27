## iOS 10.3.3

iOS 10.3.3 是Apple发布的最后的iOS 32bit版本

当前正好有一个废旧的 iPhone5c 便使用它来进行越狱


## 越狱步骤

### 准备越狱工具

下载h3lix，地址： https://h3lix.tihmstar.net

下载ipa，校验签名信息

下载cydia impactor， http://www.cydiaimpactor.com

### 进行越狱

连接iPhone到USB

打开cydia impactor

将h3lix拖动到cydia impactor

安装h3lix.ipa，会请求apple ID

通过apple ID签名并安装app到iPhone

安装成功后打开iPhone

允许描述文件

打开h3lix，运行越狱

越狱成功


## Cydia 应用商店

越狱成功后可以使用cydia应用商店安装应用

当前 iOS10 已经无法使用openSSH，需要安装dropbear才能使用ssh连接

连接到终端方法：

从bigboss源安装iOS Terminal，后打开app即可进入终端

打开终端

cydia使用的是`debian`的包管理系统，可以使用`dpkg`来查看和管理软件包

### dropbear安装

Cydia 默认商店没有dropbear，所以安装比较麻烦

方法有一下几种：

1. 自己编译， 可以参照 https://ivrodriguez.com/installing-dropbear-ssh-on-ios-10-3-3/

2. 下载安装，可以参考 https://www.reddit.com/r/jailbreak/comments/7mh516/tutorial_how_to_get_ssh_working_on_the_new_ios/

3. 添加cydia源，没有可以参考的

### Cydia 可用的应用

APP

- iOS Terminal
- Filza File Manager

CLI

- git
- BIND
- lighttpd
- Vi IMproved

## 越狱注意事项

每次重启iPhone都需要重新越狱

h3lix签名只能使用7天，每七天必须重新签名
