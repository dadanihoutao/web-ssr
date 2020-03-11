# web-ssr

> 个人博客第二版 NUXT.JS 服务端渲染项目代码

## 项目使用

 - nuxt.config.js 中代理地址已经修改好，npm run dev 运行起来以后，如果没有其他错误，浏览器访问localhost:3000 就可以浏览到页面

``` bash
# 安装依赖文件
$ yarn install
# 或者
$ npm install

# 启动服务，在浏览器上打开 localhost:3000
$ yarn dev
# 或者
$ npm run dev

# 打包
$ yarn build
# 或者
$ npm run build

# 服务器上部署启动
$ yarn start
# 或者
$ npm run start
# 如果你服务器有安装pm2 可以使用如下命令启动
$ npm run pm2

```

## 项目简介

此项目是个人博客项目的第二版，因为第一版是采用的 vue iview vuex vue-router 全家桶搭建的，首次加载还是有点慢的，体验不是很好，年前正好有时间，学习了下 nuxt.js 框架，重构了博客的前端页面，现在首次加载速度流畅了好多。

**[第一版博客 github 地址](https://github.com/dadanihoutao/node-koa2-blog)** 
- 此版本前端页面技术栈 vue + vuex + vue-router + iview 开发

**[当前版本线上网址](http://www.lokiblog.com)**

- 有需要的同学可以先拿去学习，如果你还喜欢或者对自己有帮助，欢迎<strong style='color:red;'>star</strong>我。如果你有什么好的建议或者意见，也希望你提  [Issues](https://github.com/dadanihoutao/web-ssr/issues) 告诉我，大家一起讨论交流学习。


