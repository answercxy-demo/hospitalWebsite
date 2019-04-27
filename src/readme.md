# 兴义人安精神病医院门户网站二次开发指南

## 前言

> 本指南假定你已经具备一定angualr基础，且接触过nodejs环境，若尚不具备以上条件，请先移步至[这些网站](#可能会用到得网站)先稍做了解。

## 简介

本项目完全基于angular7开发，原型来自于[angular官网中得英雄编辑器示例项目](https://angular.io/tutorial/toh-pt1)

## 快速开始

> 这里介绍如何快速启动项目得二次开发（假设你已经安装了nodejs，如果尚未安装请移步[nodejs下载页](https://nodejs.org/en/download/)）

1. 下载依赖

    `npm install`

2. 启动临时服务器

    `ng serve --open`

    > 启动临时服务器后你就可以一边修改一边预览你的修改效果了

3. 二次开发,定制开发

    这里你可以根据你的需求和业务再做二次开发，进行组件修改，或者编写新的组件等等，这里你首先要熟悉一下本项目得[目录结构](#目录结构)，并可能会用到一些[angular脚手架得命令行](#angualr-cli常用命令行)

4. 打包

    `ng build --prod`

    > 打包后得文件均在dist目录下，dist目录下得index.html即为本项目生产环境下的入口文件，部署到真正得生产环境需要注意：
    - index.html中的base标签请根据你的环境配置正确得href值
    - index.html中得控制viewport得meta标签修改为（此处缩放是因为未作手机适配，二次开发可考虑针对.content来作小屏幕适配）：

        ``` html
        <meta name="viewport" content="width=1280px">
        ```

    - 本项目是一个单页面应用，路由配置采取history api，应用内页面跳转时url后会跟随虚拟路径，刷新页面时若仍然想正常显示，请参考[此处](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)配置你的web服务器。

## angualr-cli常用命令行

- 生成某service `ng generate service [yourServicePath]`
- 生成某component `ng generate component [yourComponentPath]`

    [查看更多](https://angular.cn/cli)

## 目录结构

    - app [所有得开发代码都在此处完成]
      - classes [定义类型，发挥typeScript优势，在项目中使用，避免数据类型错误]
      - common [公共class]
      - fixtures [模拟装数据]
      - service [连接后台数据服务得service]
      - view [所有视图组件]

## 可能会用到得网站

[typeScript官网](http://www.typescriptlang.org/)

[angular官网](https://angular.io/)

[rxjs指南]([https://](https://github.com/ReactiveX/rxjs/blob/master/README.md))

## 后记

> 此网站前身托管在[answercxy得github仓库](https://www.github.com/answercxy-demo)中，但2019-5期修改不与具体业务对接，此仓库仅可作参考。