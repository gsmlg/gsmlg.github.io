(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./app/data/blogs/ios-jailbreak.md":function(i,p){i.exports="<h2 id=ios-10-3-3>iOS 10.3.3</h2> <p>iOS 10.3.3 是Apple发布的最后的iOS 32bit版本</p> <p>当前正好有一个废旧的 iPhone5c 便使用它来进行越狱</p> <h2 id=->越狱步骤</h2> <h3 id=->准备越狱工具</h3> <p>下载h3lix，地址： <a href=https://h3lix.tihmstar.net>https://h3lix.tihmstar.net</a></p> <p>下载ipa，校验签名信息</p> <p>下载cydia impactor， <a href=http://www.cydiaimpactor.com>http://www.cydiaimpactor.com</a></p> <h3 id=->进行越狱</h3> <p>连接iPhone到USB</p> <p>打开cydia impactor</p> <p>将h3lix拖动到cydia impactor</p> <p>安装h3lix.ipa，会请求apple ID</p> <p>通过apple ID签名并安装app到iPhone</p> <p>安装成功后打开iPhone</p> <p>允许描述文件</p> <p>打开h3lix，运行越狱</p> <p>越狱成功</p> <h2 id=cydia->Cydia 应用商店</h2> <p>越狱成功后可以使用cydia应用商店安装应用</p> <p>当前 iOS10 已经无法使用openSSH，需要安装dropbear才能使用ssh连接</p> <p>连接到终端方法：</p> <p>从bigboss源安装iOS Terminal，后打开app即可进入终端</p> <p>打开终端</p> <p>cydia使用的是<code>debian</code>的包管理系统，可以使用<code>dpkg</code>来查看和管理软件包</p> <h3 id=dropbear->dropbear安装</h3> <p>Cydia 默认商店没有dropbear，所以安装比较麻烦</p> <p>方法有一下几种：</p> <ol> <li><p>自己编译， 可以参照 <a href=https://ivrodriguez.com/installing-dropbear-ssh-on-ios-10-3-3/ >https://ivrodriguez.com/installing-dropbear-ssh-on-ios-10-3-3/</a></p> </li> <li><p>下载安装，可以参考 <a href=https://www.reddit.com/r/jailbreak/comments/7mh516/tutorial_how_to_get_ssh_working_on_the_new_ios/ >https://www.reddit.com/r/jailbreak/comments/7mh516/tutorial_how_to_get_ssh_working_on_the_new_ios/</a></p> </li> <li><p>添加cydia源，没有可以参考的</p> </li> </ol> <h3 id=cydia->Cydia 可用的应用</h3> <p>APP</p> <ul> <li>iOS Terminal</li> <li>Filza File Manager</li> </ul> <p>CLI</p> <ul> <li>git</li> <li>BIND</li> <li>lighttpd</li> <li>Vi IMproved</li> </ul> <h2 id=->越狱注意事项</h2> <p>每次重启iPhone都需要重新越狱</p> <p>h3lix签名只能使用7天，每七天必须重新签名</p> "}}]);