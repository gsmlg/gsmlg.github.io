## 概念

  基于组件的软件工程（Component-based software engineering，简称CBSE）或基于组件的开发（Component-Based Development，简称CBD）是一种软件开发范型。

  它是现今软件复用理论实用化的研究热点，在组件对象模型的支持下，通过复用已有的构件，软件开发者可以“即插即用”地快速构造应用软件。

  这样不仅可以节省时间和经费，提高工作效率，而且可以产生更加规范、更加可靠的应用软件。


## 什么是组件？

摘自Wikipedia：

    一个单独的软件组件是一个软件包，一个Web服务，一个Web资源，或封装了一组相关功能（或数据）的模块。

    组件通过接口相互通信。当一个组件向系统的其他部分提供服务时，它会采用一个提供的接口来指定其他组件可以使用的服务，以及如何这样做。这个接口可以被看作是组件的签名 - 客户端不需要知道组件的内部工作（实现），以便使用它。这个原理导致组件被称为封装。

## Web设计的3层结构

- 结构层 Structural layer => HTML

- 表现层 Design layer => CSS

- 行为层 Behavioral layer => JavaScript

一个独立的组件需要包含这3层结构，并且提供API接口，和其他组件之间通信。

设计一个组件需要有可编程接口，可以通过行为层控制，而这些都需要通过js来控制

涉及技术：
- html in js
- css in js

## React组件

  React是一个用于创建用户UI的JavaScript库

  React组件可以被认为是一个基本的视图元素，用户界面中的一个片段。

  在一个应用中，组件具有巢状结构，整个应用由一些容器组件构成，而容器组件由多级组件嵌套构成。

## 设计分类：

  * Component UI组件

  * Container 组件容器，包含UI组件，并且给UI组件绑定相应的数据

### UI组件

UI组件需要包含了完整页面部分和展示结构，以及对应行为接口.

一个UI组件是完整的，独立的，可测试的。


可以参考的React UI组件库：

* [Semantic UI](https://react.semantic-ui.com/introduction)

* [Material UI](https://material-ui-next.com/getting-started/installation/)


目前需要提取当前UI组件，实现组件独立可重用。
当前有待实现的是Dialog模块的React组件化

### Container容器组件

容器组件是由UI组件和业务数据，处理逻辑组成
容器把业务数据和UI组件绑定，构成一个对应的功能模块

### container的绑定

在React中，组件拥有生命周期，数据和UI的绑定会和生命周期方法相关
通过生命周期方法来关联数据

### 高阶组件 Hight-Order Components

高阶组件是React的一项高级技术，来实现组件的重用。高阶组件是由React设计而衍生出的一种构成模式。

高阶组件实质上是一个函数，接受一个组件传入，并返回一个新的组件。
高阶组件常见于React相关的第三方库，比如Redux的connect函数

目前有待实现的高阶组件：
* loadModule：
分离一个模块到单独的文件，实现模块依赖加载，当时用到的时候才会去加载对应的功能模块。

* withReducer：
分割Reducer处理逻辑，分模块加载reducer控制逻辑

* withEffects：
分割模块action异步控制逻辑，管理action调度功能
目前可以参考的是saga和reactivex技术

## React context技术

React context技术可以在应用上发布一个共享数据集合，应用下的任何一个组件都可以通过声明订阅的方式来获取这个数据。

目前我们已经使用了这个技术的地方是redux的Provider，发布了store给所有组件

### 其他类似功能实现：

* LanguagePrivider 由react-intl提供，实现语言动态切换
* JssProvider 由CSS in JS技术提供，结合withStyles高阶组件来实现动态样式更新
* RouterProvider 由React-Router提供，实现router导航功能
