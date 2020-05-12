集群在运行几个任务后，突然无法启动

排查过程
k3s 发现无法启动
手动启动k3s，发现docker没有启动
启动docker，启动k3s，发现无法启动，打印超长的错误栈
排查发现报错，too many open files

检查系统配置
# ulimit -n
1204

# # 设置
# ulimit -n 65535
65535


编辑系统文件 /etc/security/limits.conf ，以保证重启后生效
增加
*               soft    nofile            65535
*               hard    nofile            65535

如果需要不重启修改进程 ulimit， 需要在

/proc/<PID>/limits

中查看修改
