## es6 中新增加了 `const` 和 `let`

 `const` 和 `let` 都是新增加的变量声名方式

### 有别于`var`声名,他们没有变量提升(Hoisting)机制

```javascript
if (!('someone' in window)) {
  var someone = 'Joe';
} else {
  someone = 'reload'
}

console.log(someone); 

```

总是会打印出 'reload'

在预编译阶段会变成

```javascript
var someone;

if (!('someone' in window)) {
  someone = 'Joe';
} else {
  someone = 'reload'
}

console.log(someone); 

```

### 禁止重声名

### const

### 临时性死区


