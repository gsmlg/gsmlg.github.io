### 简介

`Socket.io`曾经是websocket持久连接的唯一选择，具有最好的浏览器兼容性。
随着时间的推移，浏览器都已经支持websocket技术，这种持久连接库渐渐的淡出了。


### 依赖模块

```json
"debug": "~4.1.0",
"engine.io": "~3.4.0",
"has-binary2": "~1.0.2",
"socket.io-adapter": "~1.1.0",
"socket.io-client": "2.3.0",
"socket.io-parser": "~3.4.0"
```


#### 模块功能说明

- engine.io
Engine.IO是Socket.IO实现基于传输的跨浏览器/跨设备双向通信层。

- socket.io-adapter
用户管理用户和连接的默认适配器，如果启动socket.io cluster，可是使用socket.io-redis

- socket.io-client
socket.io客户端

- socket.io-parser
用JavaScript编写的符合socket.io-protocol版本4的socket.io编码器和解码器。 由socket.io和socket.io-client使用。



### 功能开发

#### 使用接入认证

实现方式是在建立连接的时候检查请求，可以同作配置功能来处理

```js

const authorization = (request, cb) => {
    console.log('==== athorization ====');
    const { headers } = request;
    const clientRequest = http.get({
        ...addr,
        rejectUnauthorized: false,
        headers: {
            cookie: headers.cookie,
        },
    }, (res) => {
        let buf = Buffer.from('');
        res.on('data', (b) => { buf = Buffer.concat([buf, b]); });
        res.on('end', (b) => {
            const s = buf.toString('utf-8');
            const d = JSON.parse(s);
            if (d.role) {
                cb(null, d.role);
            } else {
                cb(null);
            }
        });
    }).on('error', (e) => cb(e));
};

io.set('authorization', authorization);

```

同样也可以使用io.use来对请求做准入验证

```js

io.use((socket, next) => {
  const { headers } = socket.request;
  // do some check
  checkHeaderInfo(headers)
    .then(() => next())
    .catch((e) = new Error(e));
});

```

#### 连接复用与隔离

当多个应用需要复用一条连接时，我们需要配置相关的隔离来处里对应的业务

socket.io提供了两种方式做隔离

1. namespace
2. room

##### namespace

当前默认会有一个namespace，默认的namespace调用位置为

```js

const defaultNS = io.sockets || io.of('/');

```

每个namespace下都可以做单独的认证配置和创建自己的room

namespace可以在client控制

client控制方式：

```js

const socket = io('http://server.address', { path: 'socket' });
const nsSocket = socket.socket('/someNamespace');

```

##### room

每个用户默认会加入一个名称为自己连接的ID的room

只能够在server加入room，加入方式为:

```js

io.on('connection', (socket) => {
  socket.join('soom room', (room) => {
    console.log('join room success');
  });
});

```



### 官方文档

Socket.io [地址](https://github.com/socketio/socket.io/blob/master/docs/API.md)

Socket.io-client [地址](https://github.com/socketio/socket.io-client/blob/master/docs/API.md)
