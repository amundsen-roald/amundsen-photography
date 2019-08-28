# Amundsen-photography

#### 阿蒙森的摄影博客网站源码

### 简介

<!-- [Amundsen-photography](https://github.com/amundsen-roald/amundsen-photography)是由个人维护、极简、摄影类型的博客网站，本项目使用容易上手的vue前端框架搭建。 -->

[Amundsen-photography](https://github.com/amundsen-roald/amundsen-photography) 是我正在设计与开发的个人摄影作品展示平台，用来发布我在生活和旅行中拍摄的照片，同时也促使我不断提高自己的各项技能。

### 关于设计
在浏览了很多hexo等众多静态博客的主题后，很遗憾没有找到自己喜欢的，遂产生了自己写一套简洁美观的UI界面的项目，可以方便快速地查看照片。

### 前序准备
你需要在本地安装 [node](https://nodejs.org/en/) 和 [git](https://git-scm.com/) , 本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/) 及vue全家桶等技术栈 , 提前了解和学习这些知识以便于了解本项目。

- 使用 [vue 2.x](https://cn.vuejs.org/index.html) + [TypeScript](https://www.typescriptlang.org/) 构建
- 使用 [vue-router](https://router.vuejs.org/zh/) 管理路由
- 使用 [vuex](https://vuex.vuejs.org/zh/) 管理状态
- 使用 [eslint](https://eslint.org/) 进行代码检查

### 开发
```
# 克隆项目
git clone git@github.com:amundsen-roald/amundsen-photography.git

# 进入项目
cd amundsen-photography

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve

# 代码校验
npm run lint

```

### 测试
- 该项目中未使用任何测试模块

### 部署
- 使用 [travis-ci](https://travis-ci.org/) 自动构建+部署vue项目，并展示在gh-pages页面

### Travis CI
- CI自动监听master分支变动，并部署至gh-pages分支
- 开发分支为develop，该分支不会触发CI运行

### 其他 
- 暂未使用第三方域名配置
- 该单页应用在github page中路由使用的是哈希模式

### CHANGELOG
[更新日志](./CHANGELOG.md)

### License
[MIT](https://github.com/amundsen-roald/amundsen-photography/blob/master/LICENSE)

Copyright (c) 2019 amundsen-roald
