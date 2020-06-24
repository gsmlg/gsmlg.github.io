(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"1c50db4960a28067c829":function(s,a,e){var n="<h1 id=prow>prow</h1> <p><img src="+e("302492d1afd5e0e000f5")(e("6718d3b19008e68851eb"))+" alt=prow></p> <p>Prow \u662f\u57fa\u4e8eKubernetes\u5f00\u53d1\u7684CI/CD\u7cfb\u7edf</p> <p>Jobs\u53ef\u4ee5\u7531\u591a\u79cd\u7c7b\u578b\u7684\u4e8b\u4ef6\u51fa\u53d1\uff0c\u5e76\u4e14\u62a5\u544a\u72b6\u6001\u7ed9\u4e0d\u540c\u7684\u670d\u52a1\u3002 \u9664\u4e86Job\u6267\u884c\u5916\uff0cProw\u8fd8\u63d0\u4f9b\u4e86Github\u81ea\u52a8\u5316\u6267\u884c\u7b56\u7565\uff0c<code>/foo</code>\u683c\u5f0f\u7684\u547d\u4ee4\u7684chat-ops\u548c\u81ea\u52a8PR\u5408\u5e76</p> <h3 id=functions-and-features>Functions and Features</h3> <ul> <li>\u7528\u4e8e\u6d4b\u8bd5\uff0c\u6279\u5904\u7406\u548c\u4ea7\u54c1\u53d1\u5e03\u7684Job\u8fd0\u884c</li> <li>\u57fa\u4e8e<code>/foo</code>\u683c\u5f0f\u7684\u53ef\u6269\u5c55Github bot\u547d\u4ee4\uff0c\u5f3a\u5316\u914d\u7f6e\u7b56\u7565\u548c\u8fdb\u7a0b</li> <li>\u5e26\u6709\u6279\u91cf\u6d4b\u8bd5\u7684Github\u81ea\u52a8\u5408\u5e76</li> <li>\u7528\u4e8e\u67e5\u770bJob\uff0c\u5408\u5e76\u961f\u5217\u72b6\u6001\uff0c\u52a8\u6001\u751f\u6210\u7684\u5e2e\u52a9\u4fe1\u606f\u7684\u524d\u7aef\u754c\u9762</li> <li>\u57fa\u4e8eSCM\u7684\u81ea\u52a8\u90e8\u7f72</li> <li>\u5728SCM\u4e2d\u81ea\u52a8\u7ba1\u7406Github\u7684org/repo</li> <li>\u4e13\u4e3a\u62e5\u6709\u5927\u91cf\u4ed3\u5e93\u7684\u591a\u7ec4\u7ec7\u8bbe\u8ba1\uff08Prow\u53ea\u9700\u8981\u4e00\u4e2aGithub bot token\uff09</li> <li>\u5728Kubernetes\u4e0a\u8fd0\u884c\u5e26\u6765\u7684\u9ad8\u53ef\u7528\u6027</li> <li>JSON\u7ed3\u6784\u65e5\u5fd7</li> <li>Prometheus metrics</li> </ul> <h3 id=who-use-prow>Who use Prow</h3> <p>Prow is used by the following organizations and projects:</p> <ul> <li><a href=https://prow.k8s.io>Kubernetes</a><ul> <li>This includes <a href=https://github.com/kubernetes>kubernetes</a>, <a href=https://github.com/kubernetes-client>kubernetes-client</a>, <a href=https://github.com/kubernetes-csi>kubernetes-csi</a>, <a href=https://github.com/kubernetes-incubator>kubernetes-incubator</a>, and <a href=https://github.com/kubernetes-sigs>kubernetes-sigs</a>.</li> </ul> </li> <li><a href=https://prow.svc.ci.openshift.org/ >OpenShift</a><ul> <li>This includes <a href=https://github.com/openshift>openshift</a>, <a href=https://github.com/openshift-s2i>openshift-s2i</a>, <a href=https://github.com/operator-framework>operator-framework</a>, and some repos in <a href=https://github.com/kubernetes-incubator>kubernetes-incubator</a>, <a href=https://github.com/containers>containers</a> and <a href=https://github.com/heketi>heketi</a>.</li> </ul> </li> <li><a href=https://prow.istio.io/ >Istio</a></li> <li><a href=https://prow.knative.dev/ >Knative</a></li> <li><a href=https://prow.build-infra.jetstack.net/ >Jetstack</a></li> <li><a href=https://status.build.kyma-project.io/ >Kyma</a></li> <li><a href=https://prow.apps.ci.metal3.io/ >Metal\xb3</a></li> <li><a href=http://prombench.prometheus.io/ >Prometheus</a></li> <li><a href=https://github.com/caicloud>Caicloud</a></li> <li><a href=https://github.com/kubeflow>Kubeflow</a></li> <li><a href=https://github.com/Azure/aks-engine/tree/master/.prowci>Azure AKS Engine</a></li> <li><a href=https://github.com/tensorflow/minigo#automated-tests>tensorflow/minigo</a></li> <li><a href=https://github.com/helm/charts>helm/charts</a></li> <li><a href=https://github.com/GoogleCloudPlatform/compute-image-tools/tree/master/test-infra#prow-and-gubenator>Daisy(google compute image tools)</a></li> <li><a href=https://github.com/kubeedge/kubeedge>KubeEdge (Kubernetes Native Edge Computing Framework)</a></li> <li><a href=https://github.com/volcano-sh/volcano>Volcano (Kubernetes Native Batch System)</a></li> <li><a href=https://public-prow.loodse.com/ >Loodse</a></li> </ul> <p><a href=https://jenkins-x.io/ >Jenkins X</a> uses <a href=https://medium.com/@jdrawlings/serverless-jenkins-with-jenkins-x-9134cbfe6870>Prow as part of Serverless Jenkins</a>.</p> <h3 id=\u90e8\u7f72prow>\u90e8\u7f72Prow</h3> <h4 id=\u521b\u5efagithub-bot\u8d26\u53f7>\u521b\u5efaGithub bot\u8d26\u53f7</h4> <p>\u914d\u7f6e\u8d26\u6237\u7684 <code>personal access token</code></p> <ul> <li>Must have the <code>public_repo</code> and <code>repo:status</code> scopes</li> <li>Add the <code>repo</code> scope if you plan on handing private repos</li> <li>Add the <code>admin_org:hook</code> scope if you plan on handling a github org</li> </ul> <h5 id=\u521b\u5efagithub-secrets>\u521b\u5efaGithub secrets</h5> <ol> <li>\u521b\u5efa <code>hmac-token</code> \u7528\u4e8eGithub webhooks \u7684\u8ba4\u8bc1</li> </ol> <pre class=hljs><code class=language-bash><span class=hljs-comment># openssl rand -hex 20 &gt; /path/to/hook/secret</span>\nkubectl create secret generic hmac-token --from-file=hmac=/path/to/hook/secret</code></pre><ol start=2> <li>\u521b\u5efaGithub OAuth2 token</li> </ol> <pre class=hljs><code class=language-bash><span class=hljs-comment># https://github.com/settings/tokens</span>\nkubectl create secret generic oauth-token --from-file=oauth=/path/to/oauth/secret</code></pre><h4 id=\u5b89\u88c5prow\u5230\u96c6\u7fa4>\u5b89\u88c5<code>prow</code>\u5230\u96c6\u7fa4</h4> <pre class=hljs><code class=language->kubectl apply -f https:<span class=hljs-regexp>//gi</span>thub.com<span class=hljs-regexp>/gsmlg/</span>pipeline<span class=hljs-regexp>/raw/m</span>aster/updated_prow.yaml</code></pre><p>\u9ed8\u8ba4\u4f1a\u5b89\u88c5\u5230default namesapce\u4e0b\uff0cJob\u8fd0\u884c\u5728test-pods namsapces\u4e0b</p> <p>\u901a\u8fc7\u547d\u4ee4\u67e5\u770b\u662f\u5426\u5b89\u88c5\u5b8c\u6210</p> <pre class=hljs><code class=language-><span class=hljs-comment># kubectl get deployments</span>\n<span class=hljs-attribute>NAME</span>               READY   UP-TO-DATE   AVAILABLE   AGE\n<span class=hljs-attribute>deck</span>               <span class=hljs-number>2</span>/<span class=hljs-number>2</span>     <span class=hljs-number>2</span>            <span class=hljs-number>2</span>           <span class=hljs-number>21</span>h\n<span class=hljs-attribute>hook</span>               <span class=hljs-number>2</span>/<span class=hljs-number>2</span>     <span class=hljs-number>2</span>            <span class=hljs-number>2</span>           <span class=hljs-number>21</span>h\n<span class=hljs-attribute>horologium</span>         <span class=hljs-number>1</span>/<span class=hljs-number>1</span>     <span class=hljs-number>1</span>            <span class=hljs-number>1</span>           <span class=hljs-number>21</span>h\n<span class=hljs-attribute>plank</span>              <span class=hljs-number>1</span>/<span class=hljs-number>1</span>     <span class=hljs-number>1</span>            <span class=hljs-number>1</span>           <span class=hljs-number>21</span>h\n<span class=hljs-attribute>sinker</span>             <span class=hljs-number>1</span>/<span class=hljs-number>1</span>     <span class=hljs-number>1</span>            <span class=hljs-number>1</span>           <span class=hljs-number>21</span>h\n<span class=hljs-attribute>statusreconciler</span>   <span class=hljs-number>1</span>/<span class=hljs-number>1</span>     <span class=hljs-number>1</span>            <span class=hljs-number>1</span>           <span class=hljs-number>21</span>h\n<span class=hljs-attribute>tide</span>               <span class=hljs-number>1</span>/<span class=hljs-number>1</span>     <span class=hljs-number>1</span>            <span class=hljs-number>1</span>           <span class=hljs-number>21</span>h</code></pre><p>\u914d\u7f6eingress</p> <pre class=hljs><code class=language-><span class=hljs-comment># \u67e5\u770bingress</span>\nkubectl <span class=hljs-builtin-name>get</span> ingress ing\n\n<span class=hljs-comment># \u7f16\u8f91ingress</span>\nkubectl <span class=hljs-builtin-name>edit</span> ingress ing\n</code></pre><h4 id=\u521b\u5efawebhook>\u521b\u5efawebhook</h4> <p>\u914d\u7f6eingress\uff0cdefault/ing</p> <p>\u8bbe\u7f6e\u597dingress\u57df\u540d</p> <p>\u6253\u5f00github repo\u7684setting\u9875\u9762\u8bbe\u7f6ewebook\uff0cURL\u8bbe\u7f6e\u4e3aingress-domain/hook, secret\u4e3awebook\u521b\u5efa\u7684secret</p> <p>\u8fd9\u6837\u4e00\u4e2aprow\u96c6\u7fa4\u914d\u7f6e\u5b8c\u6210</p> <h3 id=\u6dfb\u52a0-plugins>\u6dfb\u52a0 plugins</h3> <p>\u589e\u52a0configmap plugins</p> <p>\u5185\u5bb9\u4e3a\uff1a</p> <pre class=hljs><code class=language-yaml><span class=hljs-attr>apiVersion:</span> <span class=hljs-string>v1</span>\n<span class=hljs-attr>kind:</span> <span class=hljs-string>ConfigMap</span>\n<span class=hljs-attr>metadata:</span>\n  <span class=hljs-attr>name:</span> <span class=hljs-string>plugins</span>\n  <span class=hljs-attr>namespace:</span> <span class=hljs-string>default</span>\n<span class=hljs-attr>data:</span>\n  <span class=hljs-attr>plugins.yaml:</span> <span class=hljs-string>|\n    plugins:\n      ORG/PROJECT:\n      - size</span></code></pre><p>\u4f1a\u81ea\u52a8\u5728pull-request\u4e0a\u6dfb\u52a0\u4e00\u4e2asize\u6807\u7b7e</p> ";s.exports=n},"6718d3b19008e68851eb":function(s,a,e){"use strict";e.r(a),a.default=e.p+"f802f4e07bace57a7a091ea8c1f6ee38.png"}}]);