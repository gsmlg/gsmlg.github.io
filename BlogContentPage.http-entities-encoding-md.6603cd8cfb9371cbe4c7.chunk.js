(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1ccebbf0735471e2295d":function(t,e,n){"use strict";n.r(e),e.default=n.p+"f317eb766ab0408ed8247576f4ed1496.jpg"},"68d47282370d24f87727":function(t,e,n){var i=n("302492d1afd5e0e000f5"),d=n("1ccebbf0735471e2295d"),a=n("ece744c1ad18e0c2f74a"),l=n("87ec9d1ac2c2b203bd0c"),r="<h2 id=\u5b9e\u4f53\u548c\u7f16\u7801>\u5b9e\u4f53\u548c\u7f16\u7801</h2> <p>\u62a5\u6587\u662f\u7bb1\u5b50\uff0c\u5b9e\u4f53\u662f\u8d27\u7269</p> <ul> <li>Example</li> </ul> <pre class=hljs><code class=language-http>http/1.0 200 ok\nserver: GWS\nContent-Type: text/plain\nContent-length: 18\n\nHi! I'm a message!</code></pre><p>\u4eceContent-type\u5f00\u59cb\u5230\u7ed3\u675f\u90fd\u662f\u5b9e\u4f53\uff0c header\u90e8\u5206\u662f\u5b9e\u4f53\u9996\u90e8\uff0c body\u90e8\u5206\u662f\u5b9e\u4f53\u4e3b\u4f53</p> <p>HTTP\u5b9e\u4f53\u9996\u90e8\u63cf\u8ff0\u4e86HTTP\u62a5\u6587\u7684\u5185\u5bb9\u3002 HTTP/1.1 \u7248\u5b9a\u4e49\u4e86\u4ee5\u4e0b 10 \u4e2a\u57fa\u672c\u5b57\u4f53\u9996\u90e8\u5b57\u6bb5\u3002</p> <ul> <li>Content-Type \u5b9e\u4f53\u4e2d\u6240\u627f\u8f7d\u5bf9\u8c61\u7684\u7c7b\u578b\u3002</li> <li>Content-Length \u6240\u4f20\u9001\u5b9e\u4f53\u4e3b\u4f53\u7684\u957f\u5ea6\u6216\u5927\u5c0f\u3002</li> <li>Content-Language \u4e0e\u6240\u4f20\u9001\u5bf9\u8c61\u6700\u76f8\u914d\u7684\u4eba\u7c7b\u8bed\u8a00\u3002</li> <li>Content-Encoding \u5bf9\u8c61\u6570\u636e\u6240\u505a\u7684\u4efb\u610f\u53d8\u6362(\u6bd4\u5982\uff0c\u538b\u7f29)\u3002</li> <li>Content-Location \u4e00\u4e2a\u5907\u7528\u4f4d\u7f6e\uff0c\u8bf7\u6c42\u65f6\u53ef\u901a\u8fc7\u5b83\u83b7\u5f97\u5bf9\u8c61\u3002</li> <li>Content-Range \u5982\u679c\u8fd9\u662f\u90e8\u5206\u5b9e\u4f53\uff0c\u8fd9\u4e2a\u9996\u90e8\u8bf4\u660e\u5b83\u662f\u6574\u4f53\u7684\u54ea\u4e2a\u90e8\u5206\u3002</li> <li>Content-MD5 \u5b9e\u4f53\u4e3b\u4f53\u5185\u5bb9\u7684\u6821\u9a8c\u548c\u3002</li> <li>Last-Modified \u6240\u4f20\u8f93\u5185\u5bb9\u5728\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u6216\u6700\u540e\u4fee\u6539\u7684\u65e5\u671f\u65f6\u95f4\u3002</li> <li>Expires \u5b9e\u4f53\u6570\u636e\u5c06\u8981\u5931\u6548\u7684\u65e5\u671f\u65f6\u95f4\u3002</li> <li>Allow \u8be5\u8d44\u6e90\u6240\u5141\u8bb8\u7684\u5404\u79cd\u8bf7\u6c42\u65b9\u6cd5\uff0c\u4f8b\u5982\uff0cGET \u548c HEAD\u3002</li> <li>ETag \u8fd9\u4efd\u6587\u6863\u7279\u5b9a\u5b9e\u4f8b(\u53c2\u89c1 15.7 \u8282)\u7684\u552f\u4e00\u9a8c\u8bc1\u7801\u3002ETag \u9996\u90e8\u6ca1\u6709\u6b63\u5f0f\u5b9a\u4e49\u4e3a\u5b9e \u4f53\u9996\u90e8\uff0c\u4f46\u5b83\u5bf9\u8bb8\u591a\u6d89\u53ca\u5b9e\u4f53\u7684\u64cd\u4f5c\u6765\u8bf4\uff0c\u90fd\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u9996\u90e8\u3002</li> <li>Cache-Control \u6307\u51fa\u5e94\u8be5\u5982\u4f55\u7f13\u5b58\u8be5\u6587\u6863\u3002\u548c ETag \u9996\u90e8\u7c7b\u4f3c\uff0cCache-Control \u9996\u90e8\u4e5f\u6ca1\u6709\u6b63 \u5f0f\u5b9a\u4e49\u4e3a\u5b9e\u4f53\u9996\u90e8\u3002</li> </ul> <h3 id=\u786e\u5b9a\u5b9e\u4f53\u4e3b\u4f53\u957f\u5ea6\u7684\u89c4\u5219>\u786e\u5b9a\u5b9e\u4f53\u4e3b\u4f53\u957f\u5ea6\u7684\u89c4\u5219</h3> <ol> <li>\u5982\u679c\u7279\u5b9a\u7684 HTTP \u62a5\u6587\u7c7b\u578b\u4e2d\u4e0d\u5141\u8bb8\u5e26\u6709\u4e3b\u4f53\uff0c\u5c31\u5ffd\u7565 Content-Length \u9996 \u90e8\uff0c\u5b83\u662f\u5bf9(\u6ca1\u6709\u5b9e\u9645\u53d1\u9001\u51fa\u6765\u7684)\u4e3b\u4f53\u8fdb\u884c\u8ba1\u7b97\u7684\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cContent- Length \u9996\u90e8\u662f\u63d0\u793a\u6027\u7684\uff0c\u5e76\u4e0d\u8bf4\u660e\u5b9e\u9645\u7684\u4e3b\u4f53\u957f\u5ea6\u3002(\u8003\u8651\u4e0d\u5468\u7684 HTTP \u5e94\u7528 \u7a0b\u5e8f\u4f1a\u8ba4\u4e3a\u6709\u4e86 Content-Length \u5c31\u6709\u4e3b\u4f53\u5b58\u5728\uff0c\u8fd9\u6837\u5c31\u4f1a\u51fa\u95ee\u9898\u3002)</li> </ol> <p>\u6700\u91cd\u8981\u7684\u4f8b\u5b50\u5c31\u662f HEAD \u54cd\u5e94\u3002HEAD \u65b9\u6cd5\u8bf7\u6c42\u670d\u52a1\u5668\u53d1\u9001\u7b49\u4ef7\u7684 GET \u8bf7 \u6c42\u4e2d\u4f1a\u51fa\u73b0\u7684\u9996\u90e8\uff0c\u4f46\u4e0d\u8981\u5305\u62ec\u4e3b\u4f53\u3002\u56e0\u4e3a\u5bf9 GET \u7684\u54cd\u5e94\u4f1a\u5e26\u6709 Content- Length \u9996\u90e8\uff0c\u6240\u4ee5 HEAD \u54cd\u5e94\u91cc\u9762\u4e5f\u6709;\u4f46\u548c GET \u54cd\u5e94\u4e0d\u540c\u7684\u662f\uff0cHEAD \u54cd\u5e94\u4e2d\u4e0d\u4f1a\u6709\u4e3b\u4f53\u30021XX\u3001204 \u4ee5\u53ca 304 \u54cd\u5e94\u4e5f\u53ef\u4ee5\u6709\u63d0\u793a\u6027\u7684 Content- Length \u9996\u90e8\uff0c\u4f46\u662f\u4e5f\u90fd\u6ca1\u6709\u5b9e\u4f53\u4e3b\u4f53\u3002\u90a3\u4e9b\u89c4\u5b9a\u4e0d\u80fd\u5e26\u6709\u5b9e\u4f53\u4e3b\u4f53\u7684\u62a5\u6587\uff0c \u4e0d\u7ba1\u5e26\u6709\u4ec0\u4e48\u9996\u90e8\u5b57\u6bb5\uff0c\u90fd\u5fc5\u987b\u5728\u9996\u90e8\u4e4b\u540e\u7684\u7b2c\u4e00\u4e2a\u7a7a\u884c\u7ec8\u6b62\u3002</p> <ol start=2> <li><p>\u5982\u679c\u62a5\u6587\u4e2d\u542b\u6709\u63cf\u8ff0\u4f20\u8f93\u7f16\u7801\u7684 Transfer-Encoding \u9996\u90e8(\u4e0d\u91c7\u7528\u9ed8\u8ba4\u7684 HTTP\u201c\u6052\u7b49\u201d\u7f16\u7801)\uff0c\u90a3\u5b9e\u4f53\u5c31\u5e94\u7531\u4e00\u4e2a\u79f0\u4e3a\u201c\u96f6\u5b57\u8282\u5757\u201d(zero-byte chunk) \u7684\u7279\u6b8a\u6a21\u5f0f\u7ed3\u675f\uff0c\u9664\u975e\u62a5\u6587\u5df2\u7ecf\u56e0\u8fde\u63a5\u5173\u95ed\u800c\u7ed3\u675f\u3002\u6211\u4eec\u5c06\u5728\u672c\u7ae0\u540e\u9762\u8ba8\u8bba\u4f20 \u8f93\u7f16\u7801\u548c\u5206\u5757\u7f16\u7801\u3002</p> </li> <li><p>\u5982\u679c\u62a5\u6587\u4e2d\u542b\u6709 Content-Length \u9996\u90e8(\u5e76\u4e14\u62a5\u6587\u7c7b\u578b\u5141\u8bb8\u6709\u5b9e\u4f53\u4e3b\u4f53)\uff0c\u800c\u4e14\u6ca1\u6709\u975e\u6052\u7b49\u7684 Transfer-Encoding \u9996\u90e8\u5b57\u6bb5\uff0c\u90a3\u4e48 Content-Length \u7684\u503c\u5c31\u662f\u4e3b\u4f53\u7684\u957f\u5ea6\u3002\u5982\u679c\u6536\u5230\u7684\u62a5\u6587\u4e2d\u65e2\u6709 Content-Length \u9996\u90e8\u5b57\u6bb5\u53c8\u6709\u975e\u6052\u7b49\u7684 Transfer-Encoding \u9996\u90e8\u5b57\u6bb5\uff0c\u90a3\u5c31\u5fc5\u987b\u5ffd\u7565 Content-Length\uff0c\u56e0\u4e3a \u4f20\u8f93\u7f16\u7801\u4f1a\u6539\u53d8\u5b9e\u4f53\u4e3b\u4f53\u7684\u8868\u793a\u548c\u4f20\u8f93\u65b9\u5f0f(\u56e0\u6b64\u53ef\u80fd\u5c31\u4f1a\u6539\u53d8\u4f20\u8f93\u7684\u5b57\u8282\u6570</p> </li> <li><p>\u5982\u679c\u62a5\u6587\u4f7f\u7528\u4e86 multipart/byteranges(\u591a\u90e8\u5206 / \u5b57\u8282\u8303\u56f4)\u5a92\u4f53\u7c7b\u578b\uff0c\u5e76\u4e14\u6ca1\u6709\u7528 Content-Length \u9996\u90e8\u6307\u51fa\u5b9e\u4f53\u4e3b\u4f53\u7684\u957f\u5ea6\uff0c\u90a3\u4e48\u591a\u90e8\u5206\u62a5\u6587\u4e2d\u7684\u6bcf\u4e2a\u90e8 \u5206\u90fd\u8981\u8bf4\u660e\u5b83\u81ea\u5df1\u7684\u5927\u5c0f\u3002\u8fd9\u79cd\u591a\u90e8\u5206\u7c7b\u578b\u662f\u552f\u4e00\u7684\u4e00\u79cd\u81ea\u5b9a\u754c\u7684\u5b9e\u4f53\u4e3b\u4f53\u7c7b \u578b\uff0c\u56e0\u6b64\u9664\u975e\u53d1\u9001\u65b9\u77e5\u9053\u63a5\u6536\u65b9\u53ef\u4ee5\u89e3\u6790\u5b83\uff0c\u5426\u5219\u5c31\u4e0d\u80fd\u53d1\u9001\u8fd9\u79cd\u5a92\u4f53\u7c7b\u578b\u3002</p> <ul> <li>\u56e0\u4e3a Range \u9996\u90e8\u53ef\u80fd\u4f1a\u88ab\u4e0d\u7406\u89e3\u591a\u90e8\u5206 / \u5b57\u8282\u8303\u56f4\u7684\u66f4\u539f\u59cb\u7684\u4ee3\u7406\u6240\u8f6c\u53d1\uff0c\u6240\u4ee5\u5982\u679c\u53d1\u9001\u65b9\u4e0d\u80fd\u786e \u5b9a\u63a5\u6536\u65b9\u662f\u5426\u7406\u89e3\u8fd9\u79cd\u81ea\u5b9a\u754c\u7684\u683c\u5f0f\u7684\u8bdd\uff0c\u5c31\u5fc5\u987b\u7528\u672c\u8282\u7684\u65b9\u6cd5(1)\u3001(3)\u6216(5)\u6765\u5bf9\u62a5\u6587\u5b9a\u754c\u3002</li> </ul> </li> <li><p>\u5982\u679c\u4e0a\u9762\u7684\u89c4\u5219\u90fd\u4e0d\u5339\u914d\uff0c\u5b9e\u4f53\u5c31\u5728\u8fde\u63a5\u5173\u95ed\u7684\u65f6\u5019\u7ed3\u675f\u3002\u5b9e\u9645\u4e0a\uff0c\u53ea\u6709\u670d\u52a1 \u5668\u53ef\u4ee5\u4f7f\u7528\u8fde\u63a5\u5173\u95ed\u6765\u6307\u793a\u62a5\u6587\u7684\u7ed3\u675f\u3002\u5ba2\u6237\u7aef\u4e0d\u80fd\u7528\u5173\u95ed\u8fde\u63a5\u6765\u6307\u793a\u5ba2\u6237\u7aef</p> <ul> <li>\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528\u534a\u5173\u95ed\uff0c\u4e5f\u5c31\u662f\u53ea\u628a\u8fde\u63a5\u7684\u8f93\u51fa\u7aef\u5173\u95ed\uff0c\u4f46\u5f88\u591a\u670d\u52a1\u5668\u5e94\u7528\u7a0b\u5e8f\u8bbe\u8ba1\u7684\u65f6\u5019\u6ca1\u6709\u8003\u8651 \u5230\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f1a\u628a\u534a\u5173\u95ed\u5f53\u4f5c\u5ba2\u6237\u7aef\u8981\u4ece\u670d\u52a1\u5668\u65ad\u5f00\u8fde\u63a5\u6765\u5904\u7406\u3002HTTP \u6ca1\u6709\u5bf9\u8fde\u63a5\u7ba1\u7406\u8fdb\u884c\u826f \u597d\u7684\u89c4\u8303\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1\u7b2c 4 \u7ae0\u3002</li> </ul> </li> </ol> <h3 id=\u5a92\u4f53\u7c7b\u578b\u548c\u5b57\u7b26\u96c6>\u5a92\u4f53\u7c7b\u578b\u548c\u5b57\u7b26\u96c6</h3> <p>Content-Type \u9996\u90e8\u5b57\u6bb5\u8bf4\u660e\u4e86\u5b9e\u4f53\u4e3b\u4f53\u7684 MIME \u7c7b\u578b\u3002 MIME \u7c7b\u578b\u662f\u6807\u51c6\u5316\u7684\u540d\u5b57\uff0c\u7528\u4ee5\u8bf4\u660e\u4f5c\u4e3a\u8d27\u7269\u8fd0\u8f7d\u5b9e\u4f53\u7684\u57fa\u672c\u5a92\u4f53\u7c7b\u578b\u3002 \u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528 MIME \u7c7b\u578b\u6765\u89e3\u91ca\u548c\u5904\u7406\u5176 \u5185\u5bb9\u3002</p> <p>Content-Type \u7684\u503c\u662f\u6807\u51c6\u5316\u7684 MIME \u7c7b\u578b\uff0c\u90fd\u5728\u4e92\u8054\u7f51\u53f7\u7801\u5206\u914d\u673a\u6784(Internet Assigned Numbers Authority\uff0c\u7b80\u79f0 IANA)\u4e2d\u6ce8\u518c\u3002 MIME \u7c7b\u578b\u7531\u4e00\u4e2a\u4e3b\u5a92\u4f53\u7c7b \u578b(\u6bd4\u5982:text\u3001image \u6216 audio \u7b49)\u540e\u9762\u8ddf\u4e00\u6761\u659c\u7ebf\u4ee5\u53ca\u4e00\u4e2a\u5b50\u7c7b\u578b\u7ec4\u6210\uff0c\u5b50\u7c7b \u578b\u7528\u4e8e\u8fdb\u4e00\u6b65\u63cf\u8ff0\u5a92\u4f53\u7c7b\u578b\u3002</p> <h3 id=\u5185\u5bb9\u7f16\u7801>\u5185\u5bb9\u7f16\u7801</h3> <p><img src="+i(d)+' alt=""></p> <h4 id=\u5185\u5bb9\u7f16\u7801\u7c7b\u578b>\u5185\u5bb9\u7f16\u7801\u7c7b\u578b</h4> <p>HTTP \u5b9a\u4e49\u4e86\u4e00\u4e9b\u6807\u51c6\u7684\u5185\u5bb9\u7f16\u7801\u7c7b\u578b\uff0c\u5e76\u5141\u8bb8\u7528\u6269\u5c55\u7f16\u7801\u7684\u5f62\u5f0f\u589e\u6dfb\u66f4\u591a\u7684\u7f16\u7801\u3002 \u7531\u4e92\u8054\u7f51\u53f7\u7801\u5206\u914d\u673a\u6784(IANA)\u5bf9\u5404\u79cd\u7f16\u7801\u8fdb\u884c\u6807\u51c6\u5316\uff0c\u5b83\u7ed9\u6bcf\u4e2a\u5185\u5bb9\u7f16\u7801\u7b97\u6cd5\u5206 \u914d\u4e86\u552f\u4e00\u7684\u4ee3\u53f7\u3002</p> <ul> <li>gzip RFC1952 gzip \u7f16\u7801</li> <li>compress Unix\u6587\u4ef6\u538b\u7f29</li> <li>deflate RFC1950\u548c1951 \u8bb2\u89e3 zlib\u548cdeflate</li> <li>identity \u6ca1\u6709\u7f16\u7801</li> </ul> <h4 id=accept-encoding>Accept-Encoding</h4> <p>\u4e3a\u4e86\u907f\u514d\u670d\u52a1\u5668\u4f7f\u7528\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u7684\u7f16\u7801\u65b9\u5f0f\uff0c \u5ba2\u6237\u7aef\u5c31\u628a\u81ea\u5df1\u652f\u6301\u7684\u5185\u5bb9\u7f16\u7801\u65b9\u5f0f\u5217\u8868\u653e\u5728\u8bf7\u6c42\u7684 Accept-Encoding \u9996\u90e8\u91cc\u53d1\u51fa\u53bb\u3002 \u5982\u679c HTTP \u8bf7\u6c42\u4e2d\u6ca1\u6709\u5305\u542b Accept-Encoding \u9996\u90e8\uff0c \u670d\u52a1\u5668\u5c31\u53ef\u4ee5\u5047\u8bbe\u5ba2\u6237\u7aef\u80fd\u591f\u63a5\u53d7\u4efb\u4f55\u7f16\u7801\u65b9\u5f0f(\u7b49\u4ef7 \u4e8e\u53d1\u9001 Accept-Encoding: *)\u3002</p> <p>Example:</p> <pre class=hljs><code class=language-http><span class=hljs-attribute>Accept-Encoding</span>: compress, gzip\n<span class=hljs-attribute>Accept-Encoding</span>: \n<span class=hljs-attribute>Accept-Encoding</span>: *\n<span class=hljs-attribute>Accept-Encoding</span>: compress;q=0.5, gzip;q=1.0\n<span class=hljs-attribute>Accept-Encoding</span>: gzip;q=1.0, identity; q=0.5, *;q=0</code></pre><p>Q \u503c\u7684\u8303\u56f4\u4ece0.0 \u5230 1.0\uff0c0.0 \u8bf4\u660e\u5ba2\u6237\u7aef\u4e0d\u60f3\u63a5\u53d7\u6240\u8bf4\u660e\u7684\u7f16\u7801\uff0c1.0 \u5219\u8868\u660e\u6700\u5e0c\u671b\u4f7f\u7528\u7684\u7f16\u7801\u3002 \u201c*\u201d\u8868\u793a\u201c\u4efb\u4f55\u5176\u4ed6\u65b9\u6cd5\u201d\u3002</p> <h3 id=\u4f20\u8f93\u7f16\u7801\u548c\u5206\u5757\u7f16\u7801>\u4f20\u8f93\u7f16\u7801\u548c\u5206\u5757\u7f16\u7801</h3> <p>\u4f20\u8f93\u7f16\u7801\u4e5f\u662f\u4f5c\u7528\u5728\u5b9e\u4f53\u4e3b\u4f53\u4e0a\u7684\u53ef\u9006\u53d8\u6362\uff0c\u4f46\u4f7f\u7528\u5b83\u4eec\u662f\u7531 \u4e8e\u67b6\u6784\u65b9\u9762\u7684\u539f\u56e0\uff0c\u540c\u5185\u5bb9\u7684\u683c\u5f0f\u65e0\u5173\u3002</p> <p><img src='+i(a)+' alt=""></p> <h4 id=\u53ef\u9760\u4f20\u8f93>\u53ef\u9760\u4f20\u8f93</h4> <ul> <li>\u672a\u77e5\u5c3a\u5bf8 \u5982\u679c\u4e0d\u5148\u751f\u6210\u5185\u5bb9\uff0c\u67d0\u4e9b\u7f51\u5173\u5e94\u7528\u7a0b\u5e8f\u548c\u5185\u5bb9\u7f16\u7801\u5668\u5c31\u65e0\u6cd5\u786e\u5b9a\u62a5\u6587\u4e3b\u4f53\u7684\u6700\u7ec8 \u5927\u5c0f\u3002 \u901a\u5e38\uff0c\u8fd9\u4e9b\u670d\u52a1\u5668\u5e0c\u671b\u5728\u77e5\u9053\u5927\u5c0f\u4e4b\u524d\u5c31\u5f00\u59cb\u4f20\u8f93\u6570\u636e\u3002 \u56e0\u4e3a HTTP \u534f\u8bae 354 \u8981\u6c42 Content-Length \u9996\u90e8\u5fc5\u987b\u5728\u6570\u636e\u4e4b\u524d\uff0c \u6709\u4e9b\u670d\u52a1\u5668\u5c31\u4f7f\u7528\u4f20\u8f93\u7f16\u7801\u6765\u53d1\u9001\u6570\u636e\uff0c \u5e76\u7528\u7279\u522b\u7684\u7ed3\u675f\u811a\u6ce8\u8868\u660e\u6570\u636e\u7ed3\u675f\u3002</li> <li>\u5b89\u5168\u6027 \u4f60\u53ef\u4ee5\u7528\u4f20\u8f93\u7f16\u7801\u6765\u628a\u62a5\u6587\u5185\u5bb9\u6270\u4e71\uff0c\u7136\u540e\u5728\u5171\u4eab\u7684\u4f20\u8f93\u7f51\u7edc\u4e0a\u53d1\u9001\u3002</li> </ul> <h4 id=transfer-encoding-headers>Transfer-Encoding Headers</h4> <ul> <li>Transfer-Encoding \u544a\u77e5\u63a5\u6536\u65b9\u4e3a\u4e86\u53ef\u9760\u5730\u4f20\u8f93\u62a5\u6587\uff0c\u5df2\u7ecf\u5bf9\u5176\u8fdb\u884c\u4e86\u4f55\u79cd\u7f16\u7801\u3002</li> <li>TE \u7528\u5728\u8bf7\u6c42\u9996\u90e8\u4e2d\uff0c\u544a\u77e5\u670d\u52a1\u5668\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u4f20\u8f93\u7f16\u7801\u6269\u5c55\u3002</li> </ul> <p>\u8bf7\u6c42\u4f7f\u7528\u4e86 TE \u9996\u90e8\u6765\u544a\u8bc9\u670d\u52a1\u5668\u5b83\u53ef\u4ee5\u63a5\u53d7\u5206\u5757\u7f16\u7801(\u5982\u679c\u662f HTTP/1.1 \u5e94\u7528\u7a0b\u5e8f\u7684\u8bdd\uff0c \u8fd9\u5c31\u662f\u5fc5\u987b\u7684)\u5e76\u4e14\u613f\u610f\u63a5\u53d7\u9644\u5728\u5206\u5757\u7f16\u7801\u7684\u62a5\u6587\u7ed3\u5c3e\u4e0a\u7684\u62d6\u6302:</p> <pre class=hljs><code class=language-http>GET /new_products.html HTTP/1.1\nHost: www.gsmiot.com\nUser-Agent: Mozilla/4.61 [en] (WinNT; I) \nTE: trailers, chunked\n...</code></pre><h4 id=\u5206\u5757\u7f16\u7801>\u5206\u5757\u7f16\u7801</h4> <p>\u5206\u5757\u7f16\u7801\u628a\u62a5\u6587\u5206\u5272\u4e3a\u82e5\u5e72\u4e2a\u5927\u5c0f\u5df2\u77e5\u7684\u5757\u3002\u5757\u4e4b\u95f4\u662f\u7d27\u6328\u7740\u53d1\u9001\u7684\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700 \u8981\u5728\u53d1\u9001\u4e4b\u524d\u77e5\u9053\u6574\u4e2a\u62a5\u6587\u7684\u5927\u5c0f\u4e86\u3002</p> <p><img src='+i(l)+' alt=""></p> <h3 id=\u968f\u65f6\u95f4\u53d8\u5316\u7684\u5b9e\u4f8b>\u968f\u65f6\u95f4\u53d8\u5316\u7684\u5b9e\u4f8b</h3> <p>HTTP \u534f\u8bae\u89c4\u5b9a\u4e86\u79f0\u4e3a\u5b9e\u4f8b\u64cd\u63a7(instance manipulations)\u7684\u4e00\u7cfb\u5217\u8bf7\u6c42\u548c\u54cd\u5e94\u64cd \u4f5c\uff0c\u7528\u4ee5\u64cd\u63a7\u5bf9\u8c61\u7684\u5b9e\u4f8b\u3002 \u4e24\u4e2a\u4e3b\u8981\u7684\u5b9e\u4f8b\u64cd\u63a7\u65b9\u6cd5\u662f\u8303\u56f4\u8bf7\u6c42\u548c\u5dee\u5f02\u7f16\u7801\u3002 \u8fd9\u4e24 \u79cd\u65b9\u6cd5\u90fd\u8981\u6c42\u5ba2\u6237\u7aef\u80fd\u591f\u6807\u8bc6\u5b83\u6240\u62e5\u6709(\u5982\u679c\u6709\u7684\u8bdd)\u7684\u8d44\u6e90\u7684\u7279\u5b9a\u526f\u672c\uff0c\u5e76\u5728\u4e00\u5b9a\u7684\u6761\u4ef6\u4e0b\u8bf7\u6c42\u65b0\u7684\u5b9e\u4f8b\u3002</p> <h3 id=\u9a8c\u8bc1\u7801\u548c\u65b0\u9c9c\u5ea6>\u9a8c\u8bc1\u7801\u548c\u65b0\u9c9c\u5ea6</h3> <p>\u670d\u52a1\u5668\u5e94\u5f53\u544a\u77e5\u5ba2\u6237\u7aef\u80fd\u591f\u5c06\u5185\u5bb9\u7f13\u5b58\u591a\u957f\u65f6\u95f4\uff0c\u5728\u8fd9\u4e2a\u65f6\u95f4\u4e4b\u5185\u5c31\u662f\u65b0\u9c9c\u7684\u3002 \u670d\u52a1\u5668\u53ef\u4ee5\u7528\u8fd9\u4e24\u4e2a\u9996\u90e8\u4e4b\u4e00\u6765\u63d0\u4f9b\u8fd9\u79cd\u4fe1\u606f: </p> <ul> <li>Expires(\u8fc7\u671f)</li> <li>Cache- Control(\u7f13\u5b58\u63a7\u5236)</li> </ul> <h4 id=\u6709\u6761\u4ef6\u7684\u8bf7\u6c42\u4e0e\u9a8c\u8bc1\u7801>\u6709\u6761\u4ef6\u7684\u8bf7\u6c42\u4e0e\u9a8c\u8bc1\u7801</h4> <table> <thead> <tr> <th>\u8bf7\u6c42\u7c7b\u578b</th> <th>\u9a8c\u8bc1\u7801</th> <th>\u63cf\u8ff0</th> </tr> </thead> <tbody><tr> <td>If-Modified-Since</td> <td>Last-Modified</td> <td>\u5982\u679c\u5728\u524d\u4e00\u6761\u54cd\u5e94\u7684 Last-Modified \u9996\u90e8\u4e2d\u8bf4\u660e\u7684 \u65f6\u95f4\u4e4b\u540e\uff0c\u8d44\u6e90\u7684\u7248\u672c\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u53d1\u9001\u5176\u526f\u672c</td> </tr> <tr> <td>If-Unmodified-Since</td> <td>Last-Modified</td> <td>\u4ec5\u5728\u524d\u4e00\u6761\u54cd\u5e94\u7684 Last-Modified \u9996\u90e8\u4e2d\u8bf4\u660e\u7684\u65f6 \u95f4\u4e4b\u540e\uff0c\u8d44\u6e90\u7684\u7248\u672c\u6ca1\u6709\u53d8\u5316\uff0c\u624d\u53d1\u9001\u5176\u526f\u672c</td> </tr> <tr> <td>If-Match</td> <td>ETag</td> <td>\u5982\u679c\u5b9e\u4f53\u7684\u6807\u8bb0\u4e0e\u524d\u4e00\u6b21\u54cd\u5e94\u9996\u90e8\u4e2d\u7684 ETag \u76f8\u540c\uff0c \u5c31\u53d1\u9001\u8be5\u8d44\u6e90\u7684\u526f\u672c</td> </tr> <tr> <td>If-None-Match</td> <td>ETag</td> <td>\u5982\u679c\u5b9e\u4f53\u7684\u6807\u8bb0\u4e0e\u524d\u4e00\u6b21\u54cd\u5e94\u9996\u90e8\u4e2d\u7684 ETag \u4e0d\u540c\uff0c \u5c31\u53d1\u9001\u8be5\u8d44\u6e90\u7684\u526f\u672c</td> </tr> </tbody></table> <h3 id=\u8303\u56f4\u8bf7\u6c42>\u8303\u56f4\u8bf7\u6c42</h3> <p>\u6709\u4e86\u8303\u56f4\u8bf7\u6c42\uff0cHTTP \u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42\u66fe\u83b7\u53d6\u5931\u8d25\u7684\u5b9e\u4f53\u7684\u4e00\u4e2a\u8303\u56f4(\u6216\u8005\u8bf4 \u4e00\u90e8\u5206)\uff0c\u6765\u6062\u590d\u4e0b\u8f7d\u8be5\u5b9e\u4f53\u3002</p> <p>Example:</p> <pre class=hljs><code class=language-http>GET /bigfile.html HTTP/1.1\nHost: www.gsmiot.com\nRange: bytes=4000-\nUser-Agent: Mozilla/4.61 [en] (WinNT; I) \n...</code></pre><p>\u5bf9\u4e8e\u5ba2\u6237\u7aef\u5728\u4e00\u4e2a\u8bf7\u6c42\u5185\u8bf7\u6c42\u591a\u4e2a\u4e0d\u540c\u8303\u56f4\u7684\u60c5\u51b5\uff0c\u8fd4\u56de\u7684\u54cd\u5e94\u4e5f\u662f\u5355\u4e2a\u5b9e\u4f53\uff0c \u5b83\u6709\u4e00\u4e2a\u591a\u90e8\u5206\u4e3b\u4f53\u53caContent-Type: multipart/byteranges\u9996\u90e8\u3002</p> <p>\u670d\u52a1\u5668\u53ef\u4ee5\u901a\u8fc7\u5728\u54cd\u5e94\u4e2d\u5305\u542b Accept-Ranges \u9996\u90e8\u7684\u5f62\u5f0f\u5411\u5ba2\u6237\u7aef\u8bf4\u660e\u53ef\u4ee5\u63a5\u53d7\u7684\u8303\u56f4\u8bf7\u6c42\u3002 \u8fd9\u4e2a\u9996\u90e8\u7684\u503c\u662f\u8ba1\u7b97\u8303\u56f4\u7684\u5355\u4f4d\uff0c\u901a\u5e38\u662f\u4ee5\u5b57\u8282\u8ba1\u7b97\u7684\u3002</p> <h3 id=\u5dee\u5f02\u7f16\u7801>\u5dee\u5f02\u7f16\u7801</h3> <p>\u5dee\u5f02\u7f16\u7801\u4e5f\u662f\u4e00\u7c7b\u5b9e\u4f8b\u64cd\u63a7\uff0c\u56e0\u4e3a\u5b83\u4f9d\u8d56\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u9488\u5bf9\u7279\u5b9a\u7684\u5bf9\u8c61\u5b9e\u4f8b\u6765\u4ea4\u6362\u4fe1\u606f\u3002RFC 3229 \u63cf\u8ff0\u4e86\u5dee\u5f02\u7f16\u7801\u3002</p> <p>\u5982\u679c\u5ba2\u6237\u7aef\u60f3\u544a\u8bc9\u670d\u52a1\u5668\u5b83\u613f\u610f\u63a5\u53d7\u8be5\u9875\u9762\u7684\u5dee\u5f02\uff0c\u53ea\u8981\u53d1\u9001 A-IM \u9996\u90e8\u5c31\u53ef\u4ee5\u4e86\u3002 A-IM \u662f Accept-Instance-Manipulation(\u63a5\u53d7\u5b9e\u4f8b\u64cd\u63a7)\u7684\u7f29\u5199\u3002 \u5f62\u8c61\u6bd4\u55bb\u7684\u8bdd\uff0c\u5ba2\u6237\u7aef\u76f8\u5f53\u4e8e\u8fd9\u6837\u8bf4:\u201c\u54e6\u5bf9\u4e86\uff0c\u6211\u80fd\u63a5\u53d7\u67d0\u4e9b\u5f62\u5f0f\u7684\u5b9e\u4f8b\u64cd\u63a7\uff0c \u5982\u679c\u4f60\u4f1a\u5176\u4e2d\u4e00\u79cd\u7684\u8bdd\uff0c\u5c31\u4e0d\u7528\u53d1\u9001\u5b8c\u6574\u7684\u6587\u6863\u7ed9\u6211\u4e86\u3002\u201d \u5728 A-IM \u9996\u90e8\u4e2d\uff0c\u5ba2\u6237\u7aef\u4f1a\u8bf4\u660e\u5b83\u77e5\u9053\u54ea\u4e9b\u7b97\u6cd5\u53ef\u4ee5\u628a\u5dee\u5f02\u5e94\u7528\u4e8e\u8001\u7248\u672c\u800c\u5f97\u5230\u6700\u65b0\u7248\u672c\u3002 \u670d\u52a1\u7aef\u53d1\u9001\u56de\u4e0b\u9762\u8fd9\u4e9b\u5185\u5bb9: \u4e00\u4e2a\u7279\u6b8a\u7684\u54cd\u5e94\u4ee3\u7801\u2014\u2014226 IM Used\uff0c \u544a\u77e5\u5ba2\u6237\u7aef\u5b83\u6b63\u5728\u53d1\u9001\u7684\u662f\u6240\u8bf7\u6c42\u5bf9\u8c61\u7684\u5b9e\u4f8b\u64cd\u63a7\uff0c\u800c\u4e0d\u662f\u90a3\u4e2a\u5b8c\u6574\u7684\u5bf9\u8c61\u81ea\u8eab; \u4e00\u4e2a IM(Instance-Manipulation \u7684\u7f29\u5199) \u9996\u90e8\uff0c\u8bf4\u660e\u7528\u4e8e\u8ba1\u7b97\u5dee\u5f02\u7684\u7b97\u6cd5; \u65b0\u7684 ETag \u9996\u90e8\u548c Delta-Base \u9996\u90e8\uff0c\u8bf4\u660e\u7528\u4e8e\u8ba1\u7b97\u5dee\u5f02\u7684\u57fa\u7ebf\u6587\u6863\u7684 ETag(\u7406\u8bba\u4e0a\uff0c\u5b83\u5e94\u8be5\u548c\u5ba2\u6237\u7aef\u4e4b\u524d\u8bf7\u6c42\u91cc\u7684 If-None- Match \u9996\u90e8\u4e2d\u7684 ETag \u76f8\u540c!)\u3002</p> <p>\u5dee\u5f02\u7f16\u7801\u6240\u7528\u7684\u9996\u90e8</p> <table> <thead> <tr> <th>\u9996\u90e8</th> <th>\u63cf\u8ff0</th> </tr> </thead> <tbody><tr> <td>ETag</td> <td>\u6587\u6863\u6bcf\u4e2a\u5b9e\u4f8b\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002\u7531\u670d\u52a1\u5668\u5728\u54cd\u5e94\u4e2d\u53d1\u9001;\u5ba2\u6237\u7aef\u5728\u540e\u7ee7\u8bf7\u6c42\u7684 If-Match \u9996\u90e8\u548c If-None-Match \u9996\u90e8\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5b83</td> </tr> <tr> <td>If-None-Match</td> <td>\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8bf7\u6c42\u9996\u90e8\uff0c\u5f53\u4e14\u4ec5\u5f53\u5ba2\u6237\u7aef\u7684\u6587\u6863\u7248\u672c\u4e0e\u670d\u52a1\u5668\u4e0d\u540c\u65f6\uff0c\u624d\u5411\u670d\u52a1 \u5668\u8bf7\u6c42\u8be5\u6587\u6863</td> </tr> <tr> <td>A-IM</td> <td>\u5ba2\u6237\u7aef\u8bf7\u6c42\u9996\u90e8\uff0c\u8bf4\u660e\u53ef\u4ee5\u63a5\u53d7\u7684\u5b9e\u4f8b\u64cd\u63a7\u7c7b\u578b</td> </tr> <tr> <td>IM</td> <td>\u670d\u52a1\u5668\u54cd\u5e94\u9996\u90e8\uff0c\u8bf4\u660e\u4f5c\u7528\u5728\u54cd\u5e94\u4e0a\u7684\u5b9e\u4f8b\u64cd\u63a7\u7684\u7c7b\u578b\u3002\u5f53\u54cd\u5e94\u4ee3\u7801\u662f 226 IM Used \u65f6\uff0c\u4f1a\u53d1\u9001\u8fd9\u4e2a\u9996\u90e8</td> </tr> <tr> <td>Delta-Base</td> <td>\u670d\u52a1\u5668\u54cd\u5e94\u9996\u90e8\uff0c\u8bf4\u660e\u7528\u4e8e\u8ba1\u7b97\u5dee\u5f02\u7684\u57fa\u7ebf\u6587\u6863\u7684 ETag \u503c(\u5e94\u5f53\u4e0e\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e2d\u7684 If-None-Match \u9996\u90e8\u91cc\u7684 ETag \u76f8\u540c)</td> </tr> </tbody></table> <p><strong>\u5b9e\u4f8b\u64cd\u63a7\u3001\u5dee\u5f02\u751f\u6210\u5668\u548c\u5dee\u5f02\u5e94\u7528\u5668</strong></p> <p>\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528 A-IM \u9996\u90e8\u8bf4\u660e\u53ef\u4ee5\u63a5\u53d7\u7684\u4e00\u4e9b\u5b9e\u4f8b\u64cd\u63a7\u7684\u7c7b\u578b\u3002 \u4e00\u4e9b\u5728 IANA \u6ce8\u518c\u7684\u5b9e\u4f8b\u64cd\u63a7\u7c7b\u578b\u3002</p> <table> <thead> <tr> <th>\u7c7b\u578b</th> <th>\u8bf4\u660e</th> </tr> </thead> <tbody><tr> <td>vcdiff</td> <td>\u7528 vcdiff \u7b97\u6cd5\u8ba1\u7b97\u5dee\u5f02 (vcdiff \u7684\u89c4\u8303\u7531 RFC3284 \u53d1\u5e03)</td> </tr> <tr> <td>diffe</td> <td>\u7528 Unix \u7cfb\u7edf\u7684 diff-e \u547d\u4ee4\u8ba1\u7b97\u5dee\u5f02</td> </tr> <tr> <td>gdiff</td> <td>\u7528 gdiff \u7b97\u6cd5\u8ba1\u7b97\u5dee\u5f02 <a href=http://www.w3.org/TR/NOTE-gdiff-19970901.html>link</a></td> </tr> <tr> <td>gzip</td> <td>\u7528 gzip \u7b97\u6cd5\u538b\u7f29</td> </tr> <tr> <td>deflate</td> <td>\u7528 deflate \u7b97\u6cd5\u538b\u7f29</td> </tr> <tr> <td>range</td> <td>\u7528\u5728\u670d\u52a1\u5668\u7684\u54cd\u5e94\u4e2d\uff0c\u8bf4\u660e\u54cd\u5e94\u662f\u9488\u5bf9\u8303\u56f4\u9009\u62e9\u5f97\u5230\u7684\u90e8\u5206\u5185\u5bb9</td> </tr> <tr> <td>identity</td> <td>\u7528\u5728\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e2d\u7684 A-IM \u9996\u90e8\u4e2d\uff0c\u8bf4\u660e\u5ba2\u6237\u7aef\u613f\u610f\u63a5\u53d7\u6052\u7b49\u5b9e\u4f8b\u64cd\u63a7</td> </tr> </tbody></table> <h3 id=\u66f4\u591a\u4fe1\u606f>\u66f4\u591a\u4fe1\u606f</h3> <p>\u5173\u4e8e\u5b9e\u4f53\u548c\u7f16\u7801\u65b9\u9762\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u8d44\u6e90\u3002</p> <ul> <li><a href=http://www.ietf.org/rfc/rfc2616.txt>http://www.ietf.org/rfc/rfc2616.txt</a> RFC 2616\uff0c\u4e5f\u5c31\u662f HTTP/1.1 \u7248\u7684\u89c4\u8303\uff0c\u662f\u5b9e\u4f53\u4e3b\u4f53\u7ba1\u7406\u548c\u7f16\u7801\u65b9\u9762\u7684\u4e3b\u8981\u53c2\u8003\u3002</li> <li><a href=http://www.ietf.org/rfc/rfc3229.txt>http://www.ietf.org/rfc/rfc3229.txt</a> RFC 3229\uff0c\u201cDelta Encoding in HTTP\u201d(\u201cHTTP \u4e2d\u7684\u5dee\u5f02\u7f16\u7801\u201d)\uff0c\u8bf4\u660e\u4e86\u5982\u4f55\u901a \u8fc7\u6269\u5c55 HTTP/1.1 \u6765\u652f\u6301\u5dee\u5f02\u7f16\u7801\u3002</li> <li>Introduction to Data Compression11(\u300a\u6570\u636e\u538b\u7f29\u5bfc\u8bba\u300b) \u8fd9\u672c\u4e66\u7684\u4f5c\u8005\u662f Khalid Sayood\uff0c\u51fa\u7248\u5546\u4e3a Morgan Kaufmann Publishers\u3002\u8be5\u4e66\u4ecb \u7ecd\u4e86\u51e0\u79cd HTTP \u5185\u5bb9\u7f16\u7801\u652f\u6301\u7684\u538b\u7f29\u7b97\u6cd5\u3002</li> <li><a href=http://www.ietf.org/rfc/rfc1521.txt>http://www.ietf.org/rfc/rfc1521.txt</a> RFC 1521\uff0c\u201cMultipurpose Internet Mail Extensions, Part One: Mechanisms for Specifying and Describing the Format of Internet Message Bodies\u201d(\u201c \u591a \u7528 \u9014 \u56e0 \u7279\u7f51\u90ae\u4ef6\u6269\u5c55\uff0c\u7b2c\u4e00\u90e8\u5206:\u89c4\u5b9a\u548c\u63cf\u8ff0\u56e0\u7279\u7f51\u62a5\u6587\u4e3b\u4f53\u683c\u5f0f\u7684\u673a\u5236\u201d)\uff0c\u63cf\u8ff0\u4e86 MIME \u4e3b\u4f53\u7684\u683c\u5f0f\u3002 \u8fd9\u4efd\u53c2\u8003\u6750\u6599\u5f88\u6709\u7528\uff0c\u56e0\u4e3a HTTP \u4ece MIME \u4e2d\u501f\u7528\u4e86\u5927\u91cf\u5185\u5bb9\u3002\u8bbe\u8ba1\u8fd9\u4efd\u6587\u6863\u7684\u76ee\u7684\uff0c\u5c31\u662f\u4e3a\u4e86\u63d0\u4f9b\u5728\u5355\u4e00\u62a5\u6587\u4e2d\u5305\u542b\u591a\u4e2a\u5bf9\u8c61\u7684\u5404\u79cd\u8bbe\u65bd\uff0c\u6bd4\u5982\u7528 US-ASCII \u4e4b\u5916\u7684\u5b57\u7b26\u96c6\u6765\u8868\u793a\u4e3b\u4f53\u6587\u672c\uff0c\u8868\u793a\u591a\u79cd\u5b57\u4f53\u683c\u5f0f\u7684\u6587\u672c\u6d88\u606f\u4ee5\u53ca\u8868\u793a\u975e\u6587\u672c\u7c7b\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u56fe\u50cf\u548c\u58f0\u97f3\u7247\u6bb5\u7b49\u3002</li> <li><a href=http://www.ietf.org/rfc/rfc2045.txt>http://www.ietf.org/rfc/rfc2045.txt</a> RFC 2045\uff0c\u201cMultipurpose Internet Mail Extensions, Part One: Format of Internet Message Bodies\u201d(\u201c\u591a\u7528\u9014\u56e0\u7279\u7f51\u90ae\u4ef6\u6269\u5c55\uff0c\u7b2c\u4e00\u90e8\u5206:\u56e0\u7279\u7f51\u62a5\u6587\u4e3b\u4f53\u7684\u683c \u5f0f\u201d)\uff0c\u89c4\u5b9a\u4e86\u7528\u6765\u63cf\u8ff0 MIME \u683c\u5f0f\u62a5\u6587\u7ed3\u6784\u7684\u5404\u79cd\u9996\u90e8\uff0c\u5176\u4e2d\u8bb8\u591a\u90fd\u548c HTTP \u4e2d\u7684\u7528\u6cd5\u7c7b\u4f3c\u6216\u76f8\u540c\u3002</li> <li><a href=http://www.ietf.org/rfc/rfc1864.txt>http://www.ietf.org/rfc/rfc1864.txt</a> RFC 1864\uff0c\u201cThe Content-MD5 Header Field\u201d(\u201cContent-MD5 \u9996\u90e8\u5b57\u6bb5\u201d)\uff0c\u63d0 \u4f9b\u4e86\u7528 Content-MD5 \u9996\u90e8\u5b57\u6bb5\u6765\u505a\u62a5\u6587\u5b8c\u6574\u6027\u68c0\u67e5\u7684\u884c\u4e3a\u53ca\u7528\u9014\u65b9\u9762\u7684\u4e00\u4e9b\u5386\u53f2 \u7ec6\u8282\u3002</li> <li><a href=http://www.ietf.org/rfc/rfc3230.txt>http://www.ietf.org/rfc/rfc3230.txt</a> RFC 3230\uff0c\u201cInstance Digests in HTTP\u201d(\u201cHTTP \u4e2d \u7684 \u5b9e \u4f8b \u6458 \u8981 \u201d)\uff0c \u63cf \u8ff0 \u4e86 \u5bf9 HTTP \u5b9e\u4f53\u6458\u8981\u5904\u7406\u7684\u6539\u8fdb\uff0c\u89e3\u51b3\u4e86 Content-MD5 \u4e2d\u5b58\u5728\u7684\u5404\u79cd\u95ee\u9898\u3002</li> </ul> ';t.exports=r},"87ec9d1ac2c2b203bd0c":function(t,e,n){"use strict";n.r(e),e.default=n.p+"a935b9dcf6028339e750236752a6dfae.png"},ece744c1ad18e0c2f74a:function(t,e,n){"use strict";n.r(e),e.default=n.p+"d81cce28122ee92435bffac0b46aaa56.png"}}]);