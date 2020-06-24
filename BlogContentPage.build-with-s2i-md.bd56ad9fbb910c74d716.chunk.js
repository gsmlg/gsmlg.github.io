(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3bd53a9d3ee8e1f809f1":function(s,e){s.exports="<h1 id=\u4f7f\u7528-s2i-build\u955c\u50cf>\u4f7f\u7528 <code>s2i</code> Build\u955c\u50cf</h1> <h2 id=\u5b89\u88c5s2i>\u5b89\u88c5<code>s2i</code></h2> <ul> <li>\u4f7f\u7528 <code>go get</code></li> </ul> <pre class=hljs><code class=language-shell><span class=hljs-meta>$</span><span class=bash> go get github.com/openshift/<span class=hljs-built_in>source</span>-to-image/cmd/s2i</span></code></pre><ul> <li>macOS \u4f7f\u7528</li> </ul> <pre class=hljs><code class=language-shell><span class=hljs-meta>$</span><span class=bash> brew install <span class=hljs-built_in>source</span>-to-image</span></code></pre><ul> <li>Linux \u4f7f\u7528</li> </ul> <p>\u5728<a href=https://github.com/openshift/source-to-image/releases>\u7248\u672c\u53d1\u5e03\u9875\u9762</a>\u627e\u5230\u5bf9\u5e94\u94fe\u63a5\u4e0b\u8f7d</p> <pre class=hljs><code class=language-shell>curl -sSL https://github.com/openshift/source-to-image/releases/download/v1.1.14/source-to-image-v1.1.14-874754de-linux-amd64.tar.gz | tar zxf - -C /usr/local/bin/ './s2i'</code></pre><ul> <li>Windows \u4f7f\u7528</li> </ul> <p>\u5728<a href=https://github.com/openshift/source-to-image/releases>\u7248\u672c\u53d1\u5e03\u9875\u9762</a>\u627e\u5230\u5bf9\u5e94\u94fe\u63a5\u4e0b\u8f7d</p> <p>\u4e0b\u8f7d</p> <pre class=hljs><code class=language-><span class=hljs-attribute>https</span>://github.com/openshift/source-to-image/releases/download/v<span class=hljs-number>1</span>.<span class=hljs-number>1</span>.<span class=hljs-number>14</span>/source-to-image-v<span class=hljs-number>1</span>.<span class=hljs-number>1</span>.<span class=hljs-number>14</span>-<span class=hljs-number>874754</span>de-windows-amd<span class=hljs-number>64</span>.zip</code></pre><ul> <li>\u6e90\u7801\u7f16\u8bd1</li> </ul> <pre class=hljs><code class=language-shell><span class=hljs-meta>$</span><span class=bash> go get github.com/openshift/<span class=hljs-built_in>source</span>-to-image</span>\n<span class=hljs-meta>$</span><span class=bash> <span class=hljs-built_in>cd</span> <span class=hljs-variable>${GOPATH}</span>/src/github.com/openshift/<span class=hljs-built_in>source</span>-to-image</span>\n<span class=hljs-meta>$</span><span class=bash> <span class=hljs-built_in>export</span> PATH=<span class=hljs-variable>$PATH</span>:<span class=hljs-variable>${GOPATH}</span>/src/github.com/openshift/<span class=hljs-built_in>source</span>-to-image/_output/<span class=hljs-built_in>local</span>/bin/linux/amd64/</span>\n<span class=hljs-meta>$</span><span class=bash> hack/build-go.sh</span></code></pre><h2 id=\u4f7f\u7528s2i>\u4f7f\u7528<code>s2i</code></h2> <p>\u4f7f\u7528\u65b9\u5f0f\u4e3a\uff1a</p> <pre class=hljs><code class=language-shell>s2i [source dir] [builder image] [built image name]</code></pre><p>\u53ef\u7528\u7684builder\u955c\u50cf\u6e90\u7801\u53ef\u4ee5\u5728 <a href=https://github.com/sclorg>Software Collection</a> \u627e\u5230</p> <h3 id=\u521b\u5efa\u955c\u50cfphp\u9879\u76ee\u955c\u50cf>\u521b\u5efa\u955c\u50cfPHP\u9879\u76ee\u955c\u50cf</h3> <p>PHP builder \u955c\u50cf</p> <ul> <li>centos/php-72-centos7</li> <li>centos/php-71-centos7</li> <li>centos/php-70-centos7</li> <li>centos/php-56-centos7</li> <li>centos/php-55-centos7</li> </ul> <p>\u521b\u5efatest-app\u955c\u50cf</p> <pre class=hljs><code class=language->s2i build /root/s2i-php-<span class=hljs-keyword>test</span>-<span class=hljs-keyword>app</span> centos/php-72-centos7 my-<span class=hljs-keyword>test</span>-<span class=hljs-keyword>app</span>\n\ndocker <span class=hljs-keyword>run</span> --<span class=hljs-keyword>rm</span> -p 8080:8080 my-<span class=hljs-keyword>test</span>-<span class=hljs-keyword>app</span>\n</code></pre><h4 id=\u914d\u7f6e\u8fd0\u884c\u65f6\u53c2\u6570>\u914d\u7f6e\u8fd0\u884c\u65f6\u53c2\u6570</h4> <h5 id=\u7ed9\u955c\u50cf\u914d\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u4f5c\u7528\u4e8ephpini>\u7ed9\u955c\u50cf\u914d\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u4f5c\u7528\u4e8e<code>php.ini</code>:</h5> <ul> <li><strong>ERROR_REPORTING</strong><ul> <li>Informs PHP of which errors, warnings and notices you would like it to take action for</li> <li>Default: E_ALL &amp; ~E_NOTICE</li> </ul> </li> <li><strong>DISPLAY_ERRORS</strong><ul> <li>Controls whether or not and where PHP will output errors, notices and warnings</li> <li>Default: ON</li> </ul> </li> <li><strong>DISPLAY_STARTUP_ERRORS</strong><ul> <li>Cause display errors which occur during PHP&#39;s startup sequence to be handled separately from display errors</li> <li>Default: OFF</li> </ul> </li> <li><strong>TRACK_ERRORS</strong><ul> <li>Store the last error/warning message in $php_errormsg (boolean)</li> <li>Default: OFF</li> </ul> </li> <li><strong>HTML_ERRORS</strong><ul> <li>Link errors to documentation related to the error</li> <li>Default: ON</li> </ul> </li> <li><strong>INCLUDE_PATH</strong><ul> <li>Path for PHP source files</li> <li>Default: .:/opt/app-root/src:/opt/rh/rh-php72/root/usr/share/pear (EL7)</li> <li>Default: .:/opt/app-root/src:/usr/share/pear (EL8, Fedora)</li> </ul> </li> <li><strong>PHP_MEMORY_LIMIT</strong><ul> <li>Memory Limit</li> <li>Default: 128M</li> </ul> </li> <li><strong>SESSION_NAME</strong><ul> <li>Name of the session</li> <li>Default: PHPSESSID</li> </ul> </li> <li><strong>SESSION_HANDLER</strong><ul> <li>Method for saving sessions</li> <li>Default: files</li> </ul> </li> <li><strong>SESSION_PATH</strong><ul> <li>Location for session data files</li> <li>Default: /tmp/sessions</li> </ul> </li> <li><strong>SESSION_COOKIE_DOMAIN</strong><ul> <li>The domain for which the cookie is valid.</li> <li>Default: </li> </ul> </li> <li><strong>SESSION_COOKIE_HTTPONLY</strong><ul> <li>Whether or not to add the httpOnly flag to the cookie</li> <li>Default: 0</li> </ul> </li> <li><strong>SESSION_COOKIE_SECURE</strong><ul> <li>Specifies whether cookies should only be sent over secure connections.</li> <li>Default: Off</li> </ul> </li> <li><strong>SHORT_OPEN_TAG</strong><ul> <li>Determines whether or not PHP will recognize code between <? and ?> tags</li> <li>Default: OFF</li> </ul> </li> <li><strong>DOCUMENTROOT</strong><ul> <li>Path that defines the DocumentRoot for your application (ie. /public)</li> <li>Default: /</li> </ul> </li> </ul> <h5 id=\u7ed9\u955c\u50cf\u914d\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u4f5c\u7528\u4e8eopcacheini>\u7ed9\u955c\u50cf\u914d\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u4f5c\u7528\u4e8e<code>opcache.ini</code>:</h5> <ul> <li><strong>OPCACHE_MEMORY_CONSUMPTION</strong><ul> <li>The OPcache shared memory storage size in megabytes</li> <li>Default: 128</li> </ul> </li> <li><strong>OPCACHE_REVALIDATE_FREQ</strong><ul> <li>How often to check script timestamps for updates, in seconds. 0 will result in OPcache checking for updates on every request.</li> <li>Default: 2</li> </ul> </li> </ul> <h5 id=\u4ee5\u4e0b\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u4f5c\u7528\u4e8eapache\u670d\u52a1\uff0c\u8fd0\u884c\u4e8eapache-mpm-prefork-\u6a21\u5f0f>\u4ee5\u4e0b\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u4f5c\u7528\u4e8eApache\u670d\u52a1\uff0c\u8fd0\u884c\u4e8eApache <a href=https://httpd.apache.org/docs/2.4/mod/mpm_common.html>MPM prefork</a> \u6a21\u5f0f:</h5> <ul> <li><strong>HTTPD_START_SERVERS</strong><ul> <li>The <a href=https://httpd.apache.org/docs/2.4/mod/mpm_common.html#startservers>StartServers</a> directive sets the number of child server processes created on startup.</li> <li>Default: 8</li> </ul> </li> <li><strong>HTTPD_MAX_REQUEST_WORKERS</strong><ul> <li>The <a href=https://httpd.apache.org/docs/2.4/mod/mpm_common.html#maxrequestworkers>MaxRequestWorkers</a> directive sets the limit on the number of simultaneous requests that will be served.</li> <li><code>MaxRequestWorkers</code> was called <code>MaxClients</code> before version httpd 2.3.13.</li> <li>Default: 256 (this is automatically tuned by setting Cgroup limits for the container using this formula: <code>TOTAL_MEMORY / 15MB</code>. The 15MB is average size of a single httpd process.</li> </ul> </li> </ul> <h5 id=\u4ee5\u4e0b\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u4f5c\u7528\u4e8ecomposer>\u4ee5\u4e0b\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u4f5c\u7528\u4e8ecomposer:</h5> <ul> <li><strong>COMPOSER_MIRROR</strong><ul> <li>Adds a custom composer repository mirror URL to composer configuration. Note: This only affects packages listed in composer.json.</li> </ul> </li> <li><strong>COMPOSER_INSTALLER</strong><ul> <li>Overrides the default URL for downloading Composer of <a href=https://getcomposer.org/installer>https://getcomposer.org/installer</a>. Useful in disconnected environments.</li> </ul> </li> <li><strong>COMPOSER_ARGS</strong><ul> <li>Adds extra arguments to the <code>composer install</code> command line (for example <code>--no-dev</code>).</li> </ul> </li> </ul> <h4 id=\u4ee3\u7801\u76ee\u5f55\u914d\u7f6e>\u4ee3\u7801\u76ee\u5f55\u914d\u7f6e</h4> <p>\u5f53\u4ee5\u4e0b\u6587\u4ef6\u5728\u4ee3\u7801\u76ee\u5f55\u4e2d\u65f6\uff0c\u4f1a\u88ab\u4f7f\u7528\uff1a</p> <ul> <li><p><strong>composer.json</strong></p> <p>List of dependencies to be installed with <code>composer</code>. The format is documented <a href=https://getcomposer.org/doc/04-schema.md>here</a>.</p> </li> </ul> <ul> <li><p><strong>.htaccess</strong></p> <p>In case the <strong>DocumentRoot</strong> of the application is nested within the source directory <code>/opt/app-root/src</code>, users can provide their own Apache <strong>.htaccess</strong> file. This allows the overriding of Apache&#39;s behavior and specifies how application requests should be handled. The <strong>.htaccess</strong> file needs to be located at the root of the application source.</p> </li> <li><p><strong>.s2i/environment</strong></p> <p>\u4e5f\u53ef\u4ee5\u7528\u4e8e\u914d\u7f6e\u73af\u5883\u53d8\u91cf</p> </li> </ul> <h3 id=\u521b\u5efanodejs\u9879\u76ee\u955c\u50cf>\u521b\u5efanodejs\u9879\u76ee\u955c\u50cf</h3> <p>\u53ef\u7528builder\u955c\u50cf</p> <ul> <li>centos/nodejs-10-centos7</li> <li>centos/nodejs-8-centos7</li> <li>centos/nodejs-6-centos7</li> </ul> <h4 id=\u670d\u52a1\u542f\u52a8>\u670d\u52a1\u542f\u52a8</h4> <p>\u9ed8\u8ba4\u4f1a\u8c03\u7528 <code>npm start</code> \u6765\u542f\u52a8\u670d\u52a1</p> <p>\u5f53<code>DEV_MODE=true</code>\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u8c03\u7528<code>nodemon &lt;main attribute in package.json&gt;</code>,\u6765\u542f\u52a8\u670d\u52a1\uff0c\u5982\u679c\u5931\u8d25\u518d\u8c03\u7528\uff0c<code>npm start</code> \u6765\u542f\u52a8\u670d\u52a1</p> <h4 id=\u53ef\u914d\u7f6e\u73af\u5883\u53d8\u91cf>\u53ef\u914d\u7f6e\u73af\u5883\u53d8\u91cf</h4> <p><strong><code>NODE_ENV</code></strong> NodeJS runtime mode (default: &quot;production&quot;)</p> <p><strong><code>DEV_MODE</code></strong> When set to &quot;true&quot;, <code>nodemon</code> will be used to automatically reload the server while you work (default: &quot;false&quot;). Setting <code>DEV_MODE</code> to &quot;true&quot; will change the <code>NODE_ENV</code> default to &quot;development&quot; (if not explicitly set).</p> <p><strong><code>NPM_RUN</code></strong> Select an alternate / custom runtime mode, defined in your <code>package.json</code> file&#39;s <a href=https://docs.npmjs.com/misc/scripts><code>scripts</code></a> section (default: npm run &quot;start&quot;). These user-defined run-scripts are unavailable while <code>DEV_MODE</code> is in use.</p> <p><strong><code>HTTP_PROXY</code></strong> Use an npm proxy during assembly</p> <p><strong><code>HTTPS_PROXY</code></strong> Use an npm proxy during assembly</p> <p><strong><code>NPM_MIRROR</code></strong> Use a custom NPM registry mirror to download packages during the build process</p> <h3 id=\u521b\u5efago\u9879\u76ee\u955c\u50cf>\u521b\u5efago\u9879\u76ee\u955c\u50cf</h3> <p>\u53ef\u7528builder\u955c\u50cf</p> <ul> <li>centos/go-toolset-7-centos7</li> </ul> <h4 id=\u914d\u7f6e\u8fd0\u884c\u65f6\u53c2\u6570-1>\u914d\u7f6e\u8fd0\u884c\u65f6\u53c2\u6570</h4> <ul> <li><strong>IMPORT_URL</strong></li> </ul> <p>\u6307\u5b9a\u5e94\u7528\u7684\u5bfc\u5165URL\uff0c\u5982 <code>github.com/someorg/somerepo</code></p> <ul> <li><strong>INSTALL_URL</strong></li> </ul> <p>\u5982\u679c<code>main.go</code>\u4e0d\u5728\u4ee3\u7801\u76ee\u5f55\u4e0b\u65f6\uff0c\u6307\u5b9abuild\u76ee\u5f55,\u5982 <code>github.com/someorg/somerepo/somefolder</code></p> <h3 id=\u521b\u5efajava\u9879\u76ee\u955c\u50cf>\u521b\u5efajava\u9879\u76ee\u955c\u50cf</h3> <p>\u7531\u4e8ejava\u9879\u76ee\u7684\u591a\u6837\u6027\uff0c\u5efa\u8bae\u8fdb\u884c\u5b9a\u5236</p> "}}]);