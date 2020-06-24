(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"44a88b963953de541871":function(s,n){s.exports="<h3 id=\u7b80\u4ecb>\u7b80\u4ecb</h3> <p><code>Socket.io</code>\u66fe\u7ecf\u662fwebsocket\u6301\u4e45\u8fde\u63a5\u7684\u552f\u4e00\u9009\u62e9\uff0c\u5177\u6709\u6700\u597d\u7684\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u3002 \u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u6d4f\u89c8\u5668\u90fd\u5df2\u7ecf\u652f\u6301websocket\u6280\u672f\uff0c\u8fd9\u79cd\u6301\u4e45\u8fde\u63a5\u5e93\u6e10\u6e10\u7684\u6de1\u51fa\u4e86\u3002</p> <h3 id=\u4f9d\u8d56\u6a21\u5757>\u4f9d\u8d56\u6a21\u5757</h3> <pre class=hljs><code class=language-json>\"debug\": \"~4.1.0\",\n\"engine.io\": \"~3.4.0\",\n\"has-binary2\": \"~1.0.2\",\n\"socket.io-adapter\": \"~1.1.0\",\n\"socket.io-client\": \"2.3.0\",\n\"socket.io-parser\": \"~3.4.0\"</code></pre><h4 id=\u6a21\u5757\u529f\u80fd\u8bf4\u660e>\u6a21\u5757\u529f\u80fd\u8bf4\u660e</h4> <ul> <li><p>engine.io Engine.IO\u662fSocket.IO\u5b9e\u73b0\u57fa\u4e8e\u4f20\u8f93\u7684\u8de8\u6d4f\u89c8\u5668/\u8de8\u8bbe\u5907\u53cc\u5411\u901a\u4fe1\u5c42\u3002</p> </li> <li><p>socket.io-adapter \u7528\u6237\u7ba1\u7406\u7528\u6237\u548c\u8fde\u63a5\u7684\u9ed8\u8ba4\u9002\u914d\u5668\uff0c\u5982\u679c\u542f\u52a8socket.io cluster\uff0c\u53ef\u662f\u4f7f\u7528socket.io-redis</p> </li> <li><p>socket.io-client socket.io\u5ba2\u6237\u7aef</p> </li> <li><p>socket.io-parser \u7528JavaScript\u7f16\u5199\u7684\u7b26\u5408socket.io-protocol\u7248\u672c4\u7684socket.io\u7f16\u7801\u5668\u548c\u89e3\u7801\u5668\u3002 \u7531socket.io\u548csocket.io-client\u4f7f\u7528\u3002</p> </li> </ul> <h3 id=\u529f\u80fd\u5f00\u53d1>\u529f\u80fd\u5f00\u53d1</h3> <h4 id=\u4f7f\u7528\u63a5\u5165\u8ba4\u8bc1>\u4f7f\u7528\u63a5\u5165\u8ba4\u8bc1</h4> <p>\u5b9e\u73b0\u65b9\u5f0f\u662f\u5728\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u5019\u68c0\u67e5\u8bf7\u6c42\uff0c\u53ef\u4ee5\u540c\u4f5c\u914d\u7f6e\u529f\u80fd\u6765\u5904\u7406</p> <pre class=hljs><code class=language-js>\n<span class=hljs-keyword>const</span> authorization = <span class=hljs-function>(<span class=hljs-params>request, cb</span>) =&gt;</span> {\n    <span class=hljs-built_in>console</span>.log(<span class=hljs-string>'==== athorization ===='</span>);\n    <span class=hljs-keyword>const</span> { headers } = request;\n    <span class=hljs-keyword>const</span> clientRequest = http.get({\n        ...addr,\n        <span class=hljs-attr>rejectUnauthorized</span>: <span class=hljs-literal>false</span>,\n        <span class=hljs-attr>headers</span>: {\n            <span class=hljs-attr>cookie</span>: headers.cookie,\n        },\n    }, (res) =&gt; {\n        <span class=hljs-keyword>let</span> buf = Buffer.from(<span class=hljs-string>''</span>);\n        res.on(<span class=hljs-string>'data'</span>, (b) =&gt; { buf = Buffer.concat([buf, b]); });\n        res.on(<span class=hljs-string>'end'</span>, (b) =&gt; {\n            <span class=hljs-keyword>const</span> s = buf.toString(<span class=hljs-string>'utf-8'</span>);\n            <span class=hljs-keyword>const</span> d = <span class=hljs-built_in>JSON</span>.parse(s);\n            <span class=hljs-keyword>if</span> (d.role) {\n                cb(<span class=hljs-literal>null</span>, d.role);\n            } <span class=hljs-keyword>else</span> {\n                cb(<span class=hljs-literal>null</span>);\n            }\n        });\n    }).on(<span class=hljs-string>'error'</span>, (e) =&gt; cb(e));\n};\n\nio.set(<span class=hljs-string>'authorization'</span>, authorization);\n</code></pre><p>\u540c\u6837\u4e5f\u53ef\u4ee5\u4f7f\u7528io.use\u6765\u5bf9\u8bf7\u6c42\u505a\u51c6\u5165\u9a8c\u8bc1</p> <pre class=hljs><code class=language-js>\nio.use(<span class=hljs-function>(<span class=hljs-params>socket, next</span>) =&gt;</span> {\n  <span class=hljs-keyword>const</span> { headers } = socket.request;\n  <span class=hljs-comment>// do some check</span>\n  checkHeaderInfo(headers)\n    .then(<span class=hljs-function><span class=hljs-params>()</span> =&gt;</span> next())\n    .catch((e) = <span class=hljs-keyword>new</span> <span class=hljs-built_in>Error</span>(e));\n});\n</code></pre><h4 id=\u8fde\u63a5\u590d\u7528\u4e0e\u9694\u79bb>\u8fde\u63a5\u590d\u7528\u4e0e\u9694\u79bb</h4> <p>\u5f53\u591a\u4e2a\u5e94\u7528\u9700\u8981\u590d\u7528\u4e00\u6761\u8fde\u63a5\u65f6\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u76f8\u5173\u7684\u9694\u79bb\u6765\u5904\u91cc\u5bf9\u5e94\u7684\u4e1a\u52a1</p> <p>socket.io\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u505a\u9694\u79bb</p> <ol> <li>namespace</li> <li>room</li> </ol> <h5 id=namespace>namespace</h5> <p>\u5f53\u524d\u9ed8\u8ba4\u4f1a\u6709\u4e00\u4e2anamespace\uff0c\u9ed8\u8ba4\u7684namespace\u8c03\u7528\u4f4d\u7f6e\u4e3a</p> <pre class=hljs><code class=language-js>\n<span class=hljs-keyword>const</span> defaultNS = io.sockets || io.of(<span class=hljs-string>'/'</span>);\n</code></pre><p>\u6bcf\u4e2anamespace\u4e0b\u90fd\u53ef\u4ee5\u505a\u5355\u72ec\u7684\u8ba4\u8bc1\u914d\u7f6e\u548c\u521b\u5efa\u81ea\u5df1\u7684room</p> <p>namespace\u53ef\u4ee5\u5728client\u63a7\u5236</p> <p>client\u63a7\u5236\u65b9\u5f0f\uff1a</p> <pre class=hljs><code class=language-js>\n<span class=hljs-keyword>const</span> socket = io(<span class=hljs-string>'http://server.address'</span>, { <span class=hljs-attr>path</span>: <span class=hljs-string>'socket'</span> });\n<span class=hljs-keyword>const</span> nsSocket = socket.socket(<span class=hljs-string>'/someNamespace'</span>);\n</code></pre><h5 id=room>room</h5> <p>\u6bcf\u4e2a\u7528\u6237\u9ed8\u8ba4\u4f1a\u52a0\u5165\u4e00\u4e2a\u540d\u79f0\u4e3a\u81ea\u5df1\u8fde\u63a5\u7684ID\u7684room</p> <p>\u53ea\u80fd\u591f\u5728server\u52a0\u5165room\uff0c\u52a0\u5165\u65b9\u5f0f\u4e3a:</p> <pre class=hljs><code class=language-js>\nio.on(<span class=hljs-string>'connection'</span>, (socket) =&gt; {\n  socket.join(<span class=hljs-string>'soom room'</span>, (room) =&gt; {\n    <span class=hljs-built_in>console</span>.log(<span class=hljs-string>'join room success'</span>);\n  });\n});\n</code></pre><h3 id=\u5b98\u65b9\u6587\u6863>\u5b98\u65b9\u6587\u6863</h3> <p>Socket.io <a href=https://github.com/socketio/socket.io/blob/master/docs/API.md>\u5730\u5740</a></p> <p>Socket.io-client <a href=https://github.com/socketio/socket.io-client/blob/master/docs/API.md>\u5730\u5740</a></p> "}}]);