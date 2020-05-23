export default [
  // {
  //   path: '/user',
  //   component: '../layouts/UserLayout',
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       component: './user/login',
  //     },
  //   ],
  // },

  {
    path: 'user/login',
    name: '登录',
    component: './User'
  },

  {
    path: 'user/register',
    name: '注册',
    component: './User'
  },

  {
    path: 'category/:tagName',
    name: '分类',
    component: './Category/'
  },

  {
    path: '/',
    component: './index',
    name: '书虫小说',
  },
  {
    path: '/detail/:bookId/:chapterno',
    component: './Chapter',
    name: '章节正文'
  },

  {
    path: '/search',
    component: './Search',
    name: '搜索',
  },

  {
    path: '/detail/:bookId',
    component: './Detail',
    name: '目录详情',
  },

  {
    path: '/about',
    component: './About',
    name: '更新历史',
  },

  {
    path: 'user-center',
    name: '个人中心',
    component: './UserCenter',
  },

  {
    component: './404',
  },
]