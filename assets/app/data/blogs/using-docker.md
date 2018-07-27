# Using Docker

## 什么是Docker

Docker利用现有的Linux容器技术，以不同方式将其封装及扩展
--主要是通过提供可以值的镜像，以及一个用户友好的接口
--来创建一套完整的容器创建及发布方案

Docker平台拥有两个不同部分
- 负责创建与运行容器的 Docker Engine
- 用来发布容器的云服务 Docker Hub

Docker的哲学经常用航运集装箱的比喻来解释，这或许能解释 Docker 名字的由来。

这个比喻大概是这样：

    运输货物时，要用到不同的运输工具，可能包括货车、叉车、起重机、火车和轮船。
    这意味着这些工具必须可以处理大小不一，运输需求各异的货物。
    以往这是一道复杂的工序，需要付出大量的人力、物力。
    联运集装箱的诞生为运输产业带来了一场革命。
    集装箱的大小有了统一标准，并且设计的出发点是能以最少的人力在不同的运输方式之间搬运。
    所有运输机械都为运送集装箱而设计。运输不同类型物品可以使用不同的集装箱。
    因此运输产业只需要专注于处理集装箱的运输及存储问题，而集装箱内的物品完全由生产商负责。
    
    Docker 的目的是把集装箱的标准化流程运用到IT行业中去。
    如今的典型系统可能包括Javascript框架、NoSQL数据库、消息队列、REST API，
    以及由各个不同编程语言所写的后端。
    而这个组合的全部或部分可能需要运行到不同的环境中，从开发者的笔记本电脑， 到公司内的测试集群，再到云端的生产环境。
    每个环境都存在差异，他们存在不同的操作系统和不同的程序库。我们需要付出巨大的人力来在不同环境之间移动这些应用。
    Docker容器简化了应用程序的移动，好比集装箱一样。
    开发人员只需专注开发，再也不用担心测试和发布时环境以及依赖关系带来的问题。
    运维部门只需专注于运行容器的核心问题。
    
    
## 安装Docker

Docker需要运行于64位的Linux系统上，内核版本需要大于3.10

macOS可以从`docker.com`下载到docker-ce版本安装使用

可以使用`homebrew`来安装

```
brew cask install docker
```

## 运行Docker

### images 镜像

docker镜像是一个构建好的docker环境，可以使用docker直接启动一个镜像

```
docker run debian
```

运行镜像会自动从`docker hub`下载对应的镜像，并运行

运行镜像会自动创建一个container

查看运行中的container：

```
docker ps
```

运行一个交互式镜像

```
docker run --rm -it gsmlg/phoenix
# -i interactive
# -t terminal
# --rm remove after run
```

当docker运行后会生成一个container
可以通过
```
docker ps -a
```
查看所有docker containers

删除无用的container
```
docker rm -v $(docker ps -aq -f status=exited)
```

### Docker 镜像构建与发布

#### Docker Registry

#### Dockerfile

#### push and pull


### 通过Docker Compose运行

### Docker Machine
