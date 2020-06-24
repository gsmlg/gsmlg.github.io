(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"04e0e95f6d60d925e29a":function(s,a){s.exports='<h1 id=\u5728-ubuntu-\u4e0a\u5b89\u88c5-kubeadm>\u5728 Ubuntu \u4e0a\u5b89\u88c5 kubeadm</h1> <h2 id=\u5b89\u88c5\u4e4b\u524d>\u5b89\u88c5\u4e4b\u524d</h2> <p>\u57fa\u672c\u914d\u7f6e\u8981\u6c42\uff1a</p> <ul> <li>One or more machines running one of:<ul> <li>Ubuntu 16.04+</li> <li>Debian 9</li> <li>CentOS 7</li> <li>RHEL 7</li> <li>Fedora 25/26 (best-effort)</li> <li>HypriotOS v1.0.1+</li> <li>Container Linux (tested with 1576.4.0)</li> </ul> </li> <li>2 GB or more of RAM per machine (any less will leave little room for your apps)</li> <li>2 CPUs or more</li> <li>Full network connectivity between all machines in the cluster (public or private network is fine)</li> <li>Unique hostname, MAC address, and product_uuid for every node. See here for more details.</li> <li>Certain ports are open on your machines. See here for more details.</li> <li>Swap disabled. You MUST disable swap in order for the kubelet to work properly.</li> </ul> <h2 id=\u5b89\u88c5-docker>\u5b89\u88c5 Docker</h2> <pre class=hljs><code class=language->apt-<span class=hljs-built_in>get</span> <span class=hljs-keyword>update</span>\napt-<span class=hljs-built_in>get</span> install -<span class=hljs-keyword>y</span> apt-transport-https <span class=hljs-keyword>ca</span>-certificates curl software-properties-common\ncurl -fsSL http<span class=hljs-variable>s:</span>//download.docker.<span class=hljs-keyword>com</span>/linux/ubuntu/gpg | apt-key <span class=hljs-built_in>add</span> -\n<span class=hljs-built_in>add</span>-apt-repository <span class=hljs-string>"deb https://download.docker.com/linux/$(. /etc/os-release; echo "</span>$ID<span class=hljs-string>") $(lsb_release -cs) stable"</span>\napt-<span class=hljs-built_in>get</span> <span class=hljs-keyword>update</span> &amp;&amp; apt-<span class=hljs-built_in>get</span> install -<span class=hljs-keyword>y</span> docker-<span class=hljs-keyword>ce</span>=$(apt-cache madison docker-<span class=hljs-keyword>ce</span> | <span class=hljs-keyword>grep</span> <span class=hljs-number>17.03</span> | head -<span class=hljs-number>1</span> | awk <span class=hljs-string>\'{print $3}\'</span>)</code></pre><h2 id=\u5b89\u88c5-kubeadm-kubelet-and-kubectl>\u5b89\u88c5 kubeadm, kubelet and kubectl</h2> <pre class=hljs><code class=language->apt-<span class=hljs-built_in>get</span> <span class=hljs-keyword>update</span> &amp;&amp; apt-<span class=hljs-built_in>get</span> install -<span class=hljs-keyword>y</span> apt-transport-https curl\ncurl -s http<span class=hljs-variable>s:</span>//packages.cloud.google.<span class=hljs-keyword>com</span>/apt/doc/apt-key.gpg | apt-key <span class=hljs-built_in>add</span> -\n<span class=hljs-keyword>cat</span> &lt;&lt;EOF &gt;/etc/apt/sources.<span class=hljs-keyword>list</span>.d/kubernetes.<span class=hljs-keyword>list</span>\n<span class=hljs-keyword>deb</span> http://apt.kubernetes.io/ kubernetes-xenial main\nEOF\napt-<span class=hljs-built_in>get</span> <span class=hljs-keyword>update</span>\napt-<span class=hljs-built_in>get</span> install -<span class=hljs-keyword>y</span> kubelet kubeadm kubectl\napt-<span class=hljs-keyword>mark</span> hold kubelet kubeadm kubectl</code></pre><h2 id=\u8fd0\u884c>\u8fd0\u884c</h2> <pre class=hljs><code class=language-><span class=hljs-attribute>kubeadm init</span></code></pre>'}}]);