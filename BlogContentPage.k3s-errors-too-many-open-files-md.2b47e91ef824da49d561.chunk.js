(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"19eb205c3e3aeb27d96c":function(s,a){s.exports="<p>\u96c6\u7fa4\u5728\u8fd0\u884c\u51e0\u4e2a\u4efb\u52a1\u540e\uff0c\u7a81\u7136\u65e0\u6cd5\u542f\u52a8</p> <p>\u6392\u67e5\u8fc7\u7a0b <code>k3s</code> \u53d1\u73b0\u65e0\u6cd5\u542f\u52a8 \u624b\u52a8\u542f\u52a8<code>k3s</code>\uff0c\u53d1\u73b0<code>docker</code>\u6ca1\u6709\u542f\u52a8 \u542f\u52a8docker\uff0c\u542f\u52a8<code>k3s</code>\uff0c\u53d1\u73b0\u65e0\u6cd5\u542f\u52a8\uff0c\u6253\u5370\u8d85\u957f\u7684\u9519\u8bef\u6808 \u6392\u67e5\u53d1\u73b0\u62a5\u9519\uff0c<code>too many open files</code></p> <p>\u68c0\u67e5\u7cfb\u7edf\u914d\u7f6e</p> <pre class=hljs><code class=language-shell><span class=hljs-meta>#</span><span class=bash> <span class=hljs-built_in>ulimit</span> -n</span>\n1204\n<span class=hljs-meta>\n#</span><span class=bash> <span class=hljs-comment># \u8bbe\u7f6e</span></span>\n<span class=hljs-meta>#</span><span class=bash> <span class=hljs-built_in>ulimit</span> -n 65535</span>\n65535</code></pre><p>\u7f16\u8f91\u7cfb\u7edf\u6587\u4ef6 /etc/security/limits.conf \uff0c\u4ee5\u4fdd\u8bc1\u91cd\u542f\u540e\u751f\u6548 \u589e\u52a0</p> <pre class=hljs><code class=language-text>*               soft    nofile            65535\n*               hard    nofile            65535</code></pre><p>\u5982\u679c\u9700\u8981\u4e0d\u91cd\u542f\u4fee\u6539\u8fdb\u7a0b ulimit\uff0c \u9700\u8981\u5728</p> <pre class=hljs><code class=language-><span class=hljs-regexp>/proc/</span>&lt;PID&gt;/limits</code></pre><p>\u4e2d\u67e5\u770b\u4fee\u6539</p> "}}]);