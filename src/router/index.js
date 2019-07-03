import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import BookInfo from '@/components/BookInfo'
import SignUp from '@/components/SignUp'

import Read from '@/components/Read'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book/:id',
      name: 'bookInfo',
      component: BookInfo
    },
    { path: '/sign-up.html', name: 'SignUp', component: SignUp },
    {path: '/book/:id/:chapterno', name: 'ChapterDetail', component: Read}
  ],
  mode: "history"
})
