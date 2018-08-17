(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./app/data/blogs/otp-on-startup.md":function(o,e){o.exports='<h1 id=-otp->服务启动时启动OTP应用</h1> <h2 id=->出现问题</h2> <p>把Phoenix应用发布为erlang otp应用，设置开机启动，在 <code>/etc/rc.local</code> 中添加了启动</p> <p>重启后发现服务没有启动</p> <h2 id=->排查过程</h2> <ol> <li>增加打印输出 将服务启动时的输出打印，发现服务启动成功，<code>$?</code> 返回为0</li> <li>尝试延迟启动 猜测是否因为有服务没有启动导致，修改 <code>rc.local</code> 延迟15秒后启动，无效</li> <li>修改启动方式 将启动方式修改为 <code>foreground</code> ，发现运行过程中出现错误<pre class=hljs><code class="language-undefined"><span class=hljs-symbol>erlexec:</span> HOME must be <span class=hljs-keyword>set</span></code></pre></li> </ol> <p>原来是启动时需要有<code>HOME</code>环境变量被配置</p> <h2 id=->解决方式</h2> <p>在 <code>rc.local</code> 中启动时设置环境变量 <code>HOME</code></p> '}}]);