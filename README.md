# 书虫小说
基于 `vue` 实现的书虫小说前端界面。

## 截图

<div align=center>
	
</div>

## 主要技术

- Vue.js
- vue-cli 脚手架搭建项目
- vue-router 实现路由切换
- axios 进行数据请求
- flex 弹性布局
- Less 编写样式
- localStorage 本地数据存取

## 实现功能

- 
- 
- 

## 项目结构


```
src
├─ api
│    └─ index.js 定义的api接口信息
├─ assets
│    ├─ fonts
│    └─ images
│           └─ favicon.png
├─ components
│    ├─ BaseButton.vue 
│    ├─ BaseFooter.vue
│    ├─ BaseHeader.vue
│    ├─ BaseNav.vue
│    ├─ BaseSearchBar.vue 顶部的搜索条组件
│    ├─ Carousel.vue 轮播图组件
│    ├─ Divider.vue 分割线组件
│    ├─ Pagination.vue
│    ├─ TagList.vue
│    └─ book
│           ├─ Item.vue 小说信息封装
│           └─ List.vue 小说列表
├─ main.js
├─ router.js
├─ store
│    ├─ book.js
│    └─ index.js
├─ styles
│    ├─ base.less 定义的一些公用属性
│    └─ mixins.less 定义的一些公用less函数
├─ utils
│    └─ index.js 定义了一些公有函数（包含防抖、节流处理）
└─ views
       ├─ About.vue 
       ├─ App.vue
       ├─ Chapter.vue 章节详情
       ├─ Home.vue 主页
       └─ detail 小说目录详情
              ├─ BaseInfo.vue 
              ├─ Catalog.vue
              └─ index.vue

```

## 运行

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```

