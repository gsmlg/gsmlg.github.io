(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"9f5f051507108301060d":function(s,a){s.exports='<h2 id=source-to-image><code>Source to Image</code></h2> <p><code>Source-to-Image</code> (<code>s2i</code>) \u662f\u7531<code>openshift</code>\u63d0\u4f9b\u7684\u4e00\u5957\u4ece\u81ea\u52a8\u4ece\u4ee3\u7801\u6784\u5efa\u5230\u955c\u50cf\u7684\u5de5\u5177\u548c\u6d41\u7a0b\u3002</p> <p>S2I\u63d0\u4f9b\u4e86\u4e00\u5957\u955c\u50cf\u6a21\u7248\u6765\u5bf9\u591a\u79cd\u8bed\u8a00\u548c\u77ff\u5efa\u8fdb\u884c\u6784\u5efa</p> <h3 id=\u5e94\u7528>\u5e94\u7528</h3> <p><code>s2i</code> \u9002\u7528\u4e8e\u5c06\u5df2\u6709\u7a0b\u5e8f\u8fc1\u79fb\u5230docker\u955c\u50cf\u3002 <code>s2i</code>\u63d0\u4f9b\u4e86\u5404\u7c7b\u7684builder\u955c\u50cf\uff0c\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u5e94\u7528\u5feb\u901f\u7684\u5b8c\u6210\u6784\u5efa\u3002 \u7528\u6237\u4e0d\u518d\u9700\u8981\u5728\u4e3a\u5e94\u7528\u7f16\u5199Dockerfile\uff0c\u4e5f\u4e0d\u518d\u9700\u8981\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u8fd0\u884c\u5b89\u88c5\u4f9d\u8d56\u7a0b\u5e8f <code>s2i</code>\u53ef\u4ee5\u5bf9\u6784\u5efa\u955c\u50cf\u8fdb\u884c\u7248\u672c\u7ba1\u7406\uff0c\u5411\u63a7\u5236\u4ee3\u7801\u4ed3\u5e93\u4e00\u6837\u63a7\u5236build\u73af\u5883 <code>s2i</code>\u63d0\u4f9b\u4e86\u53ef\u4ee5\u6301\u7eed\u6d41\u7a0b\uff0c\u53ef\u4ee5\u8fdb\u884c\u9012\u589e\u7684\u9879\u76ee\u7f16\u8bd1\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u6784\u5efa\u65f6\u95f4</p> <h3 id=\u539f\u7406>\u539f\u7406</h3> <p><code>s2i</code>\u63d0\u4f9b\u4e86builder\u955c\u50cf\uff0c\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7f16\u8bd1\u8fd0\u884c\u73af\u5883\u3002 <code>s2i</code>\u4f1a\u628a\u4ee3\u7801\u6ce8\u5165\u5230builder\u955c\u50cf\u4e2d\u3002\u5728builder\u955c\u50cf\u4e2d\u5bf9\u6e90\u7801\u8fdb\u884c\u5904\u7406\uff0c\u4f7f\u5176\u53ef\u4ee5\u88ab\u8fd0\u884c\u3002</p> <p>\u5904\u7406\u811a\u672c\uff1a</p> <ul> <li>assemble \u6267\u884cbuild</li> <li>run \u8fd0\u884c</li> <li>save-artifacts \u4fdd\u5b58\u6784\u5efa\u4f9b\u540e\u7eed\u4f7f\u7528 optional</li> <li>usage \u663e\u793a\u4f7f\u7528\u4fe1\u606f optional</li> </ul> <h3 id=\u521b\u5efabuilder\u955c\u50cf>\u521b\u5efaBuilder\u955c\u50cf</h3> <p>\u4e3a<code>singlecloud</code>\u521b\u5efa\u4e00\u4e2a\u955c\u50cf</p> <h4 id=\u5b89\u88c5s2i\u547d\u4ee4>\u5b89\u88c5<code>s2i</code>\u547d\u4ee4</h4> <pre class=hljs><code class=language-shell>curl -sSL https://github.com/zdnscloud/s2i/releases/download/v1.0/s2i.tar.gz | tar zxf - -C /usr/local/bin/ s2i</code></pre><h4 id=\u521b\u5efas2i-builder\u6a21\u7248>\u521b\u5efa<code>s2i builder</code>\u6a21\u7248</h4> <pre class=hljs><code class=language-shell>s2i create s2i-singlecloud sc\n<span class=hljs-meta>#</span><span class=bash> \u8fdb\u5165\u6a21\u7248\u76ee\u5f55</span>\ncd sc</code></pre><p>\u6a21\u7248\u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u547d\u4ee4\u6765\u5904\u7406</p> <ul> <li>make build \u6784\u5efabuilder\u955c\u50cf</li> <li>make test \u6d4b\u8bd5builder\u955c\u50cf</li> </ul> <h5 id=\u4fee\u6539dockerfile\u6587\u4ef6>\u4fee\u6539Dockerfile\u6587\u4ef6</h5> <pre class=hljs><code class=language-Dockerfile><span class=hljs-comment># s2i-singlecloud</span>\n<span class=hljs-keyword>FROM</span> golang:<span class=hljs-number>1.12</span>.<span class=hljs-number>5</span>-alpine3.<span class=hljs-number>9</span>\n\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Put the maintainer name in the image metadata</span>\n<span class=hljs-comment># LABEL maintainer="Your Name &lt;your@email.com&gt;"</span>\n<span class=hljs-keyword>LABEL</span><span class=bash> maintainer=<span class=hljs-string>"GSMLG &lt;me@gsmlg.org&gt;"</span></span>\n\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Rename the builder environment variable to inform users about application you provide them</span>\n<span class=hljs-keyword>ENV</span> BUILDER_VERSION <span class=hljs-number>1.0</span>\n\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Set labels used in OpenShift to describe the builder image</span>\n<span class=hljs-keyword>LABEL</span><span class=bash> io.k8s.description=<span class=hljs-string>"Platform for building singlecloud"</span> \\\n      io.k8s.display-name=<span class=hljs-string>"singlecloud builder"</span> \\\n      io.openshift.expose-services=<span class=hljs-string>"80:http"</span> \\\n      io.openshift.s2i.scripts-url=image:///usr/libexec/s2i \\\n      io.openshift.tags=<span class=hljs-string>"builder,go,node"</span></span>\n\n<span class=hljs-keyword>USER</span> root\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Install required packages here:</span>\n<span class=hljs-keyword>RUN</span><span class=bash> mkdir -p /go/src/github.com/zdnscloud/singlecloud &amp;&amp; apk upate &amp;&amp; apk add bash &amp;&amp; rm -rf /var/cache/apk/</span>\n\n<span class=hljs-keyword>WORKDIR</span><span class=bash> /go/src/github.com/zdnscloud/singlecloud</span>\n\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Copy the S2I scripts to /usr/libexec/s2i, since openshift/base-centos7 image</span>\n<span class=hljs-comment># sets io.openshift.s2i.scripts-url label that way, or update that label</span>\n<span class=hljs-keyword>COPY</span><span class=bash> ./s2i/bin /usr/libexec/s2i</span>\n\n<span class=hljs-comment># This default user is created in the openshift/base-centos7 image</span>\n<span class=hljs-comment>#USER 1001</span>\n\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Set the default port for applications built using this image</span>\n<span class=hljs-keyword>EXPOSE</span> <span class=hljs-number>80</span>\n\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Set the default CMD for the image</span>\n<span class=hljs-keyword>CMD</span><span class=bash> [<span class=hljs-string>"/usr/libexec/s2i/usage"</span>]</span></code></pre><h5 id=\u4fee\u6539s2ibinassemble>\u4fee\u6539<code>s2i/bin/assemble</code></h5> <pre class=hljs><code class=language-bash><span class=hljs-comment>#!/bin/bash -e</span>\n<span class=hljs-comment>#</span>\n<span class=hljs-comment># S2I assemble script for the \'s2i-singlecloud-builder\' image.</span>\n<span class=hljs-comment># The \'assemble\' script builds your application source so that it is ready to run.</span>\n<span class=hljs-comment>#</span>\n<span class=hljs-comment># For more information refer to the documentation:</span>\n<span class=hljs-comment>#   https://github.com/openshift/source-to-image/blob/master/docs/builder_image.md</span>\n<span class=hljs-comment>#</span>\n\n<span class=hljs-comment># If the \'s2i-singlecloud\' assemble script is executed with the \'-h\' flag, print the usage.</span>\n<span class=hljs-keyword>if</span> [[ <span class=hljs-string>"<span class=hljs-variable>$1</span>"</span> == <span class=hljs-string>"-h"</span> ]]; <span class=hljs-keyword>then</span>\n    <span class=hljs-built_in>exec</span> /usr/libexec/s2i/usage\n<span class=hljs-keyword>fi</span>\n\n<span class=hljs-comment># Restore artifacts from the previous build (if they exist).</span>\n<span class=hljs-comment>#</span>\n<span class=hljs-keyword>if</span> [ <span class=hljs-string>"<span class=hljs-subst>$(ls /tmp/artifacts/ 2&gt;/dev/null)</span>"</span> ]; <span class=hljs-keyword>then</span>\n  <span class=hljs-built_in>echo</span> <span class=hljs-string>"---&gt; Restoring build artifacts..."</span>\n  mv /tmp/artifacts/. ./\n<span class=hljs-keyword>fi</span>\n\n<span class=hljs-built_in>echo</span> <span class=hljs-string>"---&gt; Installing application source..."</span>\ncp -Rf /tmp/src/. ./\n\n<span class=hljs-built_in>echo</span> <span class=hljs-string>"---&gt; Building application from source..."</span>\n<span class=hljs-comment># <span class=hljs-doctag>TODO:</span> Add build steps for your application, eg npm install, bundle install, pip install, etc.</span>\ngo build cmd/singlecloud/singlecloud.go\nmv singlecloud /go/bin/</code></pre><h5 id=\u4fee\u6539s2ibinrun>\u4fee\u6539<code>s2i/bin/run</code></h5> <pre class=hljs><code class=language-bash><span class=hljs-comment>#!/bin/bash -e</span>\n<span class=hljs-comment>#</span>\n<span class=hljs-comment># S2I run script for the \'s2i-singlecloud-builder\' image.</span>\n<span class=hljs-comment># The run script executes the server that runs your application.</span>\n<span class=hljs-comment>#</span>\n<span class=hljs-comment># For more information see the documentation:</span>\n<span class=hljs-comment>#   https://github.com/openshift/source-to-image/blob/master/docs/builder_image.md</span>\n<span class=hljs-comment>#</span>\n\n<span class=hljs-built_in>exec</span> /go/bin/singlecloud</code></pre><h4 id=\u521b\u5efabuilder\u955c\u50cf-1>\u521b\u5efabuilder\u955c\u50cf</h4> <pre class=hljs><code class=language-bash>make build</code></pre><h4 id=build-singlecloud>Build <code>singlecloud</code></h4> <pre class=hljs><code class=language-bash>s2i build https://github.com/zdnscloud/singlecloud s2i-singlecloud singlecloud</code></pre><h4 id=\u8fd0\u884csinglecloud>\u8fd0\u884c<code>singlecloud</code></h4> <pre class=hljs><code class=language-bash>docker run -p 8080:80 --rm singlecloud singlecloud -listen :80</code></pre>'}}]);