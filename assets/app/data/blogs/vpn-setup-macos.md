## 为macOS配置VPN

### 配置VPN服务器

搭建vpn服务

从系统仓库
安装`ipsec`
安装`xl2tpd`

在服务器上启动服务

配置好服务账户

```
systemctl restart ipsec
systemctl restart xl2tpd
```

### 配置VPN Client

从`Mac App Store`安装`Apple Configurator 2`

创建VPN描述文件

选择`l2tp`协议
配置*服务器地址、用户名、密码和共享密钥*

把描述文件安装到`macOS`的系统配置，`iOS`通过`airDrop`安装

安装完成即可连接vpn


### 配置macOS在VPN连接时的路由表

使用`[static-routes][https://github.com/gsmlg/static-routes]`的配置

路由表数据时使用maxmine公开的geoip数据库来进行配置

在`/etc/ppp/`目录配置`ip-up`,`ip-down`对应在VPN启动和停止时执行对应脚本

脚本中可以使用变量说明
```
$1 interface etc: ppp0
$2 none?
$3 ? 0
$4 client ip
$5 remote ip
$6 local gateway
```
