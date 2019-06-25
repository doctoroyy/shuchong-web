import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
// import Login from '../components/Login'
import SignUp from '../components/SignUp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ],
  mode: "history"
})
