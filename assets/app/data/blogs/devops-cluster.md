最近配置了一个DevOps集群给前端使用，现在整理一下这个流程，和在做成碰到的问题

### 安装

#### 集群

由于要配置多台服务器，安装使用离线安装，来减轻现在的负担

下载好k3s和镜像包

- master:

```bash
cp ./k3s /usr/local/bin/
cp ./k3s-airgap-images-amd64.tar /var/lib/rancher/k3s/agent/images/

cat ./install.sh | \
INSTALL_K3S_SKIP_DOWNLOAD=true \
    sh -s - server \
    --cluster-domain=devops.local \
    --cluster-cidr=10.31.0.0/16 \
    --service-cidr=10.32.0.0/16 \
    --default-local-storage-path=/storage/volumes \
    --node-name=master \
    --docker
```

- backup:

```bash
mkdir -p /var/lib/rancher/k3s/agent/images/
cp ./k3s-airgap-images-amd64.tar /var/lib/rancher/k3s/agent/images/

export K3S_TOKEN="{server-token}"
export K3S_URL="https://{server-ip}:6443"

cat ./install.sh | \
INSTALL_K3S_SKIP_DOWNLOAD=true \
    sh -s - agent \
    --docker \
    --node-name=slave \
```

* ⚠️注意问题

- 安装好后集群运行有问题，发现是iptables设置问题处理方式
``` bash
# master
iptables -F && systemctl restart k3s
# slave
iptables -F && systemctl restart k3s-agent
```
如果服务重启或者网络重启，可能会导致问题，也需要这么处理
- 这里使用docker而没有使用containerd是因为网络环境有问题，rancher-agent无法运行导致的
- 安装完成后禁止了在master运行任务，防止master负荷过大导致集群瘫痪
`kubectl taint node mymasternode node-role.kubernetes.io/master:NoSchedule`

#### 安装Rancher

首先安装helm，下载到 `/usr/local/bin/helm` 

安装rancher

```shell
helm repo add rancher  https://releases.rancher.com/server-charts/latest
helm repo update
helm install rancher rancher-stable/rancher --namespace cattle-system
```

配置好域名证书后，正常访问


#### NFS

希望集群能够共享数据，所以增加了nfs存储，可以在节点之间共享数据

- 配置NFS服务器


方便管理，将所有export都放入一个目录，真正的目录都通过`--bind`来绑定

```shell
mkdir -p /export/volumes 
# 配置权限
chmod 777 -R /export

mount --bind /home/nfs-data /export/volumes
```

在/etc/fstab中添加

```fstab
/home/nfs-data    /export/volumes   none    bind  0  0
```

在`/etc/exports`中配置

```exports
/export/volumes 10.1.108.0/24(rw,nohide,subtree_check,insecure,all_squash,anonuid=0,async)

/export 10.1.0.0/16(ro,fsid=0,root_squash,no_subtree_check,hide)
```

#### 安装nfs-client-provisioner

使用helm安装nfs-client-provisioner，为集群提供动态存储

```shell
helm install -n kube-system nfs-client-provisioner --set nfs.server={nfs-server-ip} --set nfs.path=/volumes stable/nfs-client-provisioner --set storageClass.name=nfs
```

#### 安装Tekton

配置安装Tekton

前置工作已经完成，使用github上的项目来安装

下载目录下文件 `https://github.com/gsmlg/pipeline/tree/master/tektoncd`

直接安装即可

需要配置项目

- ssh-key
配置 known_hosts 和 ssh-privatekey

获取权限

这个项目中定义了一个pipeline，用于跑项目任务

在rancher和gitlab配置好eventlistener的触发URL，就可以自动运行当前的pipeline了


### 总结问题

过程中碰到 too many open files的问题，修改ulimit解决

测试网络和服务器不太稳定，经常连接不上，或者运行两个任务后，系统很卡，主要是虚拟平台给的性能严重不足

nfs服务器和集群机器之间网络有问题，导致无法共享存储，最后被迫使用了local-path，失去了共享存储的并行任务能力

碰到tekton升级0.12版本，更新了git资源到task来实现共享工作空间

