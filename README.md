1. 

2. 项目的其他配置
2.1  项目运行起来的时候，让浏览器自动打开
```c
 "scripts": {
   <!-- 添加--open -->
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build"
  },
```

2.2 关闭 eslint 校验功能
------在根目录下 创建一个vue.config.js文件 配置：
```C
 module.exports = defineConfig({
   lintOnSave: false
})
```
比如：声明变量但是没有使用，eslint校验工具会报错

2.3 src文件夹简写方法，配置别名



5. 路由组件的搭建
5.1 vue-router
在上面分析的时候，路由组件应该有4个：Home、Search、Register、Login
- components文件夹：放置非路由组件(共用全局组件)
- pages/views文件夹：放置路由组件
  
5.2 总结
路由组件和非路由组件的区别？
1. 路由组件一般放置在pages/views文件夹中，非路由组件放置在components文件夹中
2. 路由组件一般需要在router文件夹中进行注册(使用时即为组件的名字，在App.vue中使用router-view占位符)， 非路由组件在使用的时候，一般都是以标签的形式使用
3. 注册完路由，不管是路由组件还是非路由组件，身上都有$route、$router属性

5.3 $route和$router
$route：一般获取新路由信息[路径、query、params等等]
$router：一般进行编程时导航进行路由跳转[push/replace]

5.4 路由的跳转
两种形式：
1. 声明式导航router-link，可以进行路由跳转(常用在单一的路由跳转的功能，务必要有to属性)
2. 编程式导航push/replace，可以进行路由跳转
- 编程式导航：声明式导航能做的，编程式导航都能做
- 但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑
  

6. Footer组件的显示与隐藏
6.1 显示或隐藏组件：v-if/v-show
Footer组件：在Home、Search显示Footer组件
Footer组件：在Login、Register隐藏Footer组件
6.2 v-show






