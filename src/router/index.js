import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require.ensure([], () => resolve(require('@/components/Home')), 'Home'),
    },
    {
      path: '/book/:id',
      name: 'bookInfo',
      component: resolve => require.ensure([], () => resolve(require('@/components/BookInfo')), 'BookInfo')
    },
    {
      path: '/sign-up.html',
      name: 'SignUp',
      component: resolve => require.ensure([], () => resolve(require('@/components/SignUp')), 'SignUp')

    },
    {
      path: '/book/:id/:chapterno',
      name: 'ChapterDetail',
      component: resolve => require.ensure([], () => resolve(require('@/components/Read')), 'Read')
    }
  ],
  mode: "history"
})
